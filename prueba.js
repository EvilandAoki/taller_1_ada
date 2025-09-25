// Algoritmo simple para resolver "Angry Bids"
function bids() {
    const fs = require('fs');
    const input = fs.readFileSync(0, 'utf8').trim().split('\n');
    let lineIndex = 0;
    
    const testCases = parseInt(input[lineIndex++]);
    
    for (let i = 0; i < testCases; i++) {
        const [P, C] = input[lineIndex++].split(' ').map(Number);
        const producerPrices = P > 0 ? input[lineIndex++].split(' ').map(Number) : [];
        const consumerPrices = C > 0 ? input[lineIndex++].split(' ').map(Number) : [];
        
        // Combinar todos los precios únicos
        const allPrices = new Set([0, 1e9]);
        producerPrices.forEach(p => allPrices.add(p));
        consumerPrices.forEach(p => allPrices.add(p));
        
        let minAngry = Infinity;
        let bestPrice = 0;
        
        // Evaluar cada precio
        for (const price of allPrices) {
            const angryProducers = producerPrices.filter(p => price < p).length;
            const angryConsumers = consumerPrices.filter(p => price > p).length;
            const totalAngry = angryProducers + angryConsumers;
            
            if (totalAngry < minAngry || (totalAngry === minAngry && price < bestPrice)) {
                minAngry = totalAngry;
                bestPrice = price;
            }
        }
        
        console.log(`${bestPrice} ${minAngry}`);
    }
}

bids();