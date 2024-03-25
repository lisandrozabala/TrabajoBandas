const db = require('../db/index')

const bandasController = {
    index: function(req, res){
      let resultado = [];
      for (let i = 0; i < db.lista.length; i++) {
        resultado.push(db.lista[i])
      }
      return res.render('listadoBandas', {
        lista: resultado,
        mensaje: 'Listado de bandas'
      })
    },
    filtrarPorID: function (req, res) {
      let idBanda = req.params.id
      let resultado = [];
        for (let i = 0; i < db.lista.length; i++) {
          if (idBanda==db.lista[i].id) {
            resultado.push(db.lista[i])
          }}
        if (resultado.length == 0) {
            return res.send('No tenemos id ' + idBanda)
          }
        else{
          return res.render('detalleBanda', {
            lista: resultado,
            mensaje: 'Detalle Banda',
            video: db.lista[idBanda].video,
            cover: db.lista[idBanda].cover
        })
    }
  },
    filtrarPorGenero: function (req, res) {
        let generoBanda = req.params.genero
        let resultado = []
        for (let i = 0; i < db.lista.length; i++) {
          if (generoBanda==db.lista[i].genero) {
            resultado.push(db.lista[i])
          }
        }
        if(resultado.length == 0){
          return res.send('No tenemos genero ' + generoBanda)
      }else{
          return res.render('detalleGenero', {
            lista: resultado,
            mensaje: 'Bandas del genero',
            iD: req.params.id
          })
      }
    }
  }

module.exports = bandasController