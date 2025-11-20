
    // Cálculo de Juros
    function IncrementarJuros(valor, valorPercentual){
        const valorDeAcrecimo = valor * (valorPercentual / 100);
        return valor + valorDeAcrecimo;
    }

    console.log('Valor final:' + IncrementarJuros(100, 20));

//---------------------------------------------------------------

// Escrevendo nome no console
    function SayMyName(name){
        console.log('Your name is:' + name)
    }

    SayMyName('Rafael');
    SayMyName('Lucieli');
   