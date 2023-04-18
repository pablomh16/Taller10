function cambiarTema(tema) {
    var listaFrutas = document.getElementById("lista-frutas");
    if (tema === 1) {
        listaFrutas.className = "tema-1";
    } else if (tema === 2) {
        listaFrutas.className = "tema-2";
    }
}

const form = document.querySelector('#contact-form');
form.addEventListener('submit', event => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData);
    console.log(data);
});