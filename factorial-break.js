let factorial = 1;
let i = 1;
let num = 20;
while (i <= num) {
  factorial *= i;
  i++;
  if (factorial !== 3628800) {
    console.log(`${factorial} No es el factorial de 10`);
  } else {
    console.log(
      `${factorial} Este el factorial de 10 y no hago más factoriales porque tengo un break`
    );
    break;
  }
}
