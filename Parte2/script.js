function resolverEquacao() {
    const a = parseFloat(document.getElementById("entrada1").value);
    const b = parseFloat(document.getElementById("entrada2").value);
    const c = parseFloat(document.getElementById("entrada3").value);
    const discriminante = b * b - 4 * a * c;
    let resultado = "";

    if (discriminante > 0) {
        let operator1 = `-`;
        let operator2 = `+`;
        let operator3 = `-`;
        let operator4 = `-`;
        if (b < 0) {
            operator1 = ``;
            operator3 = ``;
        }
        resultado = `1° caso - Discriminante maior que zero:<br>
        <math xmlns="http://www.w3.org/1998/Math/MathML">
            <mrow>
                <msub>
                <mi>X</mi>
                <mi>n</mi>
                </msub>
                <mo>=</mo>
                <msub>
                    <mi>C</mi>
                    <mn>1</mn>
                </msub>
                <mo>*</mo>
                <msup>
                    <mrow>
                        <mo>(</mo>
                        <mfrac>
                            <mrow>
                                <mrow>
                                    <mrow>
                                        <mo>|</mo>
                                        <mo>${operator1}${Math.abs(b)}</mo>
                                        <mo>|</mo>
                                    </mrow>
                                </mrow>
                                <mo>${operator2}</mo>
                                <mrow>
                                    <msqrt>
                                        <mi>${discriminante}</mi>
                                    </msqrt>
                                </mrow>
                                <mo>)</mo>
                            </mrow>
                            <mrow>
                                <mn>2</mn>
                                <mi>a</mi>
                            </mrow>
                        </mfrac>
                        <mo>)</mo>
                    </mrow>
                    <mi>n</mi>
                </msup>
                <mo>+</mo>
                <msub>
                    <mi>C</mi>
                    <mn>2</mn>
                </msub>
                <mo>*</mo>
                <msup>
                    <mrow>
                        <mo>(</mo>
                        <mfrac>
                            <mrow>
                                <mrow>
                                    <mrow>
                                        <mo>|</mo>
                                        <mo>${operator3}${Math.abs(b)}</mo>
                                        <mo>|</mo>
                                    </mrow>
                                </mrow>
                                <mo>${operator4}</mo>
                                <mrow>
                                <msqrt>
                                    <mi>${discriminante}</mi>
                                </msqrt>
                                </mrow>
                                <mo>)</mo>
                            </mrow>
                            <mrow>
                                <mn>2</mn>
                                <mi>a</mi>
                            </mrow>
                        </mfrac>
                        <mo>)</mo>
                    </mrow>
                    <mi>n</mi>
                </msup>
            </mrow>
            </math>`;
    } else if (discriminante < 0) {
        const parteReal = -b / (2 * a);
        const parteImaginaria = Math.sqrt(-discriminante) / (2 * a);
        let moduloP1 = parteReal * 2;
        moduloP1 = moduloP1.toFixed(2);
        let alpha = formatarAnguloNotavel(parteReal, parteImaginaria);
        resultado = `3° caso - Discriminante menor que zero:<br>
        <math xmlns="http://www.w3.org/1998/Math/MathML">
            <msub>
                <mi>X</mi>
                <mi>n</mi>
            </msub>
            <mo>=</mo>
            <msup>
                <mrow>
                    <mo>|</mo>
                    <mi>${moduloP1}</mi>
                    <mo>|</mo>
                </mrow>
                <mi>n</mi>
            </msup>
            <mo>*</mo>
            <msub>
                <mi>K</mi>
                <mn>1</mn>
            </msub>
            <mo>*</mo>
            <mi>cos</mi>
            <mo>(</mo>
            <mn>${alpha}</mn>
            <mi>n</mi>
            <mo>)</mo>
            <mo>+</mo>
            <msub>
                <mi>K</mi>
                <mn>2</mn>
            </msub>
            <mo>*</mo>
            <mi>sen</mi>
            <mo>(</mo>
            <mn>${alpha}</mn>
            <mi>n</mi>
            <mo>)</mo>
        </math>`;
    } else {
        let operator1 = `-`;
        if (b < 0) {
            operator1 = ``;
        }
        resultado = `2° caso - Discriminante igual a zero:<br>
        <math xmlns="http://www.w3.org/1998/Math/MathML">
            <mrow>
                <msub>
                <mi>X</mi>
                <mi>n</mi>
                </msub>
                <mo>=</mo>
                <msub>
                    <mi>C</mi>
                    <mn>1</mn>
                </msub>
                <mo>*</mo>
                <msup>
                    <mrow>
                        <mo>(</mo>
                        <mfrac>
                            <mrow>
                                <mo>${operator1}${Math.abs(b)}</mo>
                            </mrow>
                            <mrow>
                                <mn>2</mn>
                                <mi>a</mi>
                            </mrow>
                        </mfrac>
                        <mo>)</mo>
                    </mrow>
                    <mi>n</mi>
                </msup>
                <mo>+</mo>
                <msub>
                    <mi>C</mi>
                    <mn>2</mn>
                </msub>
                <mo>*</mo>
                <mi>n</mi>
                <mo>*</mo>
                <msup>
                    <mrow>
                        <mo>(</mo>
                        <mfrac>
                            <mrow>
                                <mo>${operator1}${Math.abs(b)}</mo>
                            </mrow>
                            <mrow>
                                <mn>2</mn>
                                <mi>a</mi>
                            </mrow>
                        </mfrac>
                        <mo>)</mo>
                    </mrow>
                    <mi>n</mi>
                </msup>
            </mrow>
            </math>`;
    }

    document.getElementById("resultado").innerHTML = resultado;
}

// Função para exibir ângulos notáveis formatados como frações.
function formatarAnguloNotavel(parteReal, parteImaginaria) {
    let valor = (Math.atan(parteImaginaria / parteReal) * (180 / Math.PI)).toFixed(2);

    if (valor >= 0 && valor < 15) { // 0
        return "0";
    } else if (valor >= 15 && valor < 37.5) { // 30°
        return "pi/6"
    } else if (valor >= 37.5 && valor < 52.5) { // 45°
        return "pi/4"
    } else if (valor >= 52.5 && valor < 75) { // 60°
        return "pi/3"
    } else if (valor >= 75 && valor < 105) { // 90°
        return "pi/2"
    } else if (valor >= 105 && valor < 135) { // 120°
        return "2pi/3"
    } else if (valor >= 135 && valor < 142.5) { // 135°
        return "3pi/4"
    } else if (valor >= 142.5 && valor < 165) { // 150°
        return "5pi/6"
    } else if (valor >= 165 && valor <= 180) { // 180°
        return "pi"
    } else {
        return valor;
    }
}   
