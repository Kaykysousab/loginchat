
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const username = formData.get('username');
    const password = formData.get('password');


    if (username.length > 16) {
        alert ("erro ao digita, no maximo 16 caracteres");
        return;
    }
    // Nenhuma restrição para o nome de usuário
    // Apenas verifica se a senha está na lista de senhas permitidas
    const allowedPasswords = [
         "TsJm1KvFPh",
         "cvE2Of97S6",
         "BxZCfz7Mip",
         "sGpLh02J4K",
         "D9zUo3kQcN",
         "qN2DSoW81t",
         "TlPjZsHJ3q",
         "gEifRQNd1X",
         "S9fFrMv7X5",
         "8WQx1CzHrs",
         "AaLgfbV0Xz",
         "E1DjS8Nv3W",
         "t4sD8hMQwE",
         "pKnqX06lBt"
    ];

    if (allowedPasswords.includes(password)) {
        alert('Login bem-sucedido. Redirecionando...');
        window.location.href = './virtualbot/index.html'; // Redireciona para a próxima página
    } else {
        const errorMessage = document.getElementById('errorMessage');
        errorMessage.textContent = 'Senha incorreta. Tente novamente.';
        errorMessage.style.display = 'block';
    }
});