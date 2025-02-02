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