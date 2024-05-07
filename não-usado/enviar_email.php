<?php
if($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);
    
    $nome = $data['nome'];
    $email = $data['email'];
    $assunto = $data['assunto'];
    $mensagem = $data['mensagem'];

    //configurar o email receptor
    $destinatario = 'vitor.wolf20@gmail.com';
    $assunto_email = 'Novo contato - ' . $assunto;
    $corpo_email = "nome: $nome\nEmail: $email\nMensagem:\n$mensagem";

    //Enviar o email
    if (mail($destinatario, $assunto_email, $corpo_email)) {
        http_response_code(200);
        echo json_encode(['message' => 'Email enviado com sucesso.']);
    } else {
        http_response_code(500);
        echo json_encode(['error' => 'Erro ao enviar o email.']);
    } else {
        http_response_code(405);
        echo json_encode(['error' => 'Método não permitido.']);
    }
}

?>