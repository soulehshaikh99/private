<?php
// contact1.php

// Enable error logging for debugging
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

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

// Check if required fields exist in the request
if (!isset($requestData['encryptedPayload']) || !isset($requestData['encryptedKey']) || !isset($requestData['encryptedIv'])) {
    http_response_code(400); // Bad Request
    echo json_encode([
        'status' => 'error',
        'message' => 'Missing required fields in request.'
    ]);
    exit;
}

// Decrypt the AES key and IV using RSA
$decryptedKey = '';
$decryptedIv = '';
$successKey = openssl_private_decrypt(base64_decode($requestData['encryptedKey']), $decryptedKey, $privateKey, OPENSSL_PKCS1_OAEP_PADDING);
$successIv = openssl_private_decrypt(base64_decode($requestData['encryptedIv']), $decryptedIv, $privateKey, OPENSSL_PKCS1_OAEP_PADDING);

if (!$successKey || !$successIv) {
    http_response_code(400); // Bad Request
    echo json_encode([
        'status' => 'error',
        'message' => 'Failed to decrypt AES key or IV.'
    ]);
    exit;
}

// Decrypt the payload using AES
$encryptedPayload = hex2bin($requestData['encryptedPayload']);
$decryptedPayload = openssl_decrypt($encryptedPayload, 'AES-256-CBC', $decryptedKey, OPENSSL_RAW_DATA, $decryptedIv);

if ($decryptedPayload === false) {
    http_response_code(400); // Bad Request
    echo json_encode([
        'status' => 'error',
        'message' => 'Failed to decrypt payload.'
    ]);
    exit;
}

// Process the decrypted payload
$payload = json_decode($decryptedPayload, true);

if (json_last_error() !== JSON_ERROR_NONE) {
    http_response_code(400); // Bad Request
    echo json_encode([
        'status' => 'error',
        'message' => 'Invalid JSON in decrypted payload.'
    ]);
    exit;
}

// Return a success response
echo json_encode([
    'status' => 'success',
    'message' => 'Message received and decrypted successfully.',
    'data' => $payload
]);
exit;
?>