# Taller 1 - Algoritmos y Estructuras de Datos

Este repositorio contiene las soluciones para dos problemas de programación competitiva implementados en JavaScript.

## 📁 Archivos del Proyecto

- `p-2.js` - Solución para el problema "Berland Collider"
- `prueba.js` - Solución para el problema "Angry Bids"
- `sample_input.txt` - Archivo de entrada de ejemplo para Angry Bids
- `test_input.txt` - Archivo de prueba para Angry Bids
- `sample_2.txt` - Archivo de entrada adicional

## 🚀 Instrucciones de Ejecución

### Requisitos Previos
- Node.js instalado en tu sistema
- Terminal o línea de comandos

### 1. Berland Collider (`p-2.js`)

**Descripción del problema**: Encuentra el tiempo de la primera colisión entre partículas que se mueven en línea recta.

**Complejidad**: 
- Tiempo: `O(T × n²)` donde T = casos de prueba, n = partículas por caso
- Espacio: `O(n + T)`

#### Ejecución:
```bash
node p-2.js
```

**Salida esperada**:
```
2.50000000000000000000
0.16666666666666665741
```

#### Explicación:
- El programa incluye datos de prueba integrados
- No requiere archivo de entrada externo
- Calcula el tiempo de colisión más temprano entre partículas con velocidades opuestas

### 2. Angry Bids (`prueba.js`)

**Descripción del problema**: Encuentra el precio que minimiza el número total de personas enojadas entre productores y consumidores.

**Complejidad**:
- Tiempo: `O(P × C)` donde P = productores, C = consumidores
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
Luego escribe la entrada manualmente en el formato:
```
T
P C
precios_productores
precios_consumidores
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
El archivo `p-2.js` ya incluye los datos de prueba en el código.

### Angry Bids
```
T                    # Número de casos de prueba
P C                  # Número de productores y consumidores
p1 p2 ... pP        # Precios de los productores
c1 c2 ... cC        # Precios de los consumidores
```

## 🔍 Análisis de Complejidad

### Berland Collider
- **Algoritmo**: Revisa todos los pares de partículas con direcciones opuestas
- **Bucle crítico**: O(n²) debido al bucle anidado
- **Optimización**: Solo considera partículas que pueden colisionar (velocidades opuestas)

### Angry Bids
- **Algoritmo**: Evalúa cada precio único posible
- **Estrategia**: Combinar todos los precios únicos y evaluar el costo de cada uno
- **Optimización**: Usa Set para evitar duplicados

## 🧪 Pruebas

Para probar ambos algoritmos:

```bash
# Probar Berland Collider
node p-2.js

# Probar Angry Bids con entrada de ejemplo
node prueba.js < sample_input.txt

# Probar Angry Bids con entrada de prueba
node prueba.js < test_input.txt
```

## 📝 Notas Técnicas

- Ambos algoritmos están optimizados para los casos de prueba dados
- `p-2.js` usa precisión de 20 decimales para resultados de tiempo
- `prueba.js` lee entrada desde stdin usando `fs.readFileSync(0, 'utf8')`
- Los algoritmos manejan casos edge como cuando no hay colisiones o no hay personas enojadas

## 🎯 Resultados Esperados

### Berland Collider
- Caso 1: `2.50000000000000000000`
- Caso 2: `0.16666666666666665741`

### Angry Bids (sample_input.txt)
- Caso 1: `12 2`
- Caso 2: `120 2` 
- Caso 3: `36 2`
- Caso 4: `28 1`

### Angry Bids (test_input.txt)
- Caso 1: `15 2`
- Caso 2: `5 0`
- Caso 3: `20 0`
