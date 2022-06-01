// Exercício 11

// Escreva uma função para converter de números normais para algarismos romanos (`string`).


// Os romanos escreviam números usando letras - I, V, X, L, C, D, M. Não há necessidade de converter números maiores que cerca de 3000. (Os próprios romanos não tendiam a ir mais alto)

// A Wikipedia diz: Os algarismos romanos modernos são escritos expressando cada dígito separadamente, começando com o dígito mais à esquerda e pulando qualquer dígito com valor zero.

// Para ver isso na prática, considere o exemplo de 1990.

// Em algarismos romanos 1990 é MCMXC: 1000=M 900=CM 90=XC


const converterParaRomanos = (numero: number): string => {

    let numeroStr: string[] = numero.toString().split('')
    let tamanho:number = numeroStr.length
    let numeroRomano: string[] = []

    const addAlgorismo = (check: number, algoritmo: string) => {
        for (let i:number = 0; i < check; i++) {
            numeroRomano.push(algoritmo)
        }
    }
    while (tamanho !== 0) {

        switch (tamanho) {
            case 1:
                const unidade: number = Number(numeroStr[0])
                const checkUnidade: number = unidade

                unidade <= 3 && unidade >= 1 && addAlgorismo(checkUnidade, 'I')
                unidade === 4 && addAlgorismo(1, 'IV')
                unidade < 9 && unidade >= 5 && addAlgorismo(1, 'V') 
                unidade < 9 && unidade >= 5 && addAlgorismo(unidade-5, 'I')
                unidade < 10 && unidade >= 9 && addAlgorismo(1, 'IX')
                break;
            case 2:
                const dezena: number = Number(numeroStr[0] + '0')
                const checkDezena: number = dezena / 10


                dezena <= 30 && dezena >= 10 && addAlgorismo(checkDezena, 'X')
                dezena === 40 && addAlgorismo(1, 'XL')
                dezena < 90 && dezena >= 50 && addAlgorismo(1, 'L')
                dezena < 90 && dezena >= 50 && addAlgorismo((dezena-50)/10, 'X')
                dezena < 100 && dezena >= 90 && addAlgorismo(1, 'XC')
                break;

            case 3:
                const centena: number = Number(numeroStr[0] + '00')
                const checkCentena: number = centena / 100
                centena <= 300 && centena >= 100 && addAlgorismo(checkCentena, 'C')
                centena === 400 && addAlgorismo(1, 'CD')
                centena < 900 && centena >= 500 && addAlgorismo(1, 'D')
                centena < 900 && centena >= 500 && addAlgorismo((centena-500)/100, 'C')
                centena < 1000 && centena >= 900 && addAlgorismo(1, 'CM')
                break;

            case 4:
                const milhar: number = Number(numeroStr[0] + '000')
                const checkMilhar: number = milhar / 1000
                addAlgorismo(checkMilhar, 'M')
                break;
        }
        numeroStr.shift()
        tamanho = numeroStr.length
    }

    return numeroRomano.join('')
}

console.log(converterParaRomanos(8))
console.log(converterParaRomanos(44))
console.log(converterParaRomanos(789))
console.log(converterParaRomanos(1844))
console.log(converterParaRomanos(2964))