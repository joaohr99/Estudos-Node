const moduloA = require('../../moduloa')
console.log(moduloA.ola)

const saudacao = require('saudacao')
console.log(saudacao.ola)

const c = require('./pasta C/index')
console.log(c.ola2)

const http = require('http')
http.createServer((req, rest) => {
    rest.write('Bom dia!')
    rest.end()
}).listen(8080)