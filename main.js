
var firstName = document.getElementById("firstName");
var lastName = document.getElementById("lastName");
var Phone = document.getElementById("Phone");
var Email = document.getElementById("Email");
var Note = document.getElementById("Note");
var addBtn = document.getElementById("addBtn");
var inputs = document.getElementsByClassName("form-control")
var Contacts = [];


if (JSON.parse(localStorage.getItem("ContactsList")) != null) {
    Contacts = JSON.parse(localStorage.getItem("ContactsList"))
    displayData();
}

addBtn.onclick = function () {
    addContact();
    displayData();
    clearForm();

}

function addContact() {
    var Contact =
    {
        firstName: firstName.value,
        lastName: lastName.value,
        Phone: Phone.value,
        Email: Email.value,
        Note: Note.value,
    }
    Contacts.push(Contact)
    localStorage.setItem("ContactsList", JSON.stringify(Contacts))
}
function displayData() {

    var trs = '';
    for (var i = 0; i < Contacts.length; i++) {
        trs +=
            `<tr>
         <td><img src="defult.jpg" class="rounded-circle sizing-photo" alt="..."></td>
         <td>${Contacts[i].firstName}</td>
        <td>${Contacts[i].lastName}</td>
        <td>${Contacts[i].Phone}</td>
        <td>${Contacts[i].Email}</td>
        <td>${Contacts[i].Note}</td>
        <td><button onclick="deleteContact(${i})" class="btn btn-danger">Delete</button></td>
        <td><button onclick="editContact()" class="btn btn-warning">Edit</button></td>
        </tr>`;
    }
    document.getElementById("tableBody").innerHTML = trs;
}
function clearForm() {
    for (var i = 0; i < inputs.length; i++) {
        inputs[i].value = "";
    }
}
function deleteContact(item) {
    Contacts.splice(item, 1);
    displayData()
    localStorage.setItem("ContactsList", JSON.stringify(Contacts))
}
function search(value) {
    var trs = '';
    for (var i = 0; i < Contacts.length; i++) {

        if (Contacts[i].firstName.includes(value)) 
        {
            
        trs +=
        `<tr>
        <td><img src="defult.jpg" class="rounded-circle sizing-photo" alt="..."></td>
        <td>${Contacts[i].firstName}</td>
        <td>${Contacts[i].lastName}</td>
        <td>${Contacts[i].Phone}</td>
        <td>${Contacts[i].Email}</td>
        <td>${Contacts[i].Note}</td>
        <td><button onclick="deleteContact(${i})" class="btn btn-danger">Delete</button></td>
        <td><button onclick="editContact()" class="btn btn-warning">Edit</button></td>
        </tr>`;
        }
    }
    document.getElementById("tableBody").innerHTML = trs;

}








