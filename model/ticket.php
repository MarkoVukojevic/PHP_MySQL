<?php
    class ticket {
        public $id;
        public $userId;
        public $categoryId;
        
        public function __construct($id = null, $userId = null, $categoryId = null){
            $this->id = $id;
            $this->userId = $userId;
            $this->categoryId = $categoryId;
        }

        public static function getTickets(mysqli $conn, $id) {
            $q = "SELECT t.id, c.categoryName, c.price, u.username
      FROM ticket.category AS c
      INNER JOIN ticket.ticket AS t ON t.categoryId = c.id
      INNER JOIN ticket.user AS u ON t.userId = u.id
      WHERE u.id = $id";

            return $conn->query($q);
        }

        public static function addTicket(mysqli $conn, $categoryId, $userId){
            $q = "INSERT INTO `ticket`.`ticket` (`categoryId`, `userId`) VALUES ('$categoryId', '$userId')";
            return $conn->query($q);
        }

        public static function deleteTicket(mysqli $conn, $ticketId){
            $q = "DELETE FROM ticket.ticket WHERE id = $ticketId";
            return $conn->query($q);
        }
    }
?>