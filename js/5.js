function Feedback(){
    alert("Nath Candy agradece seu feedback")
}
function validarEmail(){
    var email = document.querySelector('#email');
    var error = document.querySelector ('#error=email');
    if(!email.checkValidity()){
        error.innerHTML = 'Email inválido';
    }
}