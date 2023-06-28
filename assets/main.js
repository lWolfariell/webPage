const submit = document.querySelector('.input-btn');

submit.addEventListener('click', validar);

function validar(e) {
    e.preventDefault();

    const nome = document.getElementById('email');
    let valido = true;

    if (!nome.value) {
        const nomeErro = document.querySelector('.mensagem-erro_nome');
        nomeErro.classList.add('visible');
        nome.classList.add('invalid');
        nomeErro.setAttribute('aria-hidden', false);
        nomeErro.setAttribute('aria-invalid', true);
    }

    return valido;
}

