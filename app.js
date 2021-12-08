let toDoInput = document.getElementById('toDoInput');
let addButton = document.getElementById('addButton');
let clearButton = document.getElementById('clearButton');
let toDoForm = document.getElementById('toDoForm');
let container = document.getElementById('container');
let list = document.getElementById('list');

addButton.addEventListener("click",addToCart);
clearButton.addEventListener("click",deleteAll);

function addToCart(e){


    if(toDoInput.value !=""){
        var paragraph = document.createElement('li');
        var link = document.createElement("span");
        link.className = "material-icons";
        link.innerHTML = "delete"
        list.appendChild(paragraph);
        list.appendChild(link);
        paragraph.innerHTML = toDoInput.value;
        toDoInput.value = "";
        link.addEventListener("click",deleteToDo);
        function deleteToDo(){
        list.removeChild(paragraph);
        list.removeChild(link);
}
    }
    else{
        window.alert("Lütfen boş girmeyiniz.")
    }



    
    e.preventDefault();
}

function deleteAll(e){

    var x = confirm("Tümünü silmek istediğine emin misin?")
    if(x){
        paragraph.remove();
    }

    e.preventDefault();
}