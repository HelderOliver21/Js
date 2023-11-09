//variaveis dos elementos da lista para criar conexão entre as partes

//Atribuindo o formulario a uma variavel

const form = document.getElementById("addform");
//Atribuir a lista a uma variavel
const itemList = document.getElementById("items");
//Atribuição da barra de pesquisa
const filter= document.getElementById("filter");

form.addEventListener('submit', addItem);
itemList.addEventListener('click', removeItem);
filter.addEventListener('keyup', buscarItems);

function buscarItems(e) {
   /*  alert('tecla ativa') */
   //entender como é o txt é coletando letra a letra
   /* console.log(e.target.value.toLowerCase()); */


    let txt = e.target.value.toLowerCase();
    //Buscar todos os itens
    let items = itemList.getElementsByTagName('li');

 
    console.log(items);

    Array.from(items).forEach(function(item){

        let nomeitem = item.firstChild.textContent;

        if(nomeitem.toLowerCase().indexOf(txt) != -1){
            item.style.display = 'block'; // Mostra o item
        }else{
           item.style.display = 'none'//ocutar o item
        }
    });    
}

function removeItem(evento) {
    /* console.log("CLICOU ERRADO! ISSO NÃO É UM BTN") */
    if(evento.target.classList.contains('delete')){
        /* console.log('TENHO QUE DELETAR'); */
        let li = evento.target.parentElement;
        itemList.removeChild(li);
    }
}
function addItem(evento) {
    //preventDEfault é o comportamento de recarregar a página
    //esse comportamento é padrão para <form>
    evento.preventDefault();
    /* console.log(evento); */
    
    //criar a tag<li>
    let novo_li = document.createElement('li');
    //Add a classe para a tag <li class= "list-group-irem">
    novo_li.className = 'list-group-item';
    //Add a classe 
    let novoItem = document.getElementById('item').value;
    //Resgatamos o valor inserido no formulario
    //Unido o <li> com o nome do item
    novo_li.appendChild(document.createTextNode(novoItem));
     // Atribuido classe ao Btn
    let deleteBtn = document.createElement('button')
    //Acresentando o 'X' ao Btn

    deleteBtn.className = 'btn btn-danger btn-sm float-end delete';

    deleteBtn.appendChild(document.createTextNode('X'));

    novo_li.appendChild(deleteBtn)

    itemList.appendChild(novo_li);
    //limpar intems
    form.reset();

    
};

