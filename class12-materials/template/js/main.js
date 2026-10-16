let a = "jonas";
first();

function first() {
  const b = "hello";
  second();

  function second() {
    const c = "hi";
    // b = c;
    third();

    function third() {
      const d = "Hey";
      console.log(a + b + c + d);
    }
  }
}

function third() {
  const d = "Hey";
  console.log(d + c + b + a);
}

// let a = "this";
// first();

// function first() {
//   const b = "is";
//   second(6);

//   function second(b) {
//     const c = "the";
//     third(b, c);
//   }
// }

// function third(bar, car) {
//   const d = "example";
//   console.log(a + bar + car + d);
// }
