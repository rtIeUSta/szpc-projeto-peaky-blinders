const botoescarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagens');
botoescarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        const botaoselecionado = document.querySelector('.selecionado');
        botaoselecionado.classList.remove('selecionado');
        botao.classList.add('selecionado');
        const imagensativa = document.querySelector('.ativa');
        imagensativa.classList.remove('ativa');
        imagens[indice].classList.add('ativa');
    })
} )