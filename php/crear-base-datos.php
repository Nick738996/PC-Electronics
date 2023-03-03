<?php
$servername = "localhost";
$username = "root";
$password = "123456789";

// Create connection
$conn = mysqli_connect($servername, $username, $password);
// Check connection
if (!$conn) {
    die("Conexión fallida: " . mysqli_connect_error());
}

// Create database
$sql = "CREATE DATABASE productos";
if (mysqli_query($conn, $sql)) {
    echo "Base de datos creada Satisfactoriamente";
} else {
    echo "Error creando base de datos: " . mysqli_error($conn);
}

mysqli_close($conn);
?> 