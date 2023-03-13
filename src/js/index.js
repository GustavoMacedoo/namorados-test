const botoescarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');
const descricoes = document.querySelectorAll('.descricao')
botoescarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () =>{
        desativarBotaoSelecionado();
        botao.classList.add('selecionado');
        esconderImagemAtiva();
        imagens[indice].classList.add('ativa');
        esconderDescricaoReal();
        descricoes[indice].classList.add('real')
    }) 
})

function esconderDescricaoReal() {
    const descricaoAtiva = document.querySelector('.real');
    descricaoAtiva.classList.remove('real');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}
