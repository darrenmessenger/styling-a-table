// Function to loop through the table cells so that the status cells
// can be formatted with a different colour
function changeStatusColor() {
  var table = document.getElementById("study-table");
  for (var i = 0, row; !!(row = table.rows[i]); i++) {
    for (var j = 0, col; !!(col = row.cells[j]); j++) {
      if (col.id === "status") {
        var statusValue = col.innerHTML;
        statusValue = statusValue.trim();
        if (statusValue === "In Progress") {
          col.className = "inProgress";
        } else if (statusValue === "Completed") {
          col.className = "completed";
        } else {
          col.className = "notStarted";
        }
      }
    }
  }
}
// Call the function to change the status cell colour
changeStatusColor();