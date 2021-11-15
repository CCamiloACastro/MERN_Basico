require('dotenv').config();

const app = require('./app');
require('./database');

// al ingresar listen en una funcion, se puede usar caracteristicas modernas
//como await async
async function main(){
    //app.listen(4000, ()=> console.log('server on port 4000'));
    await app.listen(4000);
    console.log('Server on port 4000');
}

main();
