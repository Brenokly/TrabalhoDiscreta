function resolverEquacao() {
    const a = parseFloat(document.getElementById("a").value);
    const b = parseFloat(document.getElementById("b").value);
    const c = parseFloat(document.getElementById("c").value);
    const discriminante = b * b - 4 * a * c;
    let resultado = "";

    if (discriminante > 0) {
        let raiz1 = `(-${Math.abs(b)} + √${discriminante}) / ${2 * a}`;
        let raiz2 = `(-${Math.abs(b)} - √${discriminante}) / ${2 * a}`;
        if (b < 0) {
            raiz1 = `(${Math.abs(b)} + √${discriminante}) / ${2 * a}`;
            raiz2 = `(${Math.abs(b)} - √${discriminante}) / ${2 * a}`;
        }
        resultado = `1° caso - Discriminante maior que zero:<br>Xn = C1 * (${raiz1})^n + C2 * (${raiz2})^n`;
    } else if (discriminante < 0) {
        const parteReal = -b / (2 * a);
        const parteImaginaria = Math.sqrt(-discriminante) / (2 * a);
        let moduloP1 = parteReal * 2;
        let alpha1 = formatarAnguloNotavel(parteReal, parteImaginaria);
        let alpha2 = alpha1;
        resultado = `3° caso - Discriminante menor que zero:<br>Xn = |${moduloP1}|^n * (K1 * cos(n*${alpha1}) + K2 * sen(n * ${alpha2}))`;
    } else {
        let raiz = `(-${Math.abs(b)} / ${2 * a})`;
        if (b < 0) {
            raiz = `(${Math.abs(b)} / ${2 * a})`;
        }
        resultado = `2° caso - Discriminante igual a zero:<br>Xn = C1 * (${raiz})^n + C2 * n * (${raiz})^n`;
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
