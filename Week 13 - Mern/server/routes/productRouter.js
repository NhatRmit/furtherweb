const express = require('express')
const router = express.Router()

const Product = require('../models/product.js')

router.get('/', function(req, res) {
    Product.find({}, function(error, products) {
        res.send(products)
    })
})

router.post('/', function(req, res) {
    Product.create(req.body, function(error, products) {
        res.send(products)
    })
})

router.put('/', function(req, res) {
    Product.findByIdAndUpdate({_id: req.body.id}, {name: req.body.name}, {price: req.body.price}, function(error, updatedProduct){
        res.send(updatedProduct)
    })
})



router.delete('/:id', function(req, res) {
    Product.deleteOne({_id: req.params.id}, function(error, deletedProduct){
        res.send(deletedProduct)
    })
})

router.get('/search', async function(req, res){
    //    Product.find({name: req.params.keyword}, function(err, result){
    //        res.send(result)
    //    })
    const keyword = req.query.keyword
    const pageSize = parseInt(req.query.pageSize)
    const pageNo =  parseInt(req.query.pageNo)

    //count number of documents:
    const number = await Product.countDocuments({name: {$regex: '.*' + keyword + '.*'}});
    const skipNo = pageSize*(pageNo-1)

    // Product.find({name: {$regex: '.*' + keyword + '.*'}}, 
    // function(err, result){
    //     res.send(result)
    // })

    const result = await Product.find({name: {$regex: '.*' + keyword + '.*'}})
    .skip(skipNo).limit(pageSize)
    res.send({Size: number, Items: result})

})

router.get('/products', async function(req, res) {
    const agg = req.query.agg
    if(agg === 'min'){
        const result = await Product.aggregate(
            [
                {
                    $group: 
                    {   
                        _id: "",
                        price: { $min: "$price" },
                    } 
                }
            ]
        )
        res.send({Usercollection: result})
    } 
    if(agg === 'max'){
        const result = await Product.aggregate(
            [
                { 
                    $group: 
                    {   
                        _id: "",
                        price: { $max: "$price" },
                    } 
                }
            ]
        )
        res.send({Usercollection: result})
    } 
    if(agg === 'avg'){
        const result = await Product.aggregate(
            [
                { 
                    $group: 
                    {   
                        _id: "",
                        price: { $avg: "$price" },
                    } 
                }
            ]
        )
        res.send({Usercollection: result})
    }
    if(agg === 'sum') {
        const result = await Product.aggregate(
            [
                { 
                    $group: 
                    {   
                        _id: "",
                        price: { $sum: "$price" },
                    } 
                }
            ]
        )
        res.send({Usercollection: result})
    }
    if(agg === 'ascen') {
        const result = await Product.aggregate(
            [
                { $sort : { price : 1 } }
            ]
        )
        res.send({Usercollection: result})
    }
    if(agg === 'descen') {
        const result = await Product.aggregate(
            [
                { $sort : { price : -1 } }
            ]
        )
        res.send({Usercollection: result})
    }
})

module.exports = router