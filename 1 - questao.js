const alfabeto = 'abcdefghijklmnopqrstuvwxyz'
const alfabetoMaiusculo = alfabeto.toUpperCase()

// Texto para usar
let texto = "Ola, meu nome eh Carlos! e o Seu?"
// Rotacoes necessarias
let rotacoes = 7

function criptografar(texto, rotacoes) {
    let textoCriptografado = ''
    for (let i = 0; i < texto.length; i++) {
        const letra = texto[i]
        const indice = alfabeto.indexOf(letra.toLowerCase())
        if (indice === -1) {
            // Se a letra nao estiver no alfabeto, adiciona a letra original ao texto criptografado
            textoCriptografado += letra
        } else {
            // Se a letra estiver no alfabeto, realiza a criptografia
            const letraCriptografada = alfabeto[(indice + rotacoes) % alfabeto.length]
            if (letra === letra.toUpperCase()) {
                // Se a letra original for maiuscula, adiciona a letra criptografada em maiusculo ao texto criptografado
                textoCriptografado += letraCriptografada.toUpperCase()
            } else {
                // Se a letra original for minuscula, adiciona a letra criptografada em minusculo ao texto criptografado
                textoCriptografado += letraCriptografada
            }
        }
    }
    return console.log(textoCriptografado)
}

criptografar(texto, rotacoes)