function openPopup() {
  document.getElementById("popup").style.display = "flex";
}

function checkLogin() {
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  if(user === "Username" && pass === "123456") {
    alert("Login Successful!");
    document.getElementById("popup").style.display = "none";
    window.location.href = "admin.html"; // redirect to admin dashboard
  } else {
    alert("Invalid credentials!");
  }
}


function logout() {
  window.location.href = "index.html"; // redirect back to parent dashboard
}
function openStudentPopup() {
  document.getElementById("studentPopup").style.display = "flex";
}

function closeStudentPopup() {
  document.getElementById("studentPopup").style.display = "none";
}

function addStudent() {
  const rollNo = document.getElementById("rollNo").value;
  const name = document.getElementById("name").value;
  const className = document.getElementById("class").value;
  const guardian = document.getElementById("guardian").value;

  if(rollNo && name && className && guardian) {
    const table = document.getElementById("studentTable");
    const row = table.insertRow();
    row.innerHTML = `
      <td>${rollNo}</td>
      <td>${name}</td>
      <td>${className}</td>
      <td>${guardian}</td>
      <td>
        <button class="edit-btn"><i class="fas fa-edit"></i></button>
        <button class="delete-btn"><i class="fas fa-trash-alt"></i></button>
      </td>
    `;
    closeStudentPopup();
    alert("Student added successfully!");
  } else {
    alert("Please fill all fields!");
  }
}

