<?php
// getPublicKey.php

// Set the response header to JSON
header('Content-Type: application/json');

// Path to the public key file (PEM format)
$publicKeyPath = './../data/public_key_2048.pem';

// Check if the public key file exists
if (!file_exists($publicKeyPath)) {
    http_response_code(500); // Internal Server Error
    echo json_encode([
        'success' => false,
        'message' => 'Public key not found.'
    ]);
    exit;
}

// Read the public key from the file
$publicKey = file_get_contents($publicKeyPath);

if (!$publicKey) {
    http_response_code(500); // Internal Server Error
    echo json_encode([
        'success' => false,
        'message' => 'Failed to read public key.'
    ]);
    exit;
}

// Return the public key in JSON format
echo json_encode([
    'success' => true,
    'publicKey' => $publicKey
]);
?>