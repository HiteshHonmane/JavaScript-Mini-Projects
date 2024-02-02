//Form Validation:

//Create an HTML form with input fields for name, email, and password. Write JavaScript code to validate the form before submission. Ensure that the name is not empty, the email follows a valid format, and the password is at least 8 characters long.

function NameCheck() {
    let nameInput =document.querySelector(".name");
    let submitBtn = document.querySelector("#submit");

    submitBtn.addEventListener("click",()=>{
      let nameValue = nameInput.value.trim();
        if(nameValue===""){
            alert("Invalid Name cant be empty")
        } else{
            console.log("Name Is correct")
        }
    
      })
    
}
NameCheck()