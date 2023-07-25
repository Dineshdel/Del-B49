const form = document.getElementById("form");
const table = document.getElementById("table");

  form.addEventListener("submit", function (event) {
  event.preventDefault();
  debugger;
  const name = document.getElementById("name").value;
    const foodcheckboxes = document.querySelectorAll(
    'input[name="food"]:checked'
  );
  const foodChoices = Array.from(foodcheckboxes).map(
    (checkbox) => checkbox.value
  );

  if (foodChoices.length < 2) {
    alert("Please choose at least 2 food options.");
    return;
  }

  const newRow = table.insertRow(); 
  const nameCol = newRow.insertCell(); 
  const foodCol = newRow.insertCell(); 

  nameCol.textContent = name;
  foodCol.textContent = foodChoices.join(", ");

  form.reset();
});