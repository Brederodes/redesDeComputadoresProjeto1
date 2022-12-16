const isNumber = (data) => {
    typeof data === "number";
}

function clientRequest(requestArray){
    //validating input
    if(!requestArray) throw null;
    if(requestArray.length!=3) throw null; 
    if(!requestArray.some(isNumber)) throw null;

    switch(requestArray[2]){
        case 0: return requestArray[0] + requestArray[1];
        case 1: return requestArray[0] * requestArray[1];
        case 2: return requestArray[0] / requestArray[1];
        default: throw null;
    }
}