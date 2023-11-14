function fizzBuzz(word1, word2) {
  if (typeof word1 !== "string" && typeof word2 !== "string") {
    throw new Error("Only use string values");
  }
  const factor = word1.length + word2.length;
  if (factor % 3 === 0) {
    console.log("Fizz");
  } else if (factor % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log("FizzBuzz");
  }
}
fizzBuzz("dear", "Fiona");
fizzBuzz("Hellodear", "Fiona");
fizzBuzz("qwe", "rt");
