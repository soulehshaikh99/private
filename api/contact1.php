<?php
// contact1.php

// Set the response header to JSON
header('Content-Type: application/json');

// Load the private key
$privateKeyPem = file_get_contents('./../data/private_key_2048.pem');
$privateKey = openssl_pkey_get_private($privateKeyPem);

if (!$privateKey) {
    http_response_code(500); // Internal Server Error
    echo json_encode([
        'status' => 'error',
        'message' => 'Failed to load private key.'
    ]);
    exit;
}

// Read the raw JSON data from the request body
$requestData = json_decode(file_get_contents('php://input'), true);

if (json_last_error() !== JSON_ERROR_NONE) {
    http_response_code(400); // Bad Request
    echo json_encode([
        'status' => 'error',
        'message' => 'Invalid JSON data.'
    ]);
    exit;
}

// Check if the 'data' key exists in the request
if (!isset($requestData['data'])) {
    http_response_code(400); // Bad Request
    echo json_encode([
        'status' => 'error',
        'message' => 'Missing "data" in request.'
    ]);
    exit;
}

// Get the encrypted data from the request
$encryptedBase64 = $requestData['data'];

// Decode the base64 encrypted data
$encrypted = base64_decode($encryptedBase64);

if ($encrypted === false) {
    http_response_code(400); // Bad Request
    echo json_encode([
        'status' => 'error',
        'message' => 'Invalid base64 data.'
    ]);
    exit;
}

// Decrypt the data
$decrypted = '';
$success = openssl_private_decrypt($encrypted, $decrypted, $privateKey, OPENSSL_PKCS1_OAEP_PADDING);

if (!$success) {
    http_response_code(400); // Bad Request
    echo json_encode([
        'status' => 'error',
        'message' => 'Decryption failed.'
    ]);
    exit;
}

// Process the decrypted data
$payload = json_decode($decrypted, true);

if (json_last_error() !== JSON_ERROR_NONE) {
    http_response_code(400); // Bad Request
    echo json_encode([
        'status' => 'error',
        'message' => 'Invalid JSON in decrypted data.'
    ]);
    exit;
}

// Return a success response
echo json_encode([
    'status' => 'success',
    'message' => 'Message received and decrypted successfully.',
    'data' => $payload
]);

// Free the key from memory
openssl_free_key($privateKey);
?>