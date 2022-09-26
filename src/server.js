var mysql = require('mysql');
var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "login"
});
con.connect(()=>{console.log("Conectado ao banco de dados!");})
const cors = require('cors')
const express = require('express')
const app = express()
app.use(cors())
const http = require('http')
const server = http.createServer(app)

app.get('/patients',(req,res)=>{
    const select = "SELECT * FROM pacientes"
    con.query(select,(err,rows,fields)=>{
        res.send(rows)
    })
})

server.listen(3001, () => {
    setTimeout(()=>{
        console.log(`Servidor local rodando na porta 3001
            .__________________.
            |.----------------.|
            ||     ______     ||
            ||    |           ||
            ||    |   ___     ||
            ||    |      |    ||
            ||    |______|    ||
            ||________________||
            /.-.-.-.-.-.-.-.-.-/
        `)
    },500)
})