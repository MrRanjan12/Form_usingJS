const submitBtn = document.getElementById('submitBtn');
const nameError = document.getElementById('nameError');

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();
  if (validateName()) {
    alert("Form submitted successfully");
    // You can add code here to submit the form data or perform other actions
  }
});

function validateName() {
  let name = document.getElementById('name').value;
  if (name.length == 0) {
    nameError.innerHTML = "Name is required";
    return false;
//   } else {
    // nameError.innerHTML = ""; // Clear error message if name is valid
   
  }
   return true;
}