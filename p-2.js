/**
 * Berland Collider - Algoritmo para encontrar el tiempo de primera colisión
 * entre partículas en movimiento lineal.
 * 
 * COMPLEJIDAD TEMPORAL: O(T × n²) donde T = casos de prueba, n = partículas por caso
 * COMPLEJIDAD ESPACIAL: O(n + T) donde n = partículas, T = casos de prueba
 * 
 * @param {string} input - String con datos de entrada formateados
 * @returns {string} - Resultados de cada caso de prueba separados por saltos de línea
 */


function berlandCollider(input) {
  // PASO 1: Parsing inicial - O(L) donde L = longitud del string de entrada
  const tokens = input.trim().split(/\s+/).map(Number); // O(L) - dividir y convertir a números
  let i = 0;                                            // O(1) - índice para recorrer tokens
  const out = [];                                       // O(1) - array para resultados

  // PASO 2: Bucle principal - O(T) iteraciones donde T = número de casos de prueba
  while (i < tokens.length) { // O(T) - procesar cada caso de prueba
    
    // PASO 3: Lectura de datos del caso actual - O(1) + O(n)
    const n = tokens[i++];        // O(1) - número de partículas en este caso
    const xs = new Array(n);      // O(n) - array para posiciones
    const vs = new Array(n);      // O(n) - array para velocidades

    // PASO 4: Llenar arrays con datos - O(n) iteraciones
    for (let k = 0; k < n; k++) { // O(n) - leer n partículas
      xs[k] = tokens[i++];        // O(1) - posición de la partícula k
      vs[k] = tokens[i++];        // O(1) - velocidad de la partícula k
    }

    let best = null; // O(1) - mejor tiempo de colisión encontrado

    // PASO 5: Algoritmo principal - O(n²) iteraciones (BUCLE CRÍTICO)
    // Revisar todos los pares posibles de partículas con direcciones opuestas
    for (let p = 0; p < n; p++) {           // O(n) - partícula que se mueve hacia la derecha
      if (vs[p] > 0) {                      // O(1) - solo si velocidad es positiva
        for (let q = p + 1; q < n; q++) {   // O(n-p) - partículas a la derecha de p
          if (vs[q] < 0) {                  // O(1) - solo si velocidad es negativa
            // Fórmula de tiempo de colisión: t = (x2 - x1) / (v1 - v2)
            const t = (xs[q] - xs[p]) / (vs[p] - vs[q]); // O(1) - calcular tiempo
            if (t > 0 && (best === null || t < best)) {   // O(1) - validar y comparar
              best = t;                      // O(1) - actualizar mejor tiempo
            }
          }
        }
      }
    }
    // COMPLEJIDAD DEL BUCLE ANIDADO: 
    // Total de iteraciones = (n-1) + (n-2) + ... + 1 = n(n-1)/2 = O(n²)

    // PASO 6: Guardar resultado - O(1)
    if (best === null) {                    // O(1) - no hubo colisiones
      out.push("-1");                       // O(1) - indicar que no hay solución
    } else {
      out.push(best.toFixed(20));           // O(1) - formatear con 20 decimales
    }
  }

  // PASO 7: Retornar resultados - O(T)
  return out.join("\n"); // O(T) - unir todos los resultados con saltos de línea
}

// -----------------
// 🔹 Prueba con el Sample Input
// -----------------
const sampleInput = `
3
-5 9
0 1
5 -1
6
1 3
2 3
3 3
4 -3
5 -1
6 -100
`;

console.log(berlandCollider(sampleInput));
