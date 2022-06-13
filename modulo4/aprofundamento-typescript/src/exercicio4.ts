// Exercicio4

// Na aula de ontem, vimos que os arquivos escritos em Typescript, com sua extensão `.ts` passam por um processo de conversão de typescript para Javascript para que possam ser lidos e executados. Este processo é chamado de **transpilação**. 

// Com a biblioteca `typescript` instalada, temos acesso ao comando `tsc` no terminal. O `tsc` é o comando responsável por fazer a transpilação dos arquivos.

// Abaixo, há um exemplo de código escrito em Typescript. 

// a) Crie um arquivo chamado `exercicio-4.ts` , cole o código abaixo e use comentários para responder as questões.

//-------------------------------------------------------------------------
// b) Como você faria, já com a extensão instalada, para transpilar(converter) esse arquivo typescript em um arquivo javascript?

// no terminal -> na pasta do arquivo

// tsc exercicio-4.ts
// node exercicio4.js

//-------------------------------------------------------------------------
// b) E se este arquivo estivesse dentro de uma pasta chamada `src`. O processo seria diferente? Se sim, descreva as diferenças.

// só eh preciso está dentro da pasta ou alterar o caminho

// tsc ./src/exercicio-4.ts
// node ./src/exercicio4.js

//-------------------------------------------------------------------------
// c) Existe alguma maneira de transpilar múltilplos arquivos de uma vez só? Caso conheça, explique como fazer.

// sim, basta fazer: tsc arquivo1.ts arquivo2.ts arquivo3.ts