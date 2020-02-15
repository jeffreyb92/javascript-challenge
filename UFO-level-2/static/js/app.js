// from data.js
var tableData = data;
// console.log(tableData);
var tbody = d3.select("tbody");
// console.log(tbody);
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
  // console.log("THIS WORKS");

  var checkBoxOption = d3.selectAll("input");
  console.log(checkBoxOption);
  var filterOptions = [];
  checkBoxOption.forEach(check => {
    check.forEach(object => {
      if (object.property("checked") === true) {
      filterOptions.append(object);
    }
    })
    
  });
  console.log(filterOptions);
  // Assign the value of the dropdown menu option to a variable
  var option = checkBoxOption.property("checked");
  console.log(option);

  if (option === 'datetime') {
    var inputElement = d3.select("#filterInput");

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
        })
      })
    }
  
  if (option === 'city') {
    var inputElement = d3.select("#filterInput");

  // Get the value property of the input element
    var inputValue = inputElement.property("value");

    console.log(inputValue);

    var filteredData = tableData.filter(report => report.city === inputValue);

    console.log(filteredData);

  // Then, select the unordered list element by class name
    var tr = d3.selectAll("tbody tr");
  
    tr.remove();

  // append stats to the list
    filteredData.forEach((report) => {
      var row = tbody.append("tr");
      Object.entries(report).forEach(([key, value]) => {
      var cell = row.append("td");
      cell.text(value);
        })
      })
    }
  
    if (option === 'state') {
      var inputElement = d3.select("#filterInput");

      // Get the value property of the input element
      var inputValue = inputElement.property("value");
    
      console.log(inputValue);
    
      var filteredData = tableData.filter(report => report.state === inputValue);
    
      console.log(filteredData);
    
      // Then, select the unordered list element by class name
      var tr = d3.selectAll("tbody tr");
      
      tr.remove();
    
      // append stats to the list
      filteredData.forEach((report) => {
        var row = tbody.append("tr");
        Object.entries(report).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
          })
        })
    }

    if (option === 'country') {
      var inputElement = d3.select("#filterInput");

      // Get the value property of the input element
      var inputValue = inputElement.property("value");
    
      console.log(inputValue);
    
      var filteredData = tableData.filter(report => report.country === inputValue);
    
      console.log(filteredData);
    
      // Then, select the unordered list element by class name
      var tr = d3.selectAll("tbody tr");
      
      tr.remove();
    
      // append stats to the list
      filteredData.forEach((report) => {
        var row = tbody.append("tr");
        Object.entries(report).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
          })
        })
    }

    if (option === 'shape') {
      var inputElement = d3.select("#filterInput");

      // Get the value property of the input element
      var inputValue = inputElement.property("value");
    
      console.log(inputValue);
    
      var filteredData = tableData.filter(report => report.shape === inputValue);
    
      console.log(filteredData);
    
      // Then, select the unordered list element by class name
      var tr = d3.selectAll("tbody tr");
      
      tr.remove();
    
      // append stats to the list
      filteredData.forEach((report) => {
        var row = tbody.append("tr");
        Object.entries(report).forEach(([key, value]) => {
        var cell = row.append("td");
        cell.text(value);
          })
        })
    }

    if (option === "reset") {
    
      // Then, select the unordered list element by class name
      var tr = d3.selectAll("tbody tr");
      
      tr.remove();
      tableData.forEach((report) => {
        var row = tbody.append("tr");
        Object.entries(report).forEach(([key, value]) => {
          var cell = row.append("td");
          cell.text(value);
        });
      });
    }
  // // Select the input element and get the raw HTML node
  //   var inputElement = d3.select("#datetime");

  // // Get the value property of the input element
  //   var inputValue = inputElement.property("value");

  //   // console.log(inputValue);

  //   var filteredData = tableData.filter(report => report.datetime === inputValue);

  //   // console.log(filteredData);

  // // Then, select the unordered list element by class name
  //   var tr = d3.selectAll("tbody tr");
  
  //   tr.remove();

  // // append stats to the list
  //   filteredData.forEach((report) => {
  //       var row = tbody.append("tr");
  //       Object.entries(report).forEach(([key, value]) => {
  //       var cell = row.append("td");
  //       cell.text(value);
  //   });
  // });
});

