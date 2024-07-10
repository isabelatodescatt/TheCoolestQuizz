function MostraFinalizar(){
    var select1 = document.getElementById("pergunta1");
    var elementoSelect1 = select1.options[select1.selectedIndex].value;

    var select2 = document.getElementById("pergunta2");
    var elementoSelect2 = select2.options[select2.selectedIndex].value;

    var select3 = document.getElementById("pergunta3");
    var elementoSelect3 = select3.options[select3.selectedIndex].value;

    if(elementoSelect1 == -1 || elementoSelect2 == -1 || elementoSelect3 == -1){
        let elementoInputResultado = document.getElementById('inputResultado')
        
        alert("Há campos não preenchidos!")
    }

    else{
        var pontuacao = Number(elementoSelect1) + Number(elementoSelect2) + Number(elementoSelect3)
        let elementoInputResultado = document.getElementById('inputResultado');
        elementoInputResultado.value = pontuacao;
         
    }
}