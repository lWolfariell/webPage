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
    
    
})  */






