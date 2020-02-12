// from data.js
var tableData = data;
// console.log(tableData);
var tbody = d3.select("tbody");
console.log(tbody);
// YOUR CODE HERE!
tableData.forEach((report) => {
    var row = tbody.append("tr");
    Object.entries(report).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
    });
  });



var button = d3.select("#filter-btn");

button.on("click", function() {
    console.log("THIS WORKS");
  // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

  // Get the value property of the input element
    var inputValue = inputElement.property("value");

    // console.log(inputValue);

    var filteredData = tableData.filter(report => report.datetime === inputValue);

    // console.log(filteredData);

  // Then, select the unordered list element by class name
    var tr = d3.selectAll("tbody tr");
  
    tr.remove();

  // append stats to the list
    filteredData.forEach((report) => {
        var row = tbody.append("tr");
        Object.entries(report).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
  });
});

