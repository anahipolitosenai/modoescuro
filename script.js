//variavel para guardar o botão
const botao = document.getelementById('tema');
const icone = botao.querySelector('i');
//busca na memoria do navegador a opção que o usuario tinha escolhido no tema
const salvarTema = localStorage.getItem('theme');

//se o tema salvo na memória localStorage for tema escuro

if(salvaTema==='dark'){
    //adiciona a classe 'dark-mode' no corpo da pagina
    document.body.classList.add('dark-mode');
    //trocar o icone de lua ('fa-moon') para um icone de sol 
    icone.classList.replace('fa-moon','fa-sun');
}
//quando clicar no botão ele vai executar o codigo abaixo
botao.addEventListener('click',() =>{
    //liga ou desliga a classe dark mode
    document.body.classList.toggle('dark-mode');

    //verificar se a página ficou com o modo escuro ativado
    const dark = document.body.classList.contains('dark-mode');
     
    //se o modo escuro estiver ativado (verdadeiro)
    if (dark){
        icone.classList.replace('fa-moon','fa-sun');
        localStorage.setItem('theme','dark');
    }else{
        //troca o de sol de volta para a lua
        icone.classList.replace('fa-sun','fa-moon');
        localStorage.setItem('theme','ligth');
    }
});
