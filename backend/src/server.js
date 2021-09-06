const express = require('express')
const app = express()
const Places = require('./models/places')
const guias = require('./models/guias')
const cors = require('cors');


app.use(express.json())
app.use(cors());



app.get('/', async function(req,res){
    await Places.findAll({order: [['id', 'Desc']]}).then(function(places){
        res.json({places})
    })
});

app.get('/guias/:id', async function(req,res){
    await guias.findByPk(req.params.id)
    .then(guias=>{
        return res.json({
            error:false,
            guias
        })
    }).catch(function(erro){
        return res.status(400).json({
            erro:true,
            message:"guia no encontrado"
        })
    })
})

app.get('/places/:id', async function(req,res){
    await  Places.findByPk(req.params.id)
    .then(places=>{
        return res.json({
            error: false,
            places
        })

    }).catch(function(erro){
        return res.status(400).json({
            erro: true,
            message:"lugar no encontrado"
        })
    })
})

app.get('/guias', async function (req,res){
    await guias.findAll({order: [['id', 'Desc']] }).then(function(guias){
        res.json({guias})
    })
})

app.post('/cadastrar', async (req,res) =>{
    const resultCad= await Places.create(
      req.body
    ).then(function(){
        return res.json({
            error:false,
            message:"cadastrado con sucesso"
        })
    }).catch(function(erro){
        return res.status(400).json({
            error:true,
            message:"Anuncio nao cadatrado con sucesso"
        })
    })
});

app.post('/cadastrarguias', async (req,res) =>{
    const resultCad= await guias.create(
      req.body
    ).then(function(){
        return res.json({
            error:false,
            message:"cadastrado con sucesso"
        })
    }).catch(function(erro){
        return res.status(400).json({
            error:true,
            message:"guia nao cadatrado con sucesso"
        })
    })
});






app.listen(8080)