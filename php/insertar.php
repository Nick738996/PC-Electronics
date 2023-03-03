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

$i = $_POST['id'];
$n = $_POST['nombre'];
$m = $_POST['marca'];
$p = $_POST['precio'];
$c = $_POST['cantidad'];

$sql = "INSERT INTO tabla29 (id, nombre, marca, precio, cantidad) VALUES ('$i', '$n', '$m', '$p', '$c')";

if (mysqli_query($conn, $sql)) {
    echo "Producto Creado Satisfactoriamente";
} else {
    echo "Error: " . $sql . "<br>" . mysqli_error($conn);
}

mysqli_close($conn);
?> 
