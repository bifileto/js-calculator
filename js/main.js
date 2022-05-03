let buttons = document.querySelectorAll('button');
let buttonId;
let buttonClass;
let memoriaFinal = "";
let memoriaVolatil = "";
let operacao = "";
let calculator = document.querySelector(".calculator");
let display = calculator.querySelector(".display");
let displayOld = display.querySelector("#dold");
let displayNew = display.querySelector("#dnew");


//função de entrada do programa
function Principal(buttons) {
    buttonClass = buttons.className;
    switch (buttonClass) {
        case "acao":
            Acao(buttons);
            break;
        case "operacao":
            if (VerificaDisplay(buttons)) {
                Operacao(buttons);
            }
            break;
        case "numero":
            if (VerificaDisplay(buttons)) {
                Agregacao(buttons);
            }
    }
}
//função quase completa - falta revisão
function VerificaDisplay(buttons) {
    if (displayNew.textContent.length >= 12 || displayOld.textContent.length >= 48) {
        alert("Numero máximo de caracteres alcançado!")
        return false;
    }
    return true;
}
//função quase completa - falta revisão
function Agregacao(button) {
    if (button.value == ".") {
        if (!memoriaVolatil.includes(".")) {
            if (memoriaVolatil == null)
                memoriaVolatil = "0.";
            else
                memoriaVolatil += button.value;
        } else {
            alert("Não é possível inserir duas pontuações!");
        }
    } else {
        memoriaVolatil += button.value;
    }
    AtualizaNewDisplay(memoriaVolatil);
}
//função quase completa - falta revisar
function Acao(buttons) {
    buttonId = buttons.id;
    switch (buttonId) {
        case "ac":
            ResetaCalc();
            break;
        case "del":
            DeletaAnterior();
            break;
    }
}
//função quase completa - falta revisar
function Operacao(buttons) {
    if (operacao == "" && buttons.id != "igual") {
        memoriaFinal = memoriaVolatil;
        memoriaVolatil = "";
        operacao = buttons.id;
        AtualizaOldDisplay(memoriaFinal + buttons.textContent);

    } else if (buttons.id == "igual") {
        switch (operacao) {
            case "sum":
                memoriaFinal = Soma(memoriaFinal, memoriaVolatil);
                break;
            case "sub":
                memoriaFinal = Subtracao(memoriaFinal, memoriaVolatil);
                break;
            case "prod":
                memoriaFinal = Produto(memoriaFinal, memoriaVolatil);
                break;
            case "div":
                if (memoriaVolatil != "0") {
                    memoriaFinal = Divisao(memoriaFinal, memoriaVolatil);
                    break;
                } else
                    alert("Divisão por Zero é inaceitável!");
                return;
        }
        AtualizaOldDisplay(memoriaVolatil + "=" + memoriaFinal + " | ");
        AtualizaNewDisplay(memoriaFinal);
        memoriaVolatil = "";
        operacao = "";
    } else {
        alert("Realiza a conclusão da conta para adicionar uma nova operação!");
        return;
    }
}
//funçao quase completa - falta revisão
function ResetaCalc() {
    memoriaFinal = "";
    memoriaVolatil = "";
    number = "";
    displayNew.textContent = "0";
    displayOld.textContent = "0";
    operacao = "";
}
//função quase completa - falta revisão
function AtualizaNewDisplay(valorDisplay) {
    displayNew.textContent = valorDisplay;
    console.log("Display Novo atualizado");
}
//função quase completa - falta revisão
function AtualizaOldDisplay(valorDisplay) {
    displayOld.textContent += valorDisplay;
    console.log("Display Velho atualizado");
}
//função quase completa - falta revisão 
function DeletaAnterior() {
    let aux;
    aux = memoriaVolatil.substr(0, memoriaVolatil.length - 1);
    memoriaVolatil = aux;
    AtualizaNewDisplay(memoriaVolatil);
}
//OPERACOES BINARIAS
function Soma(princ, volatil) {
    return parseFloat(princ) + parseFloat(volatil);
}

function Subtracao(princ, volatil) {
    return parseFloat(princ) - parseFloat(volatil);
}

function Produto(princ, volatil) {
    return parseFloat(princ) * parseFloat(volatil);
}

function Divisao(princ, volatil) {
    return (parseFloat(princ) / parseFloat(volatil)).toFixed(2);
}