function preencheFormulaPrimeiroGrau() {
    let a = document.getElementById('e1').value;
    let b = document.getElementById('e2').value;

    let valor1 = ``;
    let valor2 = ``;
    let operacaoA = ``;
    let operacaoB = ``;
    let temA = true;
    let temB = true;

    if (a > 0) {
        valor1 = `${a}x`;
    } else if (a < 0) {
        valor1 = `${a * -1}x`;
        operacaoA = `-`;
    } else if (a == 0) {
        valor1 = ``;
        temA = false;
    }


    if (b > 0 && temA) {
        valor2 = `${b}`;
        operacaoB = `+`;
    } else if (b > 0 && !temA) {
        valor2 = `${b}`;
    } else if ((b < 0 && temA) || (b < 0 && !temA)) {
        valor2 = `${b * -1}`;
        operacaoB = `-`;
    } else if (b == 0) {
        temB = false;
    }


    let result =`<math>
                    <msub>
                        <mi>F</mi>
                        <mi>(x)</mi>
                    </msub>
                    <mo>=</mo>
                    <mo>${operacaoA}</mo>
                    <mrow>${valor1}</mrow>
                    <mo>${operacaoB}</mo>
                    <mrow>${valor2}</mrow>
                </math>`;
    
    if (!temA && !temB) {
        result =`<math>
                    <msub>
                        <mi>F</mi>
                        <mi>(x)</mi>
                    </msub>
                    <mo>=</mo>
                    <mn>0</mn>
                </math>`;
    } 

    document.getElementById('formulaPrimeiroGrau').innerHTML = result;

}

function preencheFormulaSegundoGrau() { 
    let a = document.getElementById('e3').value;
    let b = document.getElementById('e4').value;
    let c = document.getElementById('e5').value;

    let xquadrado = `<msup><mi>x</mi><mn>2</mn></msup>`; //checar se precisa add o <math>
    let x = `<mi>x</mi>`; //checar se precisa add o <math>

    let result = ``;

    let operacao1 = ``;
    let operacao2 = ``;
    let operacao3 = ``;
    let valor1 = ``;
    let valor2 = ``;
    let valor3 = ``;
    let temA = true;
    let temB = true;
    let temC = true;

    if (a > 0) {
        valor1 = `${a}`;
    } else if (a < 0) {
        valor1 = `${a * -1}`;
        operacao1 = `-`;
    } else if (a == 0) {
        temA = false;
    }

    if (b > 0 && temA) {
        valor2 = `${b}`;
        operacao2 = `+`;
    } else if (b > 0 && !temA) {
        valor2 = `${b}`;
    } else if ((b < 0 && temA) || (b < 0 && !temA)) {
        valor2 = `${b * -1}`;
        operacao2 = `-`;
    } else if (b == 0) {
        temB = false;
    }

    if ((c > 0 && temA) || (c > 0 && temB)) {
        valor3 = `${c}`;
        operacao3 = `+`;
    } else if (c > 0 && !temA && !temB) {
        valor3 = `${c}`;
    } else if (c < 0) {
        valor3 = `${c * -1}`;
        operacao3 = `-`;
    } else if (c == 0) {
        temC = false;
    }

    if (!temA) {
        xquadrado = ``;
    }
    if (!temB) {
        x = ``;
    }


    result = `<math>
                    <msub>
                        <mi>F</mi>
                        <mi>(x)</mi>
                    </msub>
                    <mo>=</mo>
                    <mo>${operacao1}</mo>
                    <mrow>
                        <mn>${valor1}</mn>
                        <mrow>${xquadrado}</mrow>
                    </mrow>
                    <mo>${operacao2}</mo>
                    <mrow>
                        <mn>${valor2}</mn>
                        <mrow>${x}</mrow>
                    </mrow>
                    <mo>${operacao3}</mo>
                    <mrow>
                        <mn>${valor3}</mn>
                    </mrow>
                </math>`;
    
    if (!temA && !temB && !temC) {
        result =`<math>
                    <msub>
                        <mi>F</mi>
                        <mi>(x)</mi>
                    </msub>
                    <mo>=</mo>
                    <mn>0</mn>
                </math>`;
    } 

    document.getElementById('formulaSegundoGrau').innerHTML = result;

}

function calcularCodPrimeiroGrau() {
    let a = document.getElementById('e1').value;
    let b = document.getElementById('e2').value;
    const frase = document.getElementById('frase1').value;

    //pegar cada caractere e aplicar na formula para ter retorno de frase,
    //deve se usar toda tabela ascii e qnd se passar do limite, se loopar para o inicio
    
    let result = "Olá mundo!";

    document.getElementById('cod-primeiro-grau').innerHTML = result;
}

function calcularCodSegundoGrau() {
    let a = document.getElementById('e3').value;
    let b = document.getElementById('e4').value;
    let c = document.getElementById('e5').value;
    const frase = document.getElementById('frase3').value;

    //pegar cada caractere e aplicar na formula para ter retorno de frase,
    //deve se usar toda tabela ascii e qnd se passar do limite, se loopar para o inicio

    const result = "Olá mundo!";

    document.getElementById('cod-segundo-grau').innerHTML = result;
}