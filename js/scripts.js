document.getElementById('form-contato').addEventListener('submit', async function (e) {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const mensagem = document.getElementById('mensagem').value;

    const data = {
        email: email,
        mensagem: mensagem
    };

    try {
        const response = await fetch('https://api.example.com/send-email', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            alert('E-mail enviado com sucesso!');
        } else {
            alert('Ocorreu um erro ao enviar o e-mail.');
        }
    } catch (error) {
        alert('Erro de conexão.');
    }
});
