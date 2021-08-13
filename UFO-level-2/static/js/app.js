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
var filterWord = d3.select('#datetime')
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

    //Select the input element and get the raw data of date
    var inputElement1 = d3.select("#datetime");
    //get the value property of the datetime input element
    var inputValue1 = inputElement1.property("value").trim();

    //Select the input element and get the raw data of city
    var inputElement2 = d3.select("#cityname");
    //get the value property of the cityname input element
    var inputValue2 = inputElement2.property("value").trim();

    //Select the input element and get the raw data of state
    var inputElement3 = d3.select("#statename");
    //get the value property of the statename input element
    var inputValue3 = inputElement3.property("value").trim();
    
    //Select the input element and get the raw data of country
    var inputElement4 = d3.select("#countryname");
    //get the value property of the countryname input element
    var inputValue4 = inputElement4.property("value").trim();

    //Select the input element and get the raw data of shape
    var inputElement5 = d3.select("#shapename");
    //get the value property of the shapename input element
    var inputValue5 = inputElement5.property("value").trim();

    var filteredData = tableData.filter(tableData => tableData.datetime === inputValue1 && tableData.city === inputValue2 && tableData.state === inputValue3 && tableData.country === inputValue4 && tableData.shape === inputValue5);

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



