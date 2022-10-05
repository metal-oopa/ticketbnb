# Ticketbnb

A ticketing service built with the microservices architecture

## How it works:

1. You get the landing page with the tickets listed. There are no tickets available now.
   <img src="https://user-images.githubusercontent.com/70171925/189536318-e32e7f8e-d545-4fea-bda4-c5a3f67db308.png"  width="720">

2. You need to login to buy or sell a ticket.
3. You can list your own tickets.
4. You can buy tickets listed by other users.
5. You can see your orders on the orders page.

## Services:

1.  auth: Handles authentication and authorization.
2.  client: The client side of the application built using NextJS.
3.  common: Contains all the middlewares and event publishers/listeners interfaces for all services.
4.  expiration: Handles ticket expiration.
5.  orders: Handles ticket orders.
6.  payments: Handles payments using the stripe payment gateway.
7.  tickets: Handles ticket listing, creation and updation.
