function ticketFactory(ticketInfo, sortBy) {
  class Ticket {
    constructor(destination, price, status) {
      this.destination = destination;
      this.price = Number(price);
      this.status = status;
    }
  }
  let arrayOfTickets = [];
  for (const currentTicketInfo of ticketInfo) {
    let [destination, price, status] = currentTicketInfo.split("|");
    arrayOfTickets.push(new Ticket(destination, price, status));
  }

  if (sortBy == "price") {
    arrayOfTickets.sort((a, b) => a[sortBy] - b[sortBy]);
  } else {
    arrayOfTickets.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));
  }
  return arrayOfTickets;
}

console.log(
  ticketFactory(
    [
      "Philadelphia|94.20|available",
      "New York City|95.99|available",
      "New York City|95.99|sold",
      "Boston|126.20|departed",
    ],
    "status"
  )
);
