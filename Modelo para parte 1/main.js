const userInput = document.getElementById('fraseEncrypt')
const a = document.getElementById('aValue')
const b = document.getElementById('bValue')
const c = document.getElementById('cValue')
const btnEncrypt = document.querySelector('.btnEncrypt')
const btnDecrypt = document.querySelector('.btnDecrypt')
const functionLocation = document.getElementById('functionLocation')
const result = document.getElementById('resultText')

const errorMessage = (boolCheck, msg = "") => {
    let textErro = document.getElementById('texto-erro');
    if (boolCheck) {
        textErro.style.visibility = 'visible';
        textErro.innerHTML = msg;
    } else {
        textErro.style.visibility = 'hidden';
    }
}

const getSelectedOption = () => {
    //get all radio inputs with the same name
    const functionChoice = document.querySelectorAll('input[name="options"]');

    //loop through the radio inputs to find the selected one
    let selectedOption;
    functionChoice.forEach(input => {
        if (input.checked) {
            selectedOption = input.value;
        }
    });

    return selectedOption;
}

const showCInput = () => {
    if (getSelectedOption() == 'option2') {
        errorMessage(false);
        for (let i = 0; i < document.getElementsByClassName('cInput').length; i++) {
            document.getElementsByClassName('cInput')[i].style.visibility = 'visible';
        }
    } else if (getSelectedOption() == 'option1') {
        errorMessage(false);
        for (let i = 0; i < document.getElementsByClassName('cInput').length; i++) {
            document.getElementsByClassName('cInput')[i].style.visibility = 'hidden';
        }
    } else {
        errorMessage(true, 'Selecione uma opção!');
    }
}

const chooseAndExecuteFunction = () => {
    if (getSelectedOption() == 'option1') {
        generateFirstDegreeFunction();
    } else if (getSelectedOption() == 'option2') {
        generateSecondDegreeFunction();
    }
}

function generateFirstDegreeFunction() {
    let valueA = a.value;
    let valueB = b.value;

    let firstDegreeFunction = ``;
    let value1 = ``;
    let value2 = ``;
    let operationA = ``;
    let operationB = ``;
    let hasA = true;
    let hasB = true;

    if (valueA > 0) {
        if (valueA == 1) {
            value1 = `x`;
        } else {
            value1 = `${valueA}x`;
        }
    } else if (valueA < 0) {
        value1 = `${valueA * -1}x`;
        operationA = `-`;
    } else if (valueA == 0) {
        value1 = ``;
        hasA = false;
    }


    if (valueB > 0 && hasA) {
        value2 = `${valueB}`;
        operationB = `+`;
    } else if (valueB > 0 && !hasA) {
        value2 = `${valueB}`;
    } else if ((valueB < 0 && hasA) || (valueB < 0 && !hasA)) {
        value2 = `${valueB * -1}`;
        operationB = `-`;
    } else if (valueB == 0) {
        hasB = false;
    }

    firstDegreeFunction = `<math>
                    <msub>
                        <mi>F</mi>
                        <mi>(x)</mi>
                    </msub>
                    <mo>=</mo>
                    <mo>${operationA}</mo>
                    <mrow>${value1}</mrow>
                    <mo>${operationB}</mo>
                    <mrow>${value2}</mrow>
                </math>`;

    if (!hasA && !hasB) {
        firstDegreeFunction = `<math>
                    <msub>
                        <mi>F</mi>
                        <mi>(x)</mi>
                    </msub>
                    <mo>=</mo>
                    <mn>0</mn>
                </math>`;
    }

    functionLocation.innerHTML = firstDegreeFunction;

    encryptFirstDegree(userInput.value)
}

function generateSecondDegreeFunction() {
    let valueA = a.value;
    let valueB = b.value;
    let valueC = c.value;

    let value1 = ``;
    let value2 = ``;
    let value3 = ``;
    let operationB = ``;
    let operationC = ``;
    let hasA = true;
    let hasB = true;
    let hasC = true;

    if (valueA > 0) {
        if (valueA == 1) {
            value1 = `<msup><mrow>x</mrow><mn>2</mn></msup>`;
        } else {
            value1 = `${valueA}<msup><mrow>x</mrow><mn>2</mn></msup>`;
        }
    } else if (valueA == 0) {
        hasA = false;
    } else {
        hasA = false;
    }

    if (valueB > 0) {
        if (valueB == 1) {
            value2 = `x`;
        } else {
            value2 = `${valueB}x`;
        }
        if (hasA) {
            operationB = `+`;
        } else {
            operationB = ``;
        }
    } else if (valueB < 0) {
        value2 = `${valueB * -1}x`;
        operationB = `-`;
    } else if (valueB == 0) {
        hasB = false;
    }

    if (valueC > 0) {
        value3 = `${valueC}`;
        if (hasB) {
            operationC = `+`;
        } else if (hasA) {
            operationC = `+`;
        } else {
            operationC = ``;
        }
    } else if (valueC < 0) {
        value3 = `${valueC * -1}`;
        operationC = `-`;
    } else if (valueC == 0) {
        hasC = false;
    }

    let secondDegreeFunction = `<math>
                    <msub>
                        <mi>F</mi>
                        <mi>(x)</mi>
                    </msub>
                    <mo>=</mo>
                    <mrow>${value1}</mrow>
                    <mo>${operationB}</mo>
                    <mrow>${value2}</mrow>
                    <mo>${operationC}</mo>
                    <mrow>${value3}</mrow>
                </math>`;
    
    if (!hasA) {
        errorMessage(true,'Insira um valor válido para \'a\'!'); 
    } else {
        errorMessage(false);
    }
    
    if (!hasA && !hasB && !hasC) {
        secondDegreeFunction = `<math>
                    <msub>
                        <mi>F</mi>
                        <mi>(x)</mi>
                    </msub>
                    <mo>=</mo>
                    <mn>0</mn>
                </math>`;
    }

    functionLocation.innerHTML = secondDegreeFunction;

    encryptSecondDegree(userInput.value)
}

const TABLECHARACTER = { //trocar a ordem dos key values para conteúdo
    positive: {
        '\t': '0', ' ': '1', '!': '2', '"': '3', '#': '4', '$': '5', '%': '6', '&': '7', '\'': '8', '(': '9', ')': '10', '*': '11',
        '+': '12', ',': '13', '-': '14', '.': '15', '/': '16', '0': '17', '1': '18', '2': '19', '3': '20', '4': '21', '5': '22',
        '6': '23', '7': '24', '8': '25', '9': '26', ':': '27', ';': '28', '<': '29', '=': '30', '>': '31',
        '?': '32', '@': '33', 'A': '34', 'B': '35', 'C': '36', 'D': '37', 'E': '38', 'F': '39',
        'G': '40', 'H': '41', 'I': '42', 'J': '43', 'K': '44', 'L': '45', 'M': '46', 'N': '47', 'O': '48', 'P': '49', 'Q': '50',
        'R': '51', 'S': '52', 'T': '53', 'U': '54', 'V': '55', 'W': '56', 'X': '57', 'Y': '58', 'Z': '59',
        '[': '60', '/': '61', ']': '62', '^': '63', '_': '64', '`': '65', 'a': '66', 'b': '67', 'c': '68', 'd': '69', 'e': '70',
        'f': '71', 'g': '72', 'h': '73', 'i': '74', 'j': '75', 'k': '76', 'l': '77', 'm': '78', 'n': '79', 'o': '80', 'p': '81',
        'q': '82', 'r': '83', 's': '84', 't': '85', 'u': '86', 'v': '87', 'w': '88', 'x': '89', 'y': '90', 'z': '91', '{': '92',
        '|': '93', '}': '94', '~': '95', 'Ç': '96', 'ü': '97', 'é': '98', 'â': '99', 'ä': '100', 'à': '101', 'å': '102', 'ç': '103',
        'ê': '104', 'ë': '105', 'è': '106', 'ï': '107', 'î': '108', 'ì': '109', 'Ä': '110', 'Å': '111', 'É': '112', 'æ': '113',
        'Æ': '114', 'ô': '115', 'ö': '116', 'ò': '117', 'û': '118', 'ù': '119', 'ÿ': '120', 'Ö': '121', 'Ü': '122', '¢': '123',
        '£': '124', '¥': '125', '₧': '126', 'ƒ': '127', 'á': '128', 'í': '129', 'ó': '130', 'ú': '131', 'ñ': '132', 'Ñ': '133',
        'ª': '134', 'º': '135', '¿': '136', '⌐': '137', '¬': '138', '½': '139', '¼': '140', '¡': '141', '«': '142', '»': '143',
        '░': '144', '▒': '145', '▓': '146', '│': '147', '┤': '148', 'Á': '149', 'Â': '150', 'À': '151', '©': '152', '╣': '153',
        '║': '154', '╗': '155', '╝': '156', '¢': '157', '¥': '158', '┐': '159', '└': '160', '┴': '161', '┬': '162', '├': '163',
        '─': '164', '┼': '165', 'ã': '166', 'Ã': '167', '╚': '168', '╔': '169', '╩': '170', '╦': '171', '╠': '172', '═': '173',
        '╬': '174', '¤': '175', 'ð': '176', 'Ð': '177', 'Ê': '178', 'Ë': '179', 'È': '180', 'ı': '181', 'Í': '182', 'Î': '183',
        'Ï': '184', '┘': '185', '┌': '186', '█': '187', '▄': '188', '¦': '189', 'Ì': '190', '▀': '191', 'Ó': '192', 'ß': '193',
        'Ô': '194', 'Ò': '195', 'õ': '196', 'Õ': '197', 'µ': '198', 'þ': '199', 'Þ': '200', 'Ú': '201', 'Û': '202', 'Ù': '203',
        'ý': '204', 'Ý': '205', '¯': '206', '´': '207', '¬': '208', '±': '209', '¦': '210', '§': '211', '÷': '212', '¨': '213',
        '·': '214', '¸': '215', '¹': '216', '³': '217', '²': '218', '■': '219', '▒': '220', '▓': '221'
    },
    negative: {
        ' ': '-1', '!': '-2', '"': '-3', '#': '-4', '$': '-5', '%': '-6', '&': '-7', '\'': '-8', '(': '-9',
        ')': '-10', '*': '-11', '+': '-12', ',': '-13', '-': '-14', '.': '-15', '/': '-16', '0': '-17', '1': '-18', '2': '-19', '3': '-20',
        '4': '-21', '5': '-22', '6': '-23', '7': '-24', '8': '-25', '9': '-26', ':': '-27', ';': '-28', '<': '-29',
        '=': '-30', '>': '-31', '?': '-32', '@': '-33', 'A': '-34', 'B': '-35', 'C': '-36', 'D': '-37', 'E': '-38', 'F': '-39',
        'G': '-40', 'H': '-41', 'I': '-42', 'J': '-43', 'K': '-44', 'L': '-45', 'M': '-46', 'N': '-47', 'O': '-48',
        'P': '-49', 'Q': '-50', 'R': '-51', 'S': '-52', 'T': '-53', 'U': '-54', 'V': '-55', 'W': '-56', 'X': '-57', 'Y': '-58', 'Z': '-59',
        '[': '-60', '/': '-61', ']': '-62', '^': '-63', '_': '-64', '`': '-65', 'a': '-66', 'b': '-67', 'c': '-68', 'd': '-69', 'e': '-70',
        'f': '-71', 'g': '-72', 'h': '-73', 'i': '-74', 'j': '-75', 'k': '-76', 'l': '-77', 'm': '-78', 'n': '-79', 'o': '-80', 'p': '-81',
        'q': '-82', 'r': '-83', 's': '-84', 't': '-85', 'u': '-86', 'v': '-87', 'w': '-88', 'x': '-89', 'y': '-90', 'z': '-91', '{': '-92',
        '|': '-93', '}': '-94', '~': '-95', 'Ç': '-96', 'ü': '-97', 'é': '-98', 'â': '-99', 'ä': '-100', 'à': '-101', 'å': '-102', 'ç': '-103',
        'ê': '-104', 'ë': '-105', 'è': '-106', 'ï': '-107', 'î': '-108', 'ì': '-109', 'Ä': '-110', 'Å': '-111', 'É': '-112', 'æ': '-113',
        'Æ': '-114', 'ô': '-115', 'ö': '-116', 'ò': '-117', 'û': '-118', 'ù': '-119', 'ÿ': '-120', 'Ö': '-121', 'Ü': '-122', '¢': '-123',
        '£': '-124', '¥': '-125', '₧': '-126', 'ƒ': '-127', 'á': '-128', 'í': '-129', 'ó': '-130', 'ú': '-131', 'ñ': '-132', 'Ñ': '-133',
        'ª': '-134', 'º': '-135', '¿': '-136', '⌐': '-137', '¬': '-138', '½': '-139', '¼': '-140', '¡': '-141', '«': '-142', '»': '-143',
        '░': '-144', '▒': '-145', '▓': '-146', '│': '-147', '┤': '-148', 'Á': '-149', 'Â': '-150', 'À': '-151', '©': '-152', '╣': '-153',
        '║': '-154', '╗': '-155', '╝': '-156', '¢': '-157', '¥': '-158', '┐': '-159', '└': '-160', '┴': '-161', '┬': '-162', '├': '-163',
        '─': '-164', '┼': '-165', 'ã': '-166', 'Ã': '-167', '╚': '-168', '╔': '-169', '╩': '-170', '╦': '-171', '╠': '-172', '═': '-173',
        '╬': '-174', '¤': '-175', 'ð': '-176', 'Ð': '-177', 'Ê': '-178', 'Ë': '-179', 'È': '-180', 'ı': '-181', 'Í': '-182', 'Î': '-183',
        'Ï': '-184', '┘': '-185', '┌': '-186', '█': '-187', '▄': '-188', '¦': '-189', 'Ì': '-190', '▀': '-191', 'Ó': '-192', 'ß': '-193',
        'Ô': '-194', 'Ò': '-195', 'õ': '-196', 'Õ': '-197', 'µ': '-198', 'þ': '-199', 'Þ': '-200', 'Ú': '-201', 'Û': '-202', 'Ù': '-203',
        'ý': '-204', 'Ý': '-205', '¯': '-206', '´': '-207', '¬': '-208', '±': '-209', '¦': '-210', '§': '-211', '÷': '-212', '¨': '-213',
        '·': '-214', '¸': '-215', '¹': '-216', '³': '-217', '²': '-218', '■': '-219', '▒': '-220', '▓': '-221'
    }
    
}

const encrypt = () => {
    if (getSelectedOption() == 'option1') {
        encryptFirstDegree(userInput.value)
    } else if (getSelectedOption() == 'option2') {
        encryptSecondDegree(userInput.value)
    }
}

function findK (number) { //checar se está certo
    let newNumber = number;
    let k = 0;

    if (newNumber < 0) {
        newNumber = newNumber * -1;
    }  

    while (Number.isInteger(newNumber - 221) && (newNumber - 221) > 0) {
        newNumber = newNumber - 221;
        k++;
    }

    return newNumber;
}

//testar findk
let numberk = 0;
numberk = findK(222);
console.log(numberk);

const numberArrayToCharacterArray = (array) => {
    let characterArray = [];
    array.forEach(element => {
        if (element > 0) {
        characterArray.push(getKeyByValue(TABLECHARACTER.positive, String(element)))
        } else {
            characterArray.push(getKeyByValue(TABLECHARACTER.negative, String(element)))
        }
    });
    return characterArray;
}

function getKeyByValue(object, value) {
    for (var key in object) {
        if (object[key] === value) {
            return key;
        }
    }
}

const encryptFirstDegree = (messageToEncrypt) => { //recebe um array de caracteres para criptografar
    let encryptedMessage = [] //array com os números da mensagem cryptografada
        
    //pecorre os array original com os caracteres
    const messageArray = messageToEncrypt.split("");
    for (let i = 0; i < messageArray.length; i++) {
        //cálculo para achar o número da criptografia ax + b
        const x = Number(TABLECHARACTER.positive[messageArray[i]])
        const number = (Number(a.value) * x + Number(b.value)) //transforma o caractere em numero e aplica a função
        //verifica se está entre o range dos caracteres
        if (number >= 0 && number <= 221) {
            encryptedMessage.push(number)
        } else if (number < 0 && number > -222) {
            encryptedMessage.push(number)
        } else {
            //acha k para encontrar um número que caiba na tabela
            const newNumber = findK(number)
            encryptedMessage.push(newNumber)
        }
    }

    encryptedMessage = numberArrayToCharacterArray(encryptedMessage);
    encryptedMessage = encryptedMessage.join("");
    result.innerHTML = encryptedMessage;
}

function encryptSecondDegree(messageToEncrypt) { //recebe um array de caracteres para criptografar
    let encryptedMessage = [] //array com os números da mensagem cryptografada
        
    //pecorre os array original com os caracteres
    const messageArray = messageToEncrypt.split("");
    for (let i = 0; i < messageArray.length; i++) {
        //cálculo para achar o número da criptografia ax^2 + bx + c
        const x = Number(TABLECHARACTER.positive[messageArray[i]])
        const number = (Number(a.value) * x * x + Number(b.value) * x + Number(c.value)) //transforma o caractere em numero e aplica a função
        //verifica se está entre o range dos caracteres
        if (number >= 0 && number <= 221) {
            encryptedMessage.push(number)
        } else if (number < 0 && number > -222) {
            encryptedMessage.push(number)
        } else {
            //acha k para encontrar um número que caiba na tabela
            const newNumber = findK(number)
            encryptedMessage.push(newNumber)
        }
    }

    encryptedMessage = numberArrayToCharacterArray(encryptedMessage);
    encryptedMessage = encryptedMessage.join("");
    result.innerHTML = encryptedMessage;
}