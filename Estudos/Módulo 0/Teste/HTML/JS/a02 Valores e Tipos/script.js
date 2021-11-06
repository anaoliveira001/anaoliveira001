console.log("imprimindo de 1 a 5 com while");

var contador1 = 1;
while (contador1 <= 5) {
  console.log(contador1);
  contador1++;
}

var contador2 = 1;
do {
  console.log(contador2);
  contador2++;
} while (contador2 <= 5);

console.log("imprimindo de 1 a 5 em for");
for (var contador3 = 1; contador3 <= 5; contador3++) {
  console.log(contador3);
  if (contador3 === 3) {
    continue;
  }
  console.log(contador3);
}
