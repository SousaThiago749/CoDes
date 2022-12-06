document.addEventListener('DOMContentLoaded', function(){
    console.log('calma daguinho') // Para ver se esta conectado

    soma = 0
    var aguaValor
    var luzValor
    var gasValor
    telValor = 5000
    edValor = 20000
    transValor = 4000
    qntPar = 1
    parValor = 4000
    saudeValor = 4000
    soma = telValor + edValor + transValor + parValor/qntPar + saudeValor


// FIXOS

    // TEL
    textoTel = document.querySelector('#textoTel')
    if (textoTel!=null){
    textoTel.innerHTML = telValor}

    // ED
    textoEd = document.querySelector('#textoEd')
    if (textoEd!=null){
    textoEd.innerHTML = edValor}

    // TRANS
    textoTrans = document.querySelector('#textoTrans')
    if (textoTrans!=null){
    textoTrans.innerHTML = transValor}

    // PAR
    textoPar = document.querySelector('#textoPar')
    textoQntPar = document.querySelector('#qntPar')
    if (textoPar!=null){
    textoPar.innerHTML = parValor
    textoQntPar.innerHTML = qntPar}

    // SAUDE
    textoSaude = document.querySelector('#textoSaude')
    if (textoSaude!=null){
    textoSaude.innerHTML = saudeValor}


// VARIAVEIS

    // AGUA
    aguaConcluido = document.querySelector('#concluidoAgua')    
    textoAgua = document.querySelector('#textoAgua')
    if (aguaConcluido!=null){
    aguaConcluido.addEventListener('click', function(event) {
        aguaValor = document.querySelector('#inputAgua').value
        textoAgua.innerHTML = aguaValor
        localStorage.setItem('agua',aguaValor)
        console.log(localStorage)
    })}


    // LUZ
    luzConcluido = document.querySelector('#concluidoLuz')    
    textoLuz = document.querySelector('#textoLuz')
    if (luzConcluido!=null){
    luzConcluido.addEventListener('click', function(event) {
        luzValor = document.querySelector('#inputLuz').value
        textoLuz.innerHTML = luzValor
        localStorage.setItem('luz',luzValor)
        console.log(localStorage)
    })}


    // GAS
    gasConcluido = document.querySelector('#concluidoGas')    
    textoGas = document.querySelector('#textoGas')
    if (gasConcluido!=null){
    gasConcluido.addEventListener('click', function(event) {
        gasValor = document.querySelector('#inputGas').value
        textoGas.innerHTML = gasValor
        localStorage.setItem('gas',gasValor)
        console.log(localStorage)
    })}


    soma = soma + parseInt(localStorage['agua']) + parseInt(localStorage['luz']) + parseInt(localStorage['gas'])


    console.log(soma)



// SALARIO
    
    salarioConcluido = document.querySelector('#concluidoSalario')    
    textoSalario = document.querySelector('#textoSalario')
    if (salarioConcluido!=null){
    salarioConcluido.addEventListener('click', function(event) {
        salarioValor = document.querySelector('#inputSalario').value
        console.log(salarioValor)
        if (salarioValor>=1){
        textoSalario.innerHTML = "Renda Mensal: R$" + salarioValor
        localStorage.setItem('salario',salarioValor)}
    })}

    if (localStorage['salario']!=null & textoSalario!=null){
        textoSalario.innerHTML = "Renda Mensal: R$" + localStorage['salario']}




    // soma
    textoSoma = document.querySelector('#total')
    if (textoSoma!=null){
    textoSoma.innerHTML = 'R$' + soma}

    // disponivel
    disponivel = localStorage['salario'] - soma









// VALORES
    textoDisponivel = document.querySelector('#disponivel')
    if (textoDisponivel!=null){
    textoDisponivel.innerHTML = 'R$' + disponivel}







// GRAFICO
    var xValues = ["Gastos", "Disponivel"]
    var yValues = [soma, disponivel]
    var barColors = [
        "#FF0000",
        "#008000"
    ]
    
    new Chart("myChart", {
        type: "pie",
        data: {
        labels: xValues,
        datasets: [{
            backgroundColor: barColors,
            data: yValues
        }]
        },
        options: {
        title: {
            display: true,
            text: "Gastos Fixos"
        }
        }
    });




    console.log('daguinho esta calmo')
})

function f(){
    console.log(localStorage)
}

function s(){
    console.log(soma)
}
function a(){
    console.log(aguaValor)
}

function g(){
    console.log(gasValor)
}

function limpa(){
    localStorage.clear()
}






// localStorage.setItem(['aguaValor','luzValor','gasValor','telValor','edValor','parValor','saudeValor'],[aguaValor,luzValor,gasValor,telValor,edValor,parValor,saudeValor])

// localStorage.setItem('telValor',telValor)
// localStorage.setItem('edValor',edValor)
// localStorage.setItem('parValor',parValor)
// localStorage.setItem('saudeValor',saudeValor)



// localStorage.setItem(['agua','luz','gas'],[aguaValor,luzValor,gasValor])
