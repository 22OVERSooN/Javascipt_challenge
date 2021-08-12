// from data.js
var tableData = data;

// YOUR CODE HERE!

// select the table area with tbody
var tbody = d3.select("tbody");

// build a function to show the table data on index page
function buildTable(data){
    data.forEach((dataRow) => {
        const row = tbody.append("tr");

        Object.values(dataRow).forEach((val) => {
            row.append("td").text(val);
        }
        );
    });
}

buildTable(tableData)

// build a function to use filter

// find the filter first
var filterWord = d3.select('.form-control')
// Select the button
var button = d3.select("#filter-btn")

// Create event handlers for clicking the button pressing the enter key
button.button("click", runEnter)
filterWold.button("submit", runEnter)

function runEnter() {
    
}


