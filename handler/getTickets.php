<?php
require "../model/ticket.php";

session_start();
$host = "localhost";
$db = "ticket";
$username = "root";
$password = "";
try {
    $conn = new mysqli($host, $username, $password, $db);

    if ($conn->connect_errno) {
        exit("Konekcija neuspesna: " . $conn->connect_errno);
    }

    $userID = $_COOKIE['user_id'];

    // $res = reservation::getReservations($conn);
    $res = ticket::getTickets($conn, $userID);

    $results = array();

    while ($data = $res->fetch_assoc()) {
        $id = $data['id'];
        $categoryName = $data['categoryName'];
        $price = $data['price'];
        $username = $data['username'];
        $results[] = array('id' => $id, 'categoryName' => $categoryName, 'price' => $price, 'username' => $username);
    }

    echo json_encode($results);



} catch (Exception $e) {
    echo $e->getMessage() . "<br/>";
    while ($e = $e->getPrevious()) {
        echo 'Previous exception: ' . $e->getMessage() . "<br/>";
    }
}
?>