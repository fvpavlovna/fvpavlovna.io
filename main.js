var rIndex,
table = document.getElementById("table");

// check the empty input
function checkEmptyInput()
{
var isEmpty = false,
    fname = document.getElementById("fname").value,
    tname = document.getElementById("tname").value,
    cname = document.getElementById("cname").value;

if(fname === ""){
    alert("Name Can`t Be Empty");
    isEmpty = true;
}
else if(tname === ""){
    alert("Type Can`t Be Empty");
    isEmpty = true;
}
else if(cname === ""){
    alert("Color Can`t Be Empty");
    isEmpty = true;
}
return isEmpty;
}

// add Row
function addHtmlTableRow()
{
// get the table by id
// create a new row and cells
// get value from input text
// set the values into row cell's
if(!checkEmptyInput()){
var newRow = table.insertRow(table.length),
    cell1 = newRow.insertCell(0),
    cell2 = newRow.insertCell(1),
    cell3 = newRow.insertCell(2),
    fname = document.getElementById("fname").value,
    tname = document.getElementById("tname").value,
    cname = document.getElementById("cname").value;

cell1.innerHTML = fname;
cell2.innerHTML = tname;
cell3.innerHTML = cname;
// call the function to set the event to the new row
selectedRowToInput();
}
}

// display selected row data into input text
function selectedRowToInput()
{

for(var i = 1; i < table.rows.length; i++)
{
    table.rows[i].onclick = function()
    {
      // get the seected row index
      rIndex = this.rowIndex;
      document.getElementById("fname").value = this.cells[0].innerHTML;
      document.getElementById("tname").value = this.cells[1].innerHTML;
      document.getElementById("cname").value = this.cells[2].innerHTML;
    };
}
}
selectedRowToInput();

function editHtmlTbleSelectedRow()
{
var fname = document.getElementById("fname").value,
    tname = document.getElementById("tname").value,
    cname = document.getElementById("cname").value;
if(!checkEmptyInput()){
table.rows[rIndex].cells[0].innerHTML = fname;
table.rows[rIndex].cells[1].innerHTML = tname;
table.rows[rIndex].cells[2].innerHTML = cname;
}
}

function removeSelectedRow()
{
table.deleteRow(rIndex);
// clear input text
document.getElementById("fname").value = "";
document.getElementById("tname").value = "";
document.getElementById("cname").value = "";
}