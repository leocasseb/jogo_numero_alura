alert('Boas vindas ao jogo do número secreto!');
let numeroSecreto = prompt('Escolha um número secreto!');
let chute
while (chute != numeroSecreto) {
    chute = prompt('chute um valor!');
    if (chute == numeroSecreto) {
        alert('Você acertou! O número secreto é ' + numeroSecreto);
    } else {
        if (chute > numeroSecreto) {
            alert('Errou! O número secreto é menor que ' + chute);
        }
    else { 
        if (chute < numeroSecreto) 
            alert('Errou! O número secreto é maior que ' + chute);
        }
    };
};
let continuar = prompt('Deseja continuar jogando? (sim/não)');
while (continuar != 'sim' && continuar != 'não') {
    continuar = prompt('Digite sim ou não!');
}
while (continuar == 'sim'){
    numeroSecreto = prompt('Escolha um número secreto!');
    chute = null
    while (chute != numeroSecreto) {
        chute = prompt('Chute um valor!');
        if (chute == numeroSecreto) {
            alert('Você acertou! O número secreto é ' + numeroSecreto);
            continuar = prompt('Deseja continuar jogando? (sim/não)');
        } else {
            if (chute > numeroSecreto) {
                alert('Errou! O número secreto é menor que ' + chute);
            } else { 
                if (chute < numeroSecreto) 
                    alert('Errou! O número secreto é maior que ' + chute);
            }
        };
    };
}