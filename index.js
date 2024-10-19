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