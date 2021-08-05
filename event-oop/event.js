// create event class
class Event {//like a blueprint
  constructor(name, description){
    this.name = name;
    this.description = description;
    this.availableTickets = [];
  }//end constructor

  addAvailableTickets(ticketName, ticketPrice){//this is in the prototype chain
    this.availableTickets.push([ticketName, ticketPrice])
    console.log(this.availableTickets)
    console.log(this)//refers to the event instance
  }
 
  //Add a function to Event called allTickets
  allTickets(){
    //
    let stringofAllTickets = "All tickets:"
    for(let i = 0; i < this.availableTickets.length; i++){
      //referring to this event
      let t = this.availableTickets[i];
      //returns a string representing all ticket types and prices
      //stringofAllTickets = `All tickets: 1. ${this.availableTickets[i][0]} (${this.availableTickets[i][1]})`
      stringofAllTickets = stringofAllTickets +  `  ${i + 1}. ${this.availableTickets[i][0]} (${this.availableTickets[i][1]})`
    }//end of for loop
    return stringofAllTickets;
  }  
}

// use event class to create an object and assign values to them
const eventObj1 = new Event(
  "KLOS Golden Gala",
  "An evening with Hollywood vampires"
);

const eventObj2 = new Event(
  "Skillet and Sevendust",
  "Victorious War Tour"
);

const eventObj3 = new Event(
  "Jenny Lewis",
  "On The Line Tour 2019"
);

//create empty array
const eventArray = new Array();


// pushing multiple objects to an array at once
eventArray.push(eventObj1, eventObj2, eventObj3);
//console.log(eventArray)


//DOM Manipulation instead of Jquery
//select root element
const eventList = document.getElementById("event")//grab event list
eventArray.forEach(event => {
  const li = document.createElement("li")
  li.innerHTML =`${event.name} - ${event.description}`
  eventList.appendChild(li)
})



class TicketType {
  constructor(ticketName, ticketPrice){
    this.ticketName = ticketName;
    this.ticketPrice = ticketPrice;
  }
  sayTicketType(){
    
  }

}

eventObj1.addAvailableTickets("human", 299);//
eventObj1.addAvailableTickets("vampire", 99);

eventObj2.addAvailableTickets("General Admission", 25)
eventObj2.addAvailableTickets("Floor Seating", 80)

eventObj3.addAvailableTickets("Orchestra", 300)
eventObj3.addAvailableTickets("Mezzanine", 200)
eventObj3.addAvailableTickets("Balcony", 100)



