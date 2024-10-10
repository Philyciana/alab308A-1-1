// let a = 4;
//function recursivefunc(i){
  //  try {
    //    a++;
      //  console.log(a);
        //setTimeout(() => recursivefunc(i), 1000); 
    //}
    //catch(error){
      //  console.error("Error", error, a);
    //}

//}
//recursivefunc(1); 

//step2

function flattenarray (array){
    let result = [];
    for (const item of array) {
        if (Array.isArray(item)) {
            result = result.concat(flattenarray(item));
        } else {
            result.push(item);
        }
    }
    return result;

}
const nestedarray = [1, 2, [3, 4, [5, 6]]];
console.log(flattenarray(nestedarray));