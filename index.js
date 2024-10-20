let counter = 0;
function simplerecursion(){
    counter++;
    simplerecursion();}
try {
    simplerecursion();
} catch (error) {
    console.log("Stack overflow error occurred after", counter, "recursive calls.");
    console.log(error);
    }



//step2

/*function flattenarray (array){
    let result = [];
    for (const item of array) {
        if (Array.isArray(item)) {
            const arrayisflattened = flattenarray(item);
            result = result.concat(arrayisflattened);}
        else {
            result.push(item);}
    }
    return result;}*/

    function flattenarray(array, result = []) {
      return function() {
          for (const item of array) {
              if (Array.isArray(item)) {
                  return flattenarray(item, result);
              } else {
                  result.push(item);
              }
          }
          return result;
      };
  }

  
  const simple = document.getElementById('simple');
  const primes = [];


 
  function addsallprime(n){
    for (let num = 1; num <= n; num++) {
        let isPrime = true; 
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }}
        if (isPrime) {
            primes.push(num);
        }
    }
    simple.textContent = primes;
    alert("The calculation has finished")
}

addsallprime(200);


