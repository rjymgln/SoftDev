<?php
// order.php

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: POST");
header("Access-Control-Allow-Headers: Content-Type");

// Connect to MySQL
$conn = new mysqli("localhost", "root", "", "softdev");

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check for POST method
if ($_SERVER["REQUEST_METHOD"] === "POST") {
    $frappe_id = $_POST['frappe_id'] ?? null;
    $frappe_name = $_POST['frappe_name'] ?? null;
    $quantity = $_POST['quantity'] ?? null;
    $total_price = $_POST['total_price'] ?? null;

    if ($frappe_id && $frappe_name && $quantity && $total_price) {
        $stmt = $conn->prepare("INSERT INTO orders (frappe_id, frappe_name, quantity, total_price) VALUES (?, ?, ?, ?)");
        $stmt->bind_param("isid", $frappe_id, $frappe_name, $quantity, $total_price);

        if ($stmt->execute()) {
            echo "Order placed successfully.";
        } else {
            echo "Failed to place order in database.";
        }

        $stmt->close();
    } else {
        echo "Missing required fields.";
    }
} else {
    echo "Invalid request method.";
}

$conn->close();
?>
