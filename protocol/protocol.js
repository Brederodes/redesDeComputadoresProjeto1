function isNotNumber(data){
    return (typeof data !== "number" || isNaN(data));
}

function clientRequest(requestArray){
    //validando o input
    if(!requestArray) return "erro";
    if(requestArray.length!=3) return "erro"; 
    if(requestArray.some(isNotNumber)) return "erro";

    switch(requestArray[2]){
        case 0: return requestArray[0] + requestArray[1];
        case 1: return requestArray[0] * requestArray[1];
        case 2: return requestArray[0] / requestArray[1];
        default: return "erro";
    }
}

function updateMessage(){
    let requestArray = [
                            document.getElementById('param1').value,
                            document.getElementById('param2').value,
                            document.getElementById('param3').value,
                        ];
    requestArray= requestArray.map((element)=>{return parseInt(element, 10)});
    document.getElementById('answerBox').innerText= clientRequest(requestArray);
}

document.getElementById('request').addEventListener('input', updateMessage);