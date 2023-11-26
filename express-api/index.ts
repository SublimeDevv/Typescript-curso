import express, { response } from 'express';
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.status(401).json({
        msg: 'No hay token en la peticion'
    })

})



app.listen(port, () => {
    console.log('Funcionando')
})