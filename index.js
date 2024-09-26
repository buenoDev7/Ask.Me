// → Importações de Bibliotecas e Módulos
const express = require('express')
const app = express()
const moment = require('moment')
const bodyParser = require('body-parser');
const connection = require('./database/db_connection')
const ModelPergunta = require('./database/Model_Pergunta')
const ModelResposta = require('./database/Model_Resposta')

// → Autenticação da conexão ao Banco de Dados
connection.authenticate().then(() => {
    console.log("\n✅ Banco de Dados conectado com sucesso")
}).catch((err) => {
    console.log(`❌ Erro ao conectar Banco de Dados: [${err}]`)
})


// → body-parser p/ lidar com dados dos formulários
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

// → Configurações de engine de Renderização do EJS
app.set('view engine', 'ejs')
app.use(express.static('public'))


// → Rotas
// → Homepage
app.get('/', (req, res) => {
    ModelPergunta.findAll({
        raw: true,
        order: [['id', 'DESC']]
    }).then(perguntas => {
        perguntas.forEach(pergunta => {
            pergunta.createdAtFormatted = moment(pergunta.createdAt).format('DD/MM/YYYY - HH:mm')
        })
        res.render('homepage', {
            perguntas: perguntas
        })
    })
})

// → Fazer Pergunta
app.get('/perguntar', (req, res) => {
    res.render('perguntar')
})

// → Gravar Pergunta no BD
app.post('/perguntar', (req, res) => {
    const username = req.body.username;
    const titulo = req.body.titulo;
    const descricao = req.body.descricao;
    ModelPergunta.create( {
        username: username,
        titulo: titulo,
        descricao: descricao
    }).then(() => {
        res.redirect('/')
    })
})

// → Buscar pergunta pelo ID
app.get('/pergunta/:id', (req, res) => {
    const idPergunta = req.params.id;
    ModelPergunta.findOne({
        where: {
            id: idPergunta
        }
    }).then(pergunta => {
        if (pergunta != undefined) {
            pergunta.createdAtFormatted = moment(pergunta.createdAt).format('DD/MM/YYYY - HH:mm')
            ModelResposta.findAll({
                order: [['id', 'DESC']],
                where: {
                    idPergunta: idPergunta
                }
            }).then(respostas => {
                respostas.forEach(resposta => {
                    resposta.createdAtFormatted = moment(resposta.createdAt).format('DD/MM/YYYY - HH:mm')
                })
                res.render('pergunta', {
                    idPergunta: idPergunta,
                    pergunta: pergunta,
                    respostas: respostas
                })
            })
        } else {
            res.render('404')
        }
    })
})

app.post('/responder', (req, res) => {
    const username = req.body.username
    const corpoResposta = req.body.corpoResposta
    const idPergunta = req.body.idPergunta
    ModelResposta.create({
        username: username,
        corpoResposta: corpoResposta,
        idPergunta: idPergunta
    }).then(() => {
        res.redirect('/pergunta/' + idPergunta)
    }).catch((err) => {
        console.log(`Erro ao gravar resposta no Banco de Dados: [${err}]`)
    })
})

const PORT = process.env.PORT || 3000
app.listen(PORT, ()=> {
    console.log(`\n✅ Servidor conectado com sucesso!\n\n🚀 Rodando na porta: ${PORT}\n`)
})