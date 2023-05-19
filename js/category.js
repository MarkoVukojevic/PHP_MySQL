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
                // console.log(localStorage.getItem("id")+"aa");
                return 'a';
            }
            // console.log(response);
            const data = JSON.parse(response);
            for (let i = 0; i < data.length; i++) {
                const id = data[i].id;
                const categoryName = data[i].categoryName;
                const price = data[i].price;
                console.log(id + categoryName + price);
                addTicketCategory(id, categoryName)
                // displayRoom(id, numberOfBeds, pricePerDay);
            }
        },
        error: function(xhr){
            alert("ERROR" + xhr.status);
        }
     });
}

function addTicketCategory(id, categoryName) {
    var selectElement = document.getElementById("ticket-category");
  
    // Create a new option element
    var optionElement = document.createElement("option");
    optionElement.value = id;
    optionElement.text = categoryName;
  
    // Add the option element to the select element
    selectElement.appendChild(optionElement);
  }

  function buyTickets(){
    const numberOfTickets = document.getElementById('ticket-quantity').value
    for (let index = 0; index < numberOfTickets; index++) {
        addTicket(document.getElementById("ticket-category").value);
    }
  }
  
  

// function displayRoom(id, numberOfBeds, pricePerDay){
//     const roomContainer = document.createElement('div');
//     roomContainer.classList.add('room');
    
//     const beds = document.createElement('p');
//     beds.textContent = "Beds: " + numberOfBeds;
    
//     const price = document.createElement('p');
//     price.textContent = "Price per day: " + pricePerDay;

//     const date = document.createElement('input');
//     date.type = 'date';
//     date.id = 'date';
//     const days = document.createElement('input');
//     days.type = 'number';
//     days.id = 'numberOfDays';
//     days.placeholder = 'Enter number of days';

//     const addBtn = document.createElement('button');
//     addBtn.textContent = 'Make reservation';
//     addBtn.classList.add('btn');
//     addBtn.setAttribute('onclick', `createReservation(${id})`);
    
//     roomContainer.appendChild(beds);
//     roomContainer.appendChild(price);
//     roomContainer.appendChild(date);
//     roomContainer.appendChild(days);
//     roomContainer.appendChild(addBtn);
    
//     const page = document.querySelector('.page');
//     page.appendChild(roomContainer);
// }