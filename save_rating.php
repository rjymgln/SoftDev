<?php
// Database connection
$servername = "localhost";
$username = "root"; // Default XAMPP username
$password = "";     // Default XAMPP password
$dbname = "feedback";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Check if form data exists
if ($_SERVER["REQUEST_METHOD"] === "POST" && isset($_POST["drink"]) && isset($_POST["rating"])) {
    $drink_name = $conn->real_escape_string($_POST["drink"]);
    $rating = (int) $_POST["rating"];

    // Insert rating into database
    $sql = "INSERT INTO drink_ratings (drink_name, rating) VALUES ('$drink_name', $rating)";

    if ($conn->query($sql) === TRUE) {
        echo "<script>
        alert('Rating submitted successfully. Thank you for rating!');
        window.location.href = 'WebsiteFrappe.html';
        </script>";
    } else {
        echo "Error: " . $sql . "<br>" . $conn->error;
    }
} else {
    echo "Invalid form data.";
}

$conn->close();
?>
