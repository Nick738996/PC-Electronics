<?php
$servername = "localhost";
$username = "root";
$password = "123456789";
$dbname = "productos";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
    die("Connection failed: " . mysqli_connect_error());
}

// sql to create table
$sql = "CREATE TABLE tabla29 (
id VARCHAR(10) PRIMARY KEY,
nombre VARCHAR(20),
marca VARCHAR(20),
precio CHAR(50),
cantidad CHAR(10)
)";

if (mysqli_query($conn, $sql)) {
    echo "Tabla29 creada Satisfactoriamente";
} else {
    echo "Error creando tabla29: " . mysqli_error($conn);
}

mysqli_close($conn);
?> 