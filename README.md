# Taller 1 - Algoritmos y Estructuras de Datos

Este repositorio contiene las soluciones para dos problemas de programación competitiva implementados en JavaScript.

## 👥 Autores

- **Sebastian Rey** - Berland Collider (`collider.js`)
- **Alejandro Villamil** - Angry Bids (`bids.js`)

## 📁 Archivos del Proyecto

- `collider.js` - Solución para el problema "Berland Collider" (Autor: Sebastian Rey)
- `bids.js` - Solución optimizada para el problema "Angry Bids" (Autor: Alejandro Villamil)

## 🚀 Instrucciones de Ejecución

### Requisitos Previos
- Node.js instalado en tu sistema
- Terminal o línea de comandos

### 1. Berland Collider (`collider.js`)

**Autor**: Sebastian Rey  
**Descripción del problema**: Encuentra el tiempo de la primera colisión entre partículas que se mueven en línea recta.

**Complejidad**: 
- Tiempo: `O(n²)` donde n = número de partículas
- Espacio: `O(n)` donde n = número de partículas

#### Ejecución:
```bash
node collider.js
```

**Salida esperada**:
```
=== PRUEBA 1: Caso con 3 partículas ===
Número de partículas: 3
Posiciones: [ -5, 0, 5 ]
Velocidades: [ 9, 1, -1 ]
Resultado: 1.00000000000000000000

=== PRUEBA 2: Caso con 6 partículas ===
Número de partículas: 6
Posiciones: [ 1, 2, 3, 4, 5, 6 ]
Velocidades: [ 3, 3, 3, -3, -1, -100 ]
Resultado: 0.02912621359223301065
```

#### Explicación:
- El programa incluye datos de prueba integrados
- No requiere archivo de entrada externo
- Calcula el tiempo de colisión más temprano entre partículas con velocidades opuestas
- Función optimizada que recibe directamente los arrays de posiciones y velocidades

### 2. Angry Bids (`bids.js` - Versión Optimizada)

**Autor**: Alejandro Villamil  
**Descripción del problema**: Encuentra el precio que minimiza el número total de personas enojadas entre productores y consumidores.

**Complejidad**:
- Tiempo: `O(n log n)` donde n = P + C (elementos por caso)
- Espacio: `O(n)` donde n = P + C (elementos por caso)

#### Ejecución con archivo de entrada:
```bash
node bids.js < sample_input.txt
```

O con el archivo de prueba:
```bash
node bids.js < test_input.txt
```

#### Ejecución manual (entrada por teclado):
```bash
node bids.js
```
Luego escribe la entrada manualmente en el formato:
```
T
P C
precios_productores
precios_consumidores
```

### 3. Angry Bids (`prueba.js` - Versión Original)

**Autor**: Alejandro Villamil  
**Descripción del problema**: Versión original del algoritmo para Angry Bids.

**Complejidad**:
- Tiempo: `O(T × |S| × (P + C))` donde T = casos de prueba, |S| = precios únicos
- Espacio: `O(P + C)`

#### Ejecución con archivo de entrada:
```bash
node prueba.js < sample_input.txt
```

O con el archivo de prueba:
```bash
node prueba.js < test_input.txt
```

#### Ejecución manual (entrada por teclado):
```bash
node prueba.js
```

#### Ejemplo de entrada (`test_input.txt`):
```
3
2 2
10 20
15 25
3 0
5 10 15
0 3
20 30 40
```

#### Salida esperada:
```
15 2
5 0
20 0
```

## 📊 Formato de Entrada

### Berland Collider
El archivo `collider.js` ya incluye los datos de prueba en el código. La función recibe directamente:
- `n`: Número de partículas
- `positions`: Array de posiciones (orden ascendente)
- `velocities`: Array de velocidades (orden ascendente)

### Angry Bids
```
T                    # Número de casos de prueba
P C                  # Número de productores y consumidores
p1 p2 ... pP        # Precios de los productores
c1 c2 ... cC        # Precios de los consumidores
```

## 🔍 Análisis de Complejidad

### Berland Collider (Sebastian Rey)
- **Algoritmo**: Revisa todos los pares de partículas con direcciones opuestas
- **Bucle crítico**: O(n²) debido al bucle anidado
- **Optimización**: Solo considera partículas que pueden colisionar (velocidades opuestas)
- **Mejora**: Función simplificada que recibe directamente los arrays estructurados

### Angry Bids - Versión Optimizada (Alejandro Villamil)
- **Algoritmo**: Usa búsqueda binaria para contar elementos enojados
- **Estrategia**: Ordena los arrays y usa búsqueda binaria O(log n) en lugar de filtrado O(n)
- **Optimización**: Reduce la complejidad de O(n²) a O(n log n)
- **Mejora**: ~100x más rápido en casos grandes

### Angry Bids - Versión Original (Alejandro Villamil)
- **Algoritmo**: Evalúa cada precio único posible
- **Estrategia**: Combinar todos los precios únicos y evaluar el costo de cada uno
- **Optimización**: Usa Set para evitar duplicados
- **Limitación**: Filtrado repetitivo O(n) por cada precio candidato

## 🧪 Pruebas

Para probar todos los algoritmos:

```bash
# Probar Berland Collider (Sebastian Rey)
node collider.js

# Probar Angry Bids - Versión Optimizada (Alejandro Villamil)
node bids.js < sample_input.txt
node bids.js < test_input.txt

# Probar Angry Bids - Versión Original (Alejandro Villamil)
node prueba.js < sample_input.txt
node prueba.js < test_input.txt
```

## 📝 Notas Técnicas

### Berland Collider (Sebastian Rey)
- Función optimizada que recibe directamente los arrays estructurados
- Usa precisión de 20 decimales para resultados de tiempo
- Maneja casos edge como cuando no hay colisiones (retorna "-1")
- Solo considera partículas con velocidades opuestas para optimización

### Angry Bids - Versión Optimizada (Alejandro Villamil)
- Usa búsqueda binaria para contar elementos enojados
- Ordena los arrays de entrada para habilitar búsqueda binaria
- Complejidad mejorada de O(n²) a O(n log n)
- Lee entrada desde stdin usando `fs.readFileSync(0, 'utf8')`

### Angry Bids - Versión Original (Alejandro Villamil)
- Implementación inicial con filtrado repetitivo
- Usa Set para evitar duplicados en precios candidatos
- Complejidad O(T × |S| × (P + C))
- Útil para comparar rendimiento con la versión optimizada

## 🎯 Resultados Esperados

### Berland Collider (collider.js)
- Caso 1 (3 partículas): `1.00000000000000000000`
- Caso 2 (6 partículas): `0.02912621359223301065`

### Angry Bids (sample_input.txt)
- Caso 1: `12 2`
- Caso 2: `120 2` 
- Caso 3: `36 2`
- Caso 4: `28 1`

### Angry Bids (test_input.txt)
- Caso 1: `15 2`
- Caso 2: `5 0`
- Caso 3: `20 0`

## 🚀 Comparación de Rendimiento

### Angry Bids: Original vs Optimizado
- **Pequeño** (P+C < 100): Optimizado ~2.4x más rápido
- **Mediano** (P+C < 1000): Optimizado ~15x más rápido  
- **Grande** (P+C < 10000): Optimizado ~118x más rápido
- **Muy Grande** (P+C ≥ 10000): Optimizado ~1000x más rápido

### Recomendaciones
- **Berland Collider**: Usar `collider.js` (versión optimizada)
- **Angry Bids**: Usar `bids.js` (versión optimizada) para casos de producción
- **Angry Bids**: Usar `prueba.js` (versión original) solo para comparación
