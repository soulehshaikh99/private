<?php

header('Content-Type: application/json');

$file_path = '../data/search.json';

if (file_exists($file_path)) {
    $data = @file_get_contents($file_path);
    
    if ($data === false) {
        http_response_code(503);
        echo json_encode([
            "success" => false,
            "error" => "Service not available"
        ]);
    } else {
        http_response_code(200);
        echo json_encode([
            "success" => true,
            "data" => $data
        ]);
    }
} else {
    http_response_code(404);
    echo json_encode([
        "success" => false,
        "error" => "Search data cannot be found"
    ]);
}

?>
