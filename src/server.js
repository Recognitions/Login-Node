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

app.get('/login/:email/:password',(req,res)=>{
    const email = req.params.email
    const password = req.params.password

    const select = `SELECT * FROM users WHERE email='${email}' AND password='${password}'`
})

app.get('/register/:firstName/:lastName/:email/:password/:birth',(req,res)=>{
    const md5 = require("blueimp-md5")
    const firstName = req.params.firstName
    const lastName = req.params.lastName
    const email = req.params.email
    const password = req.params.password
    const birth = req.params.birth

    const select = `SELECT * FROM users WHERE email='${email}'`
    con.query(select,(err,rows,field)=>{
        if(rows.length==0){
            const insert = `INSERT INTO users(firstName,lastName,email,password,birth) VALUES('${firstName}','${lastName}','${email}','${md5(password)}','${birth}')`
            con.query(insert,(err,rows,fields)=>{
                res.send(rows)
                console.log(rows)
            })
        }else{
            res.send([{error:0}])
        }
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