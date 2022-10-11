const Product = require('../../models/Product')

function deleteProduct (req,res){

  const ProductDelete =  req.params.id

  Product.destroy({where: {'id' : ProductDelete}}).then(
    function(){
      res.send('Ocorreu tudo certo ao deletar seu produto!!!')
    }
  ).catch(
    function(error){
      res.send('Algo deu errado ao deletar seu produto: '+ error)
    }
  )
}

module.exports = deleteProduct;
