function addTicket(id){
    $.ajax({
        url: 'handler/addTicket.php',
        type: 'post',
        data: {
            "categoryId": id
        },
        success: function(response){

        },
        error: function(xhr){
            alert("ERROR" + xhr);
        }
     });
}

window.onload = function getCategories(){
    $.ajax({
        url: 'handler/getCategories.php',
        type: 'get',
        data: { 
        },
        success: function(response){
            if(response == "") {
                return 'a';
            }
            const data = JSON.parse(response);
            for (let i = 0; i < data.length; i++) {
                const id = data[i].id;
                const categoryName = data[i].categoryName;
                const price = data[i].price;
                addTicketCategory(id, categoryName, price)
            }
        },
        error: function(xhr){
            alert("ERROR" + xhr.status);
        }
     });
}

function addTicketCategory(id, categoryName, price) {
    var selectElement = document.getElementById("ticket-category");
  
    var optionElement = document.createElement("option");
    optionElement.value = id;
    optionElement.text = categoryName;
  
    selectElement.appendChild(optionElement);
  }

  function buyTickets(){
    const numberOfTickets = document.getElementById('ticket-quantity').value
    for (let index = 0; index < numberOfTickets; index++) {
        addTicket(document.getElementById("ticket-category").value);
    }
  }
  