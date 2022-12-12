const modal = document.querySelector('.moodal-conteiner')
const botao = document.querySelector('#button')
const formulario = document.querySelector("form")

function openModal(){
    modal.classList.add("active")
    botao.classList.replace("btn-info", "btn-warning")
    unloadScrollBars();
}

function closeModalConfirmar(){
    botao.classList.remove("btn-warning")
    botao.classList.add("btn-success")
    botao.disabled = true;
    modal.classList.remove("active") 
    reloadScrollBars()
}
function closeModalFechar(){
    botao.classList.replace("btn-warning", "btn-info")
    modal.classList.remove("active") 
    reloadScrollBars()
}

function unloadScrollBars() {
    document.documentElement.style.overflow = 'hidden';
}
function reloadScrollBars() {
    document.documentElement.style.overflow = 'auto';
}
