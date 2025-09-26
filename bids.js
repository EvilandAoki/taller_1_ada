/**
 * ANGRY BIDS - Algoritmo para encontrar el precio que minimiza
 * el número total de personas enojadas entre productores y consumidores.
 * 
 * PROBLEMA: Dados P productores y C consumidores con precios específicos,
 * encontrar el precio que minimiza el número total de personas enojadas.
 * - Productores se enojan si el precio es menor que su precio mínimo
 * - Consumidores se enojan si el precio es mayor que su precio máximo
 * 
 * 
 * COMPLEJIDAD TEMPORAL: O(n log n) donde n = P + C (elementos por caso)
 * COMPLEJIDAD ESPACIAL: O(n) donde n = P + C (elementos por caso)
 * 
 */

function bids() {
    // PASO 1: Parsing inicial - O(1) 
    const fs = require('fs');
    const input = fs.readFileSync(0, 'utf8').trim().split('\n'); // O(1) - leer y dividir entrada
    let lineIndex = 0;                                           // O(1) - índice para recorrer líneas
    
    // PASO 2: Lectura del número de casos de prueba - O(1)
    const testCases = parseInt(input[lineIndex++]);              // O(1) - leer número de casos
    
    // PASO 3: Bucle principal - O(T) iteraciones donde T = número de casos de prueba
    for (let i = 0; i < testCases; i++) {                       // O(T) - procesar cada caso
        
        // PASO 4: Lectura de datos del caso actual - O(1) + O(P+C)
        const [P, C] = input[lineIndex++].split(' ').map(Number); // O(1) - leer P y C
        
        // PASO 5: Lectura y sorting de precios - O(n log n)
        const producerPrices = P > 0 ? input[lineIndex++].split(' ').map(Number).sort((a,b) => a-b) : []; // O(n log n)
        const consumerPrices = C > 0 ? input[lineIndex++].split(' ').map(Number).sort((a,b) => a-b) : []; // O(n log n)
        
        // PASO 6: Crear array de precios candidatos únicos - O(n)
        // Solo necesitamos evaluar: 0, 1e9, y todos los precios dados
        const allPrices = [...new Set([0, 1e9, ...producerPrices, ...consumerPrices])].sort((a,b) => a-b); // O(n)
        
        // PASO 7: Variables para tracking del mejor resultado - O(1)
        let minAngry = Infinity;  // O(1) - mínimo número de enojados encontrado
        let bestPrice = 0;        // O(1) - precio que produce el mínimo de enojados
        
        // PASO 8: Algoritmo principal - O(n log n) (BUCLE CRÍTICO)
        // Evaluar cada precio candidato usando búsqueda binaria
        for (const price of allPrices) {                         // O(n) - máximo n candidatos
            
            // PASO 8.1: Contar productores enojados con búsqueda binaria - O(log n)
            // Productores se enojan si el precio es menor que su precio mínimo
            let angryProducers = 0;                              // O(1) - contador de productores enojados
            let left = 0, right = producerPrices.length - 1;     // O(1) - límites para búsqueda binaria
            
            while (left <= right) {                             // O(log n) - búsqueda binaria
                const mid = Math.floor((left + right) / 2);     // O(1) - punto medio
                if (producerPrices[mid] > price) {               // O(1) - precio del productor > precio actual
                    angryProducers = producerPrices.length - mid; // O(1) - todos los productores desde mid se enojan
                    right = mid - 1;                             // O(1) - buscar en la mitad izquierda
                } else {
                    left = mid + 1;                             // O(1) - buscar en la mitad derecha
                }
            }
            
            // PASO 8.2: Contar consumidores enojados con búsqueda binaria - O(log n)
            // Consumidores se enojan si el precio es mayor que su precio máximo
            let angryConsumers = 0;                              // O(1) - contador de consumidores enojados
            left = 0, right = consumerPrices.length - 1;         // O(1) - límites para búsqueda binaria
            
            while (left <= right) {                             // O(log n) - búsqueda binaria
                const mid = Math.floor((left + right) / 2);     // O(1) - punto medio
                if (consumerPrices[mid] < price) {               // O(1) - precio del consumidor < precio actual
                    angryConsumers = mid + 1;                    // O(1) - todos los consumidores hasta mid se enojan
                    left = mid + 1;                             // O(1) - buscar en la mitad derecha
                } else {
                    right = mid - 1;                            // O(1) - buscar en la mitad izquierda
                }
            }
            
            // PASO 8.3: Calcular total de enojados y actualizar mejor resultado - O(1)
            const totalAngry = angryProducers + angryConsumers;  // O(1) - suma total de enojados
            
            // Actualizar mejor resultado si encontramos menos enojados o mismo número con precio menor
            if (totalAngry < minAngry || (totalAngry === minAngry && price < bestPrice)) { // O(1)
                minAngry = totalAngry;                          // O(1) - actualizar mínimo
                bestPrice = price;                              // O(1) - actualizar mejor precio
            }
        }
        // COMPLEJIDAD DEL BUCLE PRINCIPAL:
        // O(n) candidatos × O(log n) búsqueda binaria = O(n log n)
        
        // PASO 9: Imprimir resultado - O(1)
        console.log(`${bestPrice} ${minAngry}`);               // O(1) - mostrar resultado
    }
    
    // COMPLEJIDAD TOTAL:
    // O(T × n log n) donde T = casos de prueba, n = P + C elementos por caso
}

bids();
