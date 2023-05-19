<?php
    class category {
        public $id;
        public $categoryName;
        public $price;
        
        public function __construct($id = null, $categoryName = null, $price = null){
            $this->id = $id;
            $this->categoryName = $categoryName;
            $this->price = $price;
        }
        
        public static function getCategories(mysqli $conn){
            $q = "SELECT * FROM ticket.category";
            return $conn->query($q);
        }
        
        
        // public static function removeReservation(mysqli $conn, $reservationId){
        //     $q = "DELETE FROM hotel.reservation WHERE id = $reservationId";
        //     return $conn->query($q);
        // }
        
        // public static function updateReservation(mysqli $conn, $reservationId, $numberOfDays){
        //     $q = "UPDATE hotel.reservation SET numberOfDays = $numberOfDays WHERE id = $reservationId";
        //     return $conn->query($q);
        // }
    }
?>