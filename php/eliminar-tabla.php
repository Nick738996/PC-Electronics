<?php
$servername = "localhost";
$username = "root";
$password = "123456789";
$dbname = "productos";
// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if (!$conn) {
    die("Conexión fallida: " . mysqli_connect_error());
}

// Delete database
$sql = "DROP DATABASE productos";
if (mysqli_query($conn, $sql)) {
    echo "Base de datos eliminada Satisfactoriamente";
} else {
    echo "Error eliminando la base de datos: " . mysqli_error($conn);
}

mysqli_close($conn);
?> 