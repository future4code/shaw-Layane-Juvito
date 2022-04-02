```function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {```

```  let arrayNumEscolhido=arrayDeNumeros.filter((element)=>{ ```
```    return element === numeroEscolhido; ```
```  }); ```
```  if(arrayNumEscolhido.length>0){ ```
```    return `O número ${numeroEscolhido} aparece ${arrayNumEscolhido.length}x` ```
```  } else { ```
```    return "Número não encontrado" ```
```  } ```
``` } ```