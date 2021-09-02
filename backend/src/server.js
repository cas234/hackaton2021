const express = require('express')
const app = express()
const Places = require('./models/places')
const guias = require('./models/guias')


app.use(express.json())




app.get('/', async function(req,res){
    await Places.findAll({order: [['id', 'Desc']]}).then(function(places){
        res.json({places})
    })
});

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