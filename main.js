$(document).ready(function () {

  var table = document.getElementById("table");

  $.getJSON("data.json", function (data) {
    $.each(data, function (index, value) {
      //Create a row
      var row = document.createElement('tr');
      //Create a column
      var columnOne = document.createElement('td');
      var columnTwo = document.createElement('td');
      var columnThree = document.createElement('td');
      var aTag = document.createElement('a');
      //aTag.onclick = function() {
      aTag.setAttribute('href', 'https://www.google.com/maps?q=' + value.location[0] + ',' + value.location[1]);
      
      columnOne.innerText = value.name;
      columnTwo.innerText = value.description;
      columnThree.appendChild(aTag);
      aTag.innerText = ('Open in Google Maps');
      //add the column to the row
      row.appendChild(columnOne);
      row.appendChild(columnTwo);
      row.appendChild(columnThree);
      // add row to the table
      table.appendChild(row);
    });
  })
});
$(document).ready(table); 

//aTag.setAttribute('type','button');
      //}
      // var button = document.createElement('button');
      // button.setAttribute('value', '');
      //atag.createElement('button'); // "btn btn-primary"