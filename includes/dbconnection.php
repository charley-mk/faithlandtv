<?php 
// DB credentials.
define('DB_HOST','localhost');
define('DB_USER','jwccoke_havendb');
define('DB_PASS','pR-il0IA;Tiv');
define('DB_NAME','jwccoke_havendb');
// Establish database connection.
try
{
$dbh = new PDO("mysql:host=".DB_HOST.";dbname=".DB_NAME,DB_USER, DB_PASS,array(PDO::MYSQL_ATTR_INIT_COMMAND => "SET NAMES 'utf8'"));
}
catch (PDOException $e)
{
exit("Error: " . $e->getMessage());
}
$conn = mysqli_connect("localhost","jwccoke_havendb","pR-il0IA;Tiv","jwccoke_havendb");
?>




