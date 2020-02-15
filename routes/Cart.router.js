const router = require(`express`).Router();

const Cart = require(`../models/Cart`);

router.post(`/add`, async(req, res)=>{
    try{
     const {title, content, price}=req.body;
     console.log(title,content, price)
     const newCart = new Cart({
         title,
         content,
         price
     })
     await newCart.save()
     res.status(201).json({newCart})
     res.status(201).json({massage:`Cart add...`})

    }catch(err){
     res.status(500).json({massage:`Error on method add...`})
     }
})

router.get(`/`, async(req, res)=>{
    try{
        const Carts = await Cart.find();
        res.json(Carts);
    }catch(err){
        res.status(500).json({massage:`Error on get method`})

    }
})

module.exports = router;
