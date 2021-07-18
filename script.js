var itens = [];

document.querySelector('input[type=submit]')
.addEventListener('click',()=>{
    let nomeProduto = document.querySelector('input[name=nome-produto]');
    let valorProduto = document.querySelector('input[name=price]');

    itens.push({
        nome: nomeProduto.value,
        valor: valorProduto.value
    });

    let listaProdutos = document.querySelector('.lista-produtos');
    let soma = 0;
    listaProdutos.innerHTML = "";
    itens.map(function(val){
        soma += parseFloat(val.valor);
        listaProdutos.innerHTML += `
            <div class="lista-produtos-single">
                <h3>${val.nome}</h3>
                <p>R$${val.valor}</p>      
            </div>
        `
    });

    soma = soma.toFixed(2);
    nomeProduto.value = "";
    valorProduto.value = "";

    let somatorio = document.querySelector('.valor-final h1');
    somatorio.innerHTML = `TOTAL : R${soma}`;  
    
});

document.querySelector('button[name=clear]')
.addEventListener('click', ()=>{
    itens = [];
 
       document.querySelector('.lista-produtos').innerHTML = "";
       document.querySelector('.valor-final h1').innerHTML = "TOTAL : R$0";
    

});




