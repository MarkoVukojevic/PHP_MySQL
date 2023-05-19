<?php
    require  "../model/category.php";

    session_start();
    $host = "localhost";
    $db = "ticket";
    $username = "root";
    $password = "";
    try{
    $conn = new mysqli($host, $username, $password, $db);
        
        if ($conn->connect_errno) {
            exit("Konekcija neuspesna: " . $conn->connect_errno);
        }

        $res = category::getCategories($conn);

        $results = array();

        while($data = $res->fetch_assoc()){
            $id = $data['id'];
            $categoryName = $data['categoryName'];
            $price = $data['price'];
            $results[] = array('id' => $id, 'categoryName' => $categoryName, 'price' => $price);
        }

        echo json_encode($results);

        
    } catch(Exception $e){
        echo $e->getMessage() . "<br/>";
            while($e = $e->getPrevious()) {
                echo 'Previous exception: '.$e->getMessage() . "<br/>";
            }
    }
?>