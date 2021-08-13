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
init();

// Create event handlers for clicking the button pressing the enter key
button.on("click", runEnter)
filterWord.on("submit", runEnter)

// complete the event handler function fro the form
function runEnter() {
    // Prevent the page from refreshing
    d3.event.preventDefault();

    //Select the input element and get the raw HTML node
    var inputElement1 = d3.select("#datetime");

    //get the value property of the input element
    var inputValue = inputElement1.property("value").trim();
    console.log(inputValue)

    var filteredData = tableData.filter(tableData => tableData.datetime === inputValue);

    console.log(filteredData)


    function buildTable(data){
         d3.selectAll("tbody>tr").remove()
         data.forEach((dataRow) => {
            const row = tbody.append("tr");

            Object.values(dataRow).forEach((val) => {
                row.append("td").text(val);
            });
        });
    }
    buildTable(filteredData)
}



