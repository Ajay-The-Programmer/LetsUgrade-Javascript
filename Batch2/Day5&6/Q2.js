let buses = [];

if (localStorage.getItem("buses") == null) {
  let stringbuses = JSON.stringify(buses);

  localStorage.setItem("buses", stringbuses);
}

display();
function display(newData = undefined) {
  let tableData = "";
  let stringbuses;
  if (newData == undefined) {
    stringbuses = JSON.parse(localStorage.getItem("buses"));
  } else {
    stringbuses = newData;
  }
  stringbuses.forEach(function (bus, index) {
    let curruntrow = `<tr>      
      <td>${index + 1}</td>
      <td>${bus.name}</td>
      <td>${bus.source}</td>
      <td>${bus.destination}</td>
      <td>${bus.number}</td>
      <td>${bus.passengerCapacity}</td>
      </tr>`;

    tableData += curruntrow;

    let name = (document.getElementById("name").value = "");
    let source = (document.getElementById("source").value = "");
    let destination = (document.getElementById("destination").value = "");
    let number = (document.getElementById("number").value = "");
    let passengerCapacity = (document.getElementById(
      "passengerCapacity"
    ).value = "");
  });
  document.getElementById("tdata").innerHTML = tableData;
}

function addbuses(event) {
  event.preventDefault();

  let bus = {};
  let name = document.getElementById("name").value;
  let source = document.getElementById("source").value;
  let destination = document.getElementById("destination").value;
  let number = document.getElementById("number").value;
  let passengerCapacity = document.getElementById("passengerCapacity").value;

  bus.name = name;
  bus.source = source;
  bus.destination = destination;
  bus.number = number;
  bus.passengerCapacity = Number(passengerCapacity);
  let stringbuses = JSON.parse(localStorage.getItem("buses"));
  stringbuses.push(bus);
  localStorage.setItem("buses", JSON.stringify(stringbuses));

  display(stringbuses);
  // console.log(localStorage.getItem("buses"));
}

function searchBySourceAndDestination() {
  let searchValue = document.getElementById("searchBus").value;
  let newData;
  let stringbuses = JSON.parse(localStorage.getItem("buses"));
  newData = stringbuses.filter(function (bus) {
    return (
      bus.source.toUpperCase().indexOf(searchValue.toUpperCase()) !=
      bus.destination.toUpperCase().indexOf(searchValue.toUpperCase())
    );
  });

  display(newData);
}
function search(newData = undefined) {
  stringbuses.forEach(function (bus, index) {
    let curruntrow = `<tr>      
      <td>${index + 1}</td>
      <td>${bus.name}</td>
      <td>${bus.source}</td>
      <td>${bus.destination}</td>
      <td>${bus.number}</td>
      <td>${bus.passengerCapacity}</td>
      </tr>`;

    tableData += curruntrow;
  });
}
