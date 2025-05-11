<?php
// Database connection
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "my_database"; // Replace with your database name
// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get form data
$username = $_POST['username'];
$email = $_POST['email'];
$password = $_POST['password'];
$confirm_password = $_POST['confirm_password'];

// Check if username already exists
$stmt = $conn->prepare("SELECT * FROM users WHERE username = ?");
$stmt->bind_param("s", $username);
$stmt->execute();

/* The following line is commented due to the fact that it is not necessary to fetch the result here. 
   The result is fetched later when checking if the username already exists.
    if ($password === $confirm_password) {

        // Prepare an SQL statement
        $stmt = $conn->prepare("INSERT INTO users (username, email, password) VALUES (?, ?, ?)");
        $stmt->bind_param("sss", $username, $email, $password);

        // Execute the statement
        if ($stmt->execute()) {    
            echo "<script>alert('Passwords do not match');</script>";
        } else {
            echo "Error: " . $stmt->error;
        }

        // Close the statement
        $stmt->close();
    } else {
        echo "<script>alert('Passwords do not match');</script>";
    }
*/