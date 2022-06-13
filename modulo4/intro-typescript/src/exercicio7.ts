const transcricao = (DNA:string):string =>{
    const RNA:string = DNA.replace(/[ATCG]/g, charactersToReplace => ({'A': 'U', 'T': 'A', 'C' : 'G', 'G':'C' })[charactersToReplace])

    return RNA
}

console.log(transcricao("ATTGCTGCGCATTAACGACGCGTA"))