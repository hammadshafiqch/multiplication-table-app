// Function to generate multiplication table
function generateTable() {
    let number = document.getElementById("numberInput").value;
    let outputDiv = document.getElementById("tableOutput");
    outputDiv.innerHTML = ''; // Clear previous output
    
    if (number === '') {
        outputDiv.innerHTML = '<p>Please enter a number!</p>';
        return;
    }

    let tableHtml = '<table>';
    for (let i = 1; i <= 10; i++) {
        tableHtml += `<p>${number} x ${i} = ${number * i}</p>`;
    }
    tableHtml += '</table>';

    outputDiv.innerHTML = tableHtml;
}

// Add event listener to detect "Enter" key press
document.getElementById("numberInput").addEventListener("keydown", function(event) {
    if (event.key === "Enter") {
        generateTable();
    }
});
