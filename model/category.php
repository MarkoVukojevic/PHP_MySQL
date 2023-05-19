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
            $q = "SELECT * FROM ticket.categories";
            return $conn->query($q);
        }

        public static function getReservationsById(mysqli $conn, $userId) {
            $q = "SELECT r.id, r.date, r.numberOfDays, r.roomId, r.userId, u.username, ro.price 
                  FROM hotel.reservation AS r
                  INNER JOIN hotel.user AS u ON r.userId = u.id
                  INNER JOIN hotel.room AS ro ON r.roomId = ro.id
                  WHERE u.id='$userId'";
            return $conn->query($q);
        }
        
        public static function addReservation(mysqli $conn, $date, $numberOfDays, $roomId, $userId){
            $q = "INSERT INTO `hotel`.`reservation` (`date`, `numberOfDays`, `roomId`, `userId`) VALUES ('$date', '$numberOfDays', '$roomId', '$userId')";
            return $conn->query($q);
        }
        
        
        public static function removeReservation(mysqli $conn, $reservationId){
            $q = "DELETE FROM hotel.reservation WHERE id = $reservationId";
            return $conn->query($q);
        }
        
        public static function updateReservation(mysqli $conn, $reservationId, $numberOfDays){
            $q = "UPDATE hotel.reservation SET numberOfDays = $numberOfDays WHERE id = $reservationId";
            return $conn->query($q);
        }
    }
?>