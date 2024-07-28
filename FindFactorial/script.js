findFactorial = () => {
  document.getElementsByTagName("div")[0].innerHTML = Array.from(
    Array(parseInt(document.getElementsByTagName("input")[0].value) + 1).keys()
  )
    .slice(1)
    .reduce((a, b) => {
      return a * b;
    });
};
