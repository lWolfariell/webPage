/* document.getElementById('contato_form').addEventListener('submit', (event) =>{
    event.preventDefault()//evitar atualização da tela
    let nome = document.getElementById('nome').value
    let email = document.getElementById('email').value
    let assunto = document.getElementById('assunto').value
    let mensagem = document.getElementById('mensagem').value

    //enviar dados do formulário para servidor:
    fetch('/enviar_email.php', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({nome, email, assunto, mensagem }),
    })
    .then(response => {
        if( response.ok) {
            alert('Mensagem enviada! Obrigado!')
        } else {
            alert('Ocorreu um erro ao enviar a mensagem.')
        }
    })
    .catch(error => {
        console.error('Erro ao enviar a mensagem:', error);
        alert('Ocorreu um erro ao enviar a mensagem.')
    })
    
    
}) */
/* function criarElementosApi() {
    const formulario = document.getElementById('contato_form');
    formulario.innerHTML += `
        <input type="text" name="honeypot" style="display: none;">
        <input type="hidden" name="accessKey" value="b33668c8-381e-414f-8f48-2af6ab3dec95"> 
        <input type="text" name="honeypot" style="display: none;">
        <input type="hidden" name="redirectTo" value="/obrigado.html">
    `;
} */




