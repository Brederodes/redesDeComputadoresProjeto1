//coloca os styles de classes já prontos do esquema na página
let head= document.getElementsByTagName('head')[0];
let schemeStylesLink= document.createElement('link');
schemeStylesLink.rel= 'stylesheet';
schemeStylesLink.href= 'styles/schemeStyles.css';
head.append(schemeStylesLink);

//todos os styles individuais são aplicados dinamicamente em javascript
let scheme = document.getElementById('scheme');

scheme.style.display= 'flex';
scheme.style.alignItems= 'center';

let client= document.getElementById('client');

client.style.height= '180px';
client.style.padding= '20px';
client.style.border= '2px solid black';

let server= document.getElementById('server');

server.style.height= '180px';
server.style.padding= '20px';
server.style.border= '2px solid black';

let interaction= document.getElementById('interaction');

interaction.style.height= '200px';
interaction.style.width= '200px';
interaction.style.display= 'flex';
interaction.style.flexDirection= 'column';
interaction.style.justifyContent= 'center';
interaction.style.alignItems= 'center';
interaction.style.gap= '20px'

let requestArray= document.getElementById('requestArray');

requestArray.style.display= 'flex';

let request= document.getElementById('request');

request.style.display= 'flex';
request.style.flexDirection='column';
request.style.alignItems= 'center'
request.style.border= '2px solid'
request.style.flexGrow= '1';

let returnArray= document.getElementById('returnArray');

requestArray.style.display= 'flex';

let returnMessage= document.getElementById('returnMessage');

returnMessage.style.display= 'flex';
returnMessage.style.flexDirection='column';
returnMessage.style.alignItems= 'center'
returnMessage.style.border= '2px solid'
request.style.flexGrow= '1';

let requestWire= document.getElementById('requestWire');

requestWire.style.display= 'flex';
requestWire.style.width= '100%';
requestWire.style.alignItems= 'center';
requestWire.style.justifyContent= 'center';

let returnWire= document.getElementById('returnWire');

returnWire.style.display= 'flex';
returnWire.style.width= '100%';
returnWire.style.alignItems= 'center';
returnWire.style.justifyContent= 'center';

let body= document.getElementsByTagName('body')[0];

body.style.display= 'flex';
body.style.flexDirection= 'column';
body.style.alignItems= 'center';