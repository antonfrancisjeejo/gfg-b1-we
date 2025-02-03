// const nameInput = document.getElementById("name");
const nameInput = document.querySelector("#name");
const emailInput = document.getElementById("email");
const ageInput = document.getElementById("age");
const contactInput = document.getElementById("contact");

const addBtn = document.getElementById("add");
const tbody = document.querySelector("tbody");

let users = [];

let updateIndex = "";

function init() {
  let lUsers = localStorage.getItem("users");

  users = JSON.parse(lUsers);

  displayData();
}

init();

addBtn.addEventListener("click", function (event) {
  event.preventDefault();
  if (this.innerHTML === "Add Info") {
    if (
      !nameInput.value ||
      !emailInput.value ||
      !ageInput.value ||
      !contactInput.value
    ) {
      alert("please enter all inputs");
      return;
    }

    const user = {
      name: nameInput.value,
      email: emailInput.value,
      age: ageInput.value,
      contact: contactInput.value,
    };

    users.push(user);
    reset();
    update(users);
  } else {
    if (
      !nameInput.value ||
      !emailInput.value ||
      !ageInput.value ||
      !contactInput.value
    ) {
      alert("please enter all inputs");
      return;
    }

    const user = {
      name: nameInput.value,
      email: emailInput.value,
      age: ageInput.value,
      contact: contactInput.value,
    };

    users = users.map((info, index) => {
      if (index == updateIndex) {
        return user;
      }
      return info;
    });
    reset();
    update(users);
  }
});

function displayData() {
  users.forEach((user, index) => {
    const row = document.createElement("tr");
    const name = document.createElement("td");
    const email = document.createElement("td");
    const age = document.createElement("td");
    const contact = document.createElement("td");
    const deleteBtn = document.createElement("button");
    const updateBtn = document.createElement("button");

    deleteBtn.innerText = "Delete";
    updateBtn.innerText = "Update";

    updateBtn.addEventListener("click", () => {
      nameInput.value = user.name;
      emailInput.value = user.email;
      ageInput.value = user.age;
      contactInput.value = user.contact;
      addBtn.innerText = "Update Info";
      updateIndex = index;
    });

    deleteBtn.addEventListener("click", () => {
      removeUser(index);
    });

    name.innerText = user.name;
    email.innerText = user.email;
    age.innerText = user.age;
    contact.innerText = user.contact;

    row.append(name);
    row.append(email);
    row.append(age);
    row.append(contact);
    row.append(updateBtn);
    row.append(deleteBtn);

    tbody.append(row);
  });
}

function removeUser(id) {
  const newUsers = users.filter((user, index) => {
    return index !== id;
  });
  users = [...newUsers];
  update(users);
  //   users = newUsers;
}

function update(users) {
  localStorage.setItem("users", JSON.stringify(users));
  tbody.innerHTML = "";
  displayData();
}

function reset() {
  nameInput.value = "";
  emailInput.value = "";
  ageInput.value = "";
  contactInput.value = "";
  addBtn.innerText = "Add Info";
}
