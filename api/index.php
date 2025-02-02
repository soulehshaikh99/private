<?php
require '../vendor/autoload.php';

// Create a Slim app instance
$app = new \Slim\App();

// Define a route to get the public key
$app->get('/getPublicKey', function ($request, $response, $args) {
    // Path to the public key file (PEM format)
    $publicKeyPath = './../data/public_key_2048.pem';

    // Check if the public key file exists
    if (!file_exists($publicKeyPath)) {
        return $response->withStatus(500)->withJson([
            'success' => false,
            'message' => 'Public key not found.'
        ]);
    }

    // Read the public key from the file
    $publicKey = file_get_contents($publicKeyPath);

    if (!$publicKey) {
        return $response->withStatus(500)->withJson([
            'success' => false,
            'message' => 'Failed to read public key.'
        ]);
    }

    // Return the public key in JSON format
    return $response->withJson([
        'success' => true,
        'publicKey' => $publicKey
    ]);
});

// Define a route to handle contact form submission and decryption
$app->post('/contact', function ($request, $response, $args) {
    // Enable error logging for debugging
    ini_set('display_errors', 1);
    ini_set('display_startup_errors', 1);
    error_reporting(E_ALL);

    // Load the private key
    $privateKeyPem = file_get_contents('./../data/private_key_2048.pem');
    $privateKey = openssl_pkey_get_private($privateKeyPem);

    if (!$privateKey) {
        return $response->withStatus(500)->withJson([
            'status' => 'error',
            'message' => 'Failed to load private key.'
        ]);
    }

    // Read the raw JSON data from the request body
    $requestData = $request->getParsedBody();

    if (json_last_error() !== JSON_ERROR_NONE) {
        return $response->withStatus(400)->withJson([
            'status' => 'error',
            'message' => 'Invalid JSON data.'
        ]);
    }

    // Check if required fields exist in the request
    if (!isset($requestData['encryptedPayload']) || !isset($requestData['encryptedKey']) || !isset($requestData['encryptedIv'])) {
        return $response->withStatus(400)->withJson([
            'status' => 'error',
            'message' => 'Missing required fields in request.'
        ]);
    }

    // Decrypt the AES key and IV using RSA
    $decryptedKey = '';
    $decryptedIv = '';
    $successKey = openssl_private_decrypt(base64_decode($requestData['encryptedKey']), $decryptedKey, $privateKey, OPENSSL_PKCS1_OAEP_PADDING);
    $successIv = openssl_private_decrypt(base64_decode($requestData['encryptedIv']), $decryptedIv, $privateKey, OPENSSL_PKCS1_OAEP_PADDING);

    if (!$successKey || !$successIv) {
        return $response->withStatus(400)->withJson([
            'status' => 'error',
            'message' => 'Failed to decrypt AES key or IV.'
        ]);
    }

    // Decrypt the payload using AES
    $encryptedPayload = hex2bin($requestData['encryptedPayload']);
    $decryptedPayload = openssl_decrypt($encryptedPayload, 'AES-256-CBC', $decryptedKey, OPENSSL_RAW_DATA, $decryptedIv);

    if ($decryptedPayload === false) {
        return $response->withStatus(400)->withJson([
            'status' => 'error',
            'message' => 'Failed to decrypt payload.'
        ]);
    }

    // Process the decrypted payload
    $payload = json_decode($decryptedPayload, true);

    if (json_last_error() !== JSON_ERROR_NONE) {
        return $response->withStatus(400)->withJson([
            'status' => 'error',
            'message' => 'Invalid JSON in decrypted payload.'
        ]);
    }

    // Return a success response
    return $response->withJson([
        'status' => 'success',
        'message' => 'Message received and decrypted successfully.',
        'data' => $payload
    ]);
});

// // Define a route for the home page
// $app->get('/', function ($request, $response, $args) {
//     return $response->write("Hello, Slim 3!");
// });

// // Define a route with a parameter
// $app->get('/hello/{name}', function ($request, $response, $args) {
//     return $response->write("Hello, " . $args['name'] . "!");
// });

// Run the Slim app
$app->run();