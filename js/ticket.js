
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
        const data = JSON.parse(response);
        for (let i = 0; i < data.length; i++) {
          const id = data[i].id;
          const categoryName = data[i].categoryName;
          const price = data[i].price;
          const username = data[i].username;
          addTicket(id, categoryName, price);
        }
      },
      error: function (xhr) {
        alert("ERROR" + xhr.status);
      },
    });
  };
  
  function addTicket(id, category, price) {
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
  
    deleteButton.addEventListener("click", function() {
        deleteTicket(id);
        window.location.reload();
  });
    
    var ticketListContainer = document.querySelector(".ticket-list-container");
    ticketElement.appendChild(titleElement);
    ticketElement.appendChild(categoryElement);
    ticketElement.appendChild(dateElement);
    ticketElement.appendChild(deleteButton);
    ticketListContainer.appendChild(ticketElement);

  }
  