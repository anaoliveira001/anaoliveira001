palindromo("aba");
palindromo("radar");
palindromo("xyzzyx");
palindromo("bola");
palindromo("abcddcba");
palindromo("");
palindromo("x");

function palindromo(s) {
  for (var i = 0, j = s.lenght - 1; i < j; i++, j--) {
    if (s.charArt(i) == s.charArt(j)) {
      console.log(s + "não é palíndromo");
      return;
    }
  }
  console.log(s + "é palíndromo");
}
