const ticketList = document.getElementById("ticketList"); // Grabbing ticket list from the HTML file

async function displaySupportTickets(customerId) {
    try {
        const customerResponse = await fetch(`https://jsonplaceholder.typicode.com/posts/${customerId}`); // This is fetching the posts from the URL 

        if (!customerResponse.ok) {
            throw new Error("Fetch orders unsuccessful"); // Checking if fetch was successful or not
        }
        const tickets = await customerResponse.json();
        
        if (!tickets.length) { // Checking if the tickets exist, if not it pushes an error code
            throw new Error("Tickets not found")
        }     
        tickets.forEach(ticket => { // These are looping through the tickets to display them properly
            const ticketElement = document.createElement("div");
            ticketElement.classList.add("ticket") 
        
            const ticketId = document.createElement("div"); // Creating ticket ID element
            ticketId.textContent = `Ticket ID: ${ticket.id}`;
        
            const customerName = document.createElement("h2"); // Creating customer name element
            customerName.textContent = `Customer Name: ${ticket.userId}`;
        
            const details = document.createElement("p"); // Creating a section for the details of each ticket
            details.textContent = `Ticket Details: ${ticket.body}`;
        
            ticketElement.appendChild(ticketId);
            ticketElement.appendChild(customerName);
            ticketElement.appendChild(details);
            ticketElement.appendChild(ticketElement);
        
        });
    } catch(error) {
            console.error("Error:", error.message); // Throws an error if something goes wrong
    }   finally { // 

    };
};
