let data = [];
data.sort();
data.reverse();

function formAll() {
  var html = "<table border='1|1' class=table>";
  setTimeout(() => {
    html += "<thead>";
    html += "<tr>";
    html += "<td>" + "ID" + "</td>";
    html += "<td>" + "Name" + "</td>";
    html += "<td>" + "Email" + "</td>";
    html += "<td>" + "Age" + "</td>";
    html += "<td>" + "Action" + "</td>";
    html += "</tr>";
    html += "</thead>";
    for (var i = 0; i < data.length; i++) {
      var id = i + 1;
      html += "<tr>";
      html += "<td>" + id + "</td>";
      html += "<td>" + data[i].name + "</td>";
      html += "<td>" + data[i].email + "</td>";
      html += "<td>" + data[i].age + "</td>";
      html +=
        "<td>" +
        `<button type="button" class="btn btn-danger" onclick='removeItem(${data[i].id})'>Delete</button>
        <button type="button" class="btn btn-warning" onclick='deleteItem(${data[i].id})'>Edit</button>` +
        "</td>";
      html += "</tr>";
    }
    html += "</table>";
    document.getElementById("table").innerHTML = html;
  }, 200);
}
formAll();

function addClick() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var age = document.getElementById("age").value;

  if (name && email && age) {
    let id = data.length + 1;
    data.push({ id: id, name: name, email: email, age: age });
    formAll();
    clearItems();
  }
}

function clearItems() {
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("age").value = "";
}

function removeItem(rec) {
  var filt = data.map((a, i) => {
    if (rec == a.id) {
      data.splice(i, 1);
      formAll();
    }
  });
}
