/**
 * Se organiza una colección de manzanas en cajas y paquetes para distribuir entre los amigos.
 * @param {number[]} manzanas - Aquí lLa colección de manzanas.
 * @returns {Array[]} - Representamos la distribución de manzanas entre los amigos.
 */
function organizarManzanas(manzanas) {
    // Definimos la cantidad de manzanas por caja y paquete
    const manzanasPorCaja = 4;
    const cajasPorPaquete = 2;
  
    // Inicializamos  la matriz de salida
    const salida = [];
  
    // Dividimio las manzanas en cajas
    const cajas = [];
    for (let i = 0; i < manzanas.length; i += manzanasPorCaja) {
      cajas.push(manzanas.slice(i, i + manzanasPorCaja));
    }
  
    // Agrupo las cajas en paquetes
    const paquetes = [];
    for (let i = 0; i < cajas.length; i += cajasPorPaquete) {
      paquetes.push(cajas.slice(i, i + cajasPorPaquete));
    }
  
    // Distribuimos los paquetes entre amigos
    const amigos = [];
    let indiceAmigo = 0;
    paquetes.forEach(paquete => {
      if (!amigos[indiceAmigo]) {
        amigos[indiceAmigo] = [];
      }
      amigos[indiceAmigo].push(paquete);
      indiceAmigo = (indiceAmigo + 1) % 2; // Dos paquetes por amigo
    });
  
    // Compruebo si la última caja está incompleta y la agrego al último amigo si es necesario
    if (cajas.length % cajasPorPaquete === 1) {
      amigos[amigos.length - 1][amigos[amigos.length - 1].length - 1].push(cajas[cajas.length - 1]);
    }
  
    // Se imprime la distribución de manzanas 
    amigos.forEach((amigo, index) => {
      console.log(`Amigo ${index + 1}:`);
      amigo.forEach((paquete, index) => {
        console.log(`  Paquete ${index + 1}:`);
        paquete.forEach((caja, index) => {
          console.log(`    Caja ${index + 1}:`);
          caja.forEach(manzana => {
            console.log(`      Manzana: ${manzana}`);
          });
        });
      });
    });
  
    return amigos;
  }
  
  var manzanas = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17];
  organizarManzanas(manzanas);