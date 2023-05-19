
function deleteTicket(id) {
    $.ajax({
      url: "handler/deleteTicket.php",
      type: "delete",
      data: {
        id: id,
      },
      success: function (response) {
        window.location.reload();
      },
      error: function (xhr) {
        alert("GRESKA" + xhr);
      },
    });
  }
  
//   function updateReservation(numberOfDays, id) {
//     $.ajax({
//       url: "handler/updateReservation.php",
//       type: "put",
//       data: {
//         numberOfDays: numberOfDays,
//         id: id,
//       },
//       success: function (response) {
//         window.location.reload();
//       },
//       error: function (xhr) {
//         alert("Error: " + xhr);
//       },
//     });
//   }
  
  window.onload = function getTickets() {
    $.ajax({
      url: "handler/getTickets.php",
      type: "get",
      data: {
      },
      success: function (response) {
        if (response == "") {
          console.log(localStorage.getItem("id"));
          return "a";
        }
        console.log(response);
        const data = JSON.parse(response);
        for (let i = 0; i < data.length; i++) {
          const id = data[i].id;
          const categoryName = data[i].categoryName;
          const price = data[i].price;
          const username = data[i].username;
          addTicket(id, categoryName, price);
          console.log(id + categoryName + price + username)
        //   displayReservation(
        //     id,
        //     date,
        //     numberOfDays,
        //     username,
        //     pricePerDay * numberOfDays
        //   );
        }
      },
      error: function (xhr) {
        alert("ERROR" + xhr.status);
      },
    });
  };
  
  function addTicket(id, category, price) {
    // Create HTML elements for the new ticket
    var ticketElement = document.createElement("div");
    ticketElement.className = "ticket";
    
    var titleElement = document.createElement("h3");
    titleElement.textContent = "Concert Ticket";
    
    var categoryElement = document.createElement("p");
    categoryElement.textContent = "Category: " + category;
    
    var dateElement = document.createElement("p");
    dateElement.textContent = "Price: " + price;

    var deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.className = "btn btn-danger";
  
  // Add click event listener to delete the ticket
    deleteButton.addEventListener("click", function() {
        deleteTicket(id);
        window.location.reload();
  });
    
    // Append the new ticket elements to the ticket list container
    var ticketListContainer = document.querySelector(".ticket-list-container");
    ticketElement.appendChild(titleElement);
    ticketElement.appendChild(categoryElement);
    ticketElement.appendChild(dateElement);
    ticketElement.appendChild(deleteButton);
    ticketListContainer.appendChild(ticketElement);

  }
  