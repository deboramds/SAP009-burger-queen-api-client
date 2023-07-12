const apiUrl = 'https://app.swaggerhub.com/apis-docs/ssinuco/BurgerQueenAPI/2.0.0#/auth/'; 

// Função para fazer a autenticação
async function fazerAutenticacao() {
  const endpoint = '/login';
  const url = `${apiUrl}${endpoint}`;

  const dadosAutenticacao = {
    email: 'anita.borg@systers.xyz',
    password: 'g6WQSrsv7rC7et5B'
  };

  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(dadosAutenticacao)
  };

  try {
    const response = await fetch(url, requestOptions);
    const data = await response.json();

    if (response.ok) {
      const accessToken = data.accessToken;
      // Faça algo com o accessToken (código de autenticação)
      console.log('Código de autenticação:', accessToken);
    } else {
      console.error('Erro:', data.error);
    }
  } catch (error) {
    console.error('Erro ao fazer a autenticação:', error);
  }
}

// Chamada da função de autenticação
fazerAutenticacao();