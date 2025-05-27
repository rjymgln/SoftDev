<?php
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");

$conn = new mysqli("localhost", "root", "", "softdev");
if ($conn->connect_error) {
    die(json_encode(["error" => "Connection failed"]));
}

$result = $conn->query("SELECT id, price FROM frappes");

$prices = [];
while ($row = $result->fetch_assoc()) {
    $prices[$row['id']] = number_format($row['price'], 2);
}

echo json_encode($prices);
$conn->close();
?>
