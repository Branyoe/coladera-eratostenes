const coladeraEratostenes = (limite = 10) => {
  //paso 1
  const lista = [];
  
  for (let i = 0; i < limite; i++) {
    lista[i] = 1;
  }
  
  //paso 2
  for (let i = 2; i < lista.length; i++) {
    const element = lista[i];
    if (element === 1) {
      for (let j = i + 1; j < lista.length; j++) {
        if (j % i === 0) {
          lista[j] = 0;
        }
      }
    }
  }

  return lista;
}


console.table(coladeraEratostenes(1000));