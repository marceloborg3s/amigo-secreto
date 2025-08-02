// Lista de amigos
let amigos = [];

// Função para adicionar amigo à lista
function adicionarAmigo() {
    const input = document.getElementById('amigo');
    const nome = input.value.trim();

    if (nome === '') {
        alert('Por favor, insira um nome.');
        return;
    }

    amigos.push(nome);
    input.value = '';
    atualizarLista();
}

// Atualiza visualmente a lista de amigos na tela
function atualizarLista() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';

    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li);
    }
}

// Sorteia um amigo da lista
function sortearAmigo() {
    const resultado = document.getElementById('resultado');

    if (amigos.length === 0) {
        resultado.innerHTML = '<li>Adicione pelo menos um amigo para realizar o sorteio.</li>';
        return;
    }

    const indiceSorteado = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indiceSorteado];

    resultado.innerHTML = `<li>🎉 O amigo secreto é: <strong>${amigoSorteado}</strong>!</li>`;
}
