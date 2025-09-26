/**
 * Berland Collider - Algoritmo para encontrar el tiempo de primera colisión
 * entre partículas en movimiento lineal.
 * 
 * COMPLEJIDAD TEMPORAL: O(n²) donde n = número de partículas
 * COMPLEJIDAD ESPACIAL: O(n) donde n = número de partículas
 * 
 * @param {number} n - Número de partículas
 * @param {number[]} positions - Array de posiciones de las partículas (orden ascendente)
 * @param {number[]} velocities - Array de velocidades de las partículas (orden ascendente)
 * @returns {string} - Tiempo de primera colisión o "-1" si no hay colisiones
 */

function berlandCollider(n, positions, velocities) {
  // PASO 1: Validación de entrada - O(1)
  if (n !== positions.length || n !== velocities.length) {
    throw new Error("El número de partículas no coincide con el tamaño de los arrays");
  }

  let best = null; // O(1) - mejor tiempo de colisión encontrado

  // PASO 2: Algoritmo optimizado - O(n²) en peor caso, pero más eficiente en práctica
  // Solo revisamos pares donde una partícula se mueve hacia la derecha y otra hacia la izquierda
  for (let p = 0; p < n; p++) {           // O(n) - partícula que se mueve hacia la derecha
    if (velocities[p] > 0) {              // O(1) - solo si velocidad es positiva
      for (let q = p + 1; q < n; q++) {   // O(n-p) - partículas a la derecha de p
        if (velocities[q] < 0) {          // O(1) - solo si velocidad es negativa
          // Fórmula de tiempo de colisión: t = (x2 - x1) / (v1 - v2)
          const t = (positions[q] - positions[p]) / (velocities[p] - velocities[q]); // O(1) - calcular tiempo
          if (t > 0 && (best === null || t < best)) {   // O(1) - validar y comparar
            best = t;                      // O(1) - actualizar mejor tiempo
          }
        }
      }
    }
  }
  // COMPLEJIDAD: O(n²) en peor caso, pero en la práctica es más eficiente
  // porque solo revisamos pares con direcciones opuestas

  // PASO 3: Retornar resultado - O(1)
  if (best === null) {                    // O(1) - no hubo colisiones
    return "-1";                          // O(1) - indicar que no hay solución
  } else {
    return best.toFixed(20);              // O(1) - formatear con 20 decimales
  }
}

// -----------------
// 🔹 Pruebas con datos estructurados
// -----------------

// Caso 1: 3 partículas
const n1 = 3;
const positions1 = [-5, 0, 5];        // Posiciones en orden ascendente
const velocities1 = [9, 1, -1];      // Velocidades correspondientes

// Caso 2: 6 partículas  
const n2 = 6;
const positions2 = [1, 2, 3, 4, 5, 6];           // Posiciones en orden ascendente
const velocities2 = [3, 3, 3, -3, -1, -100];    // Velocidades correspondientes

console.log("=== PRUEBA 1: Caso con 3 partículas ===");
console.log("Número de partículas:", n1);
console.log("Posiciones:", positions1);
console.log("Velocidades:", velocities1);
console.log("Resultado:", berlandCollider(n1, positions1, velocities1));

console.log("\n=== PRUEBA 2: Caso con 6 partículas ===");
console.log("Número de partículas:", n2);
console.log("Posiciones:", positions2);
console.log("Velocidades:", velocities2);
console.log("Resultado:", berlandCollider(n2, positions2, velocities2));

// * Resultados esperados:
//* 1.00000000000000000000 -> Para el caso de 3 particulas: posiciones [-5, 0, 5], velocidades [9, 1, -1]
//* 0.02912621359223301065 -> Para el caso de 6 particulas: posiciones [1, 2, 3, 4, 5, 6], velocidades [3, 3, 3, -3, -1, -100]
