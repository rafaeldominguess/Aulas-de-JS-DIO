const vetores = [10, 20, 30, 40, 50];

vetores.push(60); // Adiciona o elemento 60 ao final do array
vetores[6] = 70; // Adiciona o elemento 70 na posição de índice 6
console.log(vetores);

vetores.pop(); // Remove o último elemento do array
console.log(vetores);

vetores.shift(); // Remove o primeiro elemento do array
console.log(vetores);

vetores.unshift(5); // Adiciona o elemento 5 no início do array
console.log(vetores);

vetores.splice(2, 1); // Remove 1 elemento a partir do índice 2
console.log(vetores);

vetores.splice(2, 0, 25); // Adiciona o elemento 25 na posição de índice 2
console.log(vetores);