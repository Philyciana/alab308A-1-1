let a = 4;
function recursivefunc(i){
    try {
        a++;
        setTimeout(recursivefunc, 1000); 
    }
    catch(error){
        console.error("Error", error), a;
    }

}