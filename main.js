const coladeraEratostenes = (limite = 1000) => {
  //paso 1
  const lista = [];
  lista.length = limite;
  lista.fill(1);
  
  // for (let i = 0; i < limite; i++) {
  //   lista[i] = 1;
  // }

  
  //paso 2
  for (let i = 2; i < lista.length; i++) {
    const elemento = lista[i];
    if (elemento === 1) {
      for (let j = i + 1; j < lista.length; j++) {
        if (j % i === 0) {
          lista[j] = 0;
        }
      }
    }
  }

  return lista;
}


console.table(coladeraEratostenes());