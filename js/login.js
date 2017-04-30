/*** Login ***/
// Get the modal
var modal = document.getElementById('id01');

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

function check(form)/*function to check userid & password*/
{
    /*the following code checkes whether the entered userid and password are matching*/
    if(form.uname.value == "ju" && form.psw.value == "ju")
    {
        window.open('indexRegisto.html')/*opens the target page while Id & password matches*/
    }
    else
    {
        alert("Error Password or Username")/*displays error message*/
    }
}