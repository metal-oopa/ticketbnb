# Overview
TicketBnB is a full-stack application that simulates a ticketing platform where users can list their own tickets for events, purchase tickets from others, and manage their orders. Built using microservices, it leverages the power of Kubernetes and Docker for containerization and orchestration, ensuring scalability and reliability.

## Features:

 - **User Authentication & Authorization**: Secure sign-up and login functionality.
 - **Ticket Management**: Users can create, update, and list tickets for sale.
 - **Order Processing**: Purchase tickets and manage orders.
 - **Payment Handling**: Secure payment processing using the Stripe API.
 - **Ticket Expiration**: Automatic cancellation of orders if payment is not completed within a specified time.
 - **Event-Driven Architecture**: Services communicate asynchronously using NATS Streaming Server.

## Microservices Architecture:

The application consists of the following services:

 - **Auth**: Handles user authentication and authorization.
 - **Tickets**: Manages ticket creation, listing, and updating.
 - **Orders**: Processes orders for tickets.
 - **Payments**: Handles payments using the Stripe payment gateway.
 - **Expiration**: Manages ticket expiration and order cancellation.
 - **Client**: The frontend application built with Next.js.
 - **Common**: Contains shared middlewares and event interfaces for all services.
 
 Each service is isolated, with its own database and codebase, ensuring loose coupling and high cohesion.

## Tech Stack:

 - **Frontend**:
    - React
    - Next.js
 
 - **Backend**:
    - Node.js
    - Express
    - TypeScript
 - **Databases**:
    - MongoDB
 - **Event Streaming**:
    - NATS Streaming Server
 - **Payment Processing**:
    - Stripe API
 - **DevOps**:
    - Docker
    - Kubernetes
    - Skaffold

# Getting Started

## Prerequisites
 - **Docker**
 - **Kubernetes**: Use Docker Desktop's built-in Kubernetes or install Minikube.
 - **Skaffold**
 - **Node.js**: Version 14 or higher.
 - **NPM**: Version 6 or higher.

## Installation

1. Clone the repository:
```bash
git clone https://github.com/metal-oopa/ticketbnb.git
cd ticketbnb
```

2. Set Up Environment Variables

3. Update Hosts File

 - Add the following entry to your /etc/hosts file:

```bash
127.0.0.1 ticketing.dev
```

4. Start the Application
- In the root directory of the project, run:

```bash
skaffold dev
```
This command will build all Docker images, apply Kubernetes manifests, and set up port forwarding.

5. Access the Application
- Open your browser and navigate to [http://ticketing.dev](http://ticketing.dev).
  
## Usage

1. **Landing Page**
 - Upon accessing the application, you'll see the landing page with all available tickets listed.
 - If no tickets are available, the page will indicate that.
2. **User Authentication**
 - Click on Sign Up or Sign In to create a new account or log into an existing one.
 - Authentication is required to buy or sell tickets.
3. **Listing Tickets**
 - After logging in, navigate to Sell Tickets.
Provide the ticket details such as Title and Price.
 - Submit the form to list your ticket for sale.
4. **Buying Tickets**
 - Browse available tickets on the landing page.
 - Click on a ticket to view its details.
 - Proceed to purchase by clicking Purchase.
 - You'll be redirected to the payment page to complete the transaction using Stripe.
5. **Managing Orders**
 - Navigate to the Orders page to view your current and past orders.
 - Order statuses include Created, Cancelled, Awaiting Payment, and Complete.
6. **Payment Processing**
 - Payments are securely processed using the Stripe API.
 - Ensure you have set up your Stripe API key in the Kubernetes secret.
7. **Ticket Expiration**
 - Tickets have an expiration time from the time of order creation.
 - If payment is not completed within this time, the order is automatically cancelled.