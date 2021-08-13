// from data.js
var tableData = data;

// YOUR CODE HERE!

// select the table area with tbody
var tbody = d3.select("tbody");

function init(){
// build a function to show the table data on index page

    tableData.forEach((dataRow) => {
        const row = tbody.append("tr");

        Object.values(dataRow).forEach((val) => {
            row.append("td").text(val);
            });
        });
}

// find the filter first
var filterWord = d3.select('.form-control')
// Select the button
var button = d3.select("#filter-btn")


// Create event handlers for clicking the button pressing the enter key
button.on("click", runEnter)
filterWord.on("submit", runEnter)

// complete the event handler function fro the form
function runEnter() {
    // Prevent the page from refreshing
    d3.event.preventDefault();

    //Select the input element and get the raw HTML node
    var inputElement = d3.select(".form-control");

    //get the value property of the input element
    var inputValue = inputElement.node().value;
    console.log(inputValue)

    var filteredData = tableData.map(data => data.datetime === inputValue);

    console.log(filteredData)



    function buildTable(data){
        tbody.remove()
        data.forEach((dataRow) => {
            const row = tbody.append("tr");

            Object.values(dataRow).forEach((val) => {
                row.append("td").text(val);
            });
        });
    }
    buildTable(filteredData)
}

init();
