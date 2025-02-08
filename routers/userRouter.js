const express = require('express');
const Model=require('../Models/UserModel')
require('dotenv').config();
const jwt= require('jsonwebtoken')


const router = express.Router();

router.post('/add',(req, res)=>{
    console.log(req.body)
    new Model(req.body).save()
    .then((result)=>{
        res.status(200).json(result);

    }).catch((err)=>{
        console.log(err);
        if(err?.code==11000){
            res.status(500).json({message:'Email already registered'});
        }
        else{
            res.status(500).json({message:'internal server error'});
        }
        
       
    });
});
//: denotes url parameter
router.get('/getbycity/:city',(req, res) =>{
    Model.find({city:req.params.city})
        .then((result)=>{
            res.status(200).json(result);

        }).catch((err)=>{
            res.status(500).json(err);
        });
})

router.get('/getbyid/:id',(req, res)=>{
    Model.findById(req.params.id)
    .then((result) => {
        res.status(200).json(result); 
    }).catch((err) => {
        res.status(500).json(err); 
    });

})

router.get('/getall',(req, res)=>{
    
    Model.find()
    .then((result) => {
        res.status(200).json(result); 
    }).catch((err) => {
        res.status(500).json(err); 
    });
 

})

router.delete('/delete/:id',(req, res)=>{
    Model.findByIdAndDelete(req.params.id)
    .then((result) => {
        res.status(200).json(result); 
    }).catch((err) => {
        res.status(500).json(err); 
    });
})
router.put('/update/:id',(req, res)=>{
    Model.findByIdAndUpdate(req.params.id ,req.body,{new:true})
    .then((result) => {
        res.status(200).json(result); 
    }).catch((err) => {
        console.log(err)
        res.status(500).json(err); 
    });
})

router.post('/authenticate', (req, res) => {
    Model.findOne(req.body)
        .then((result) => {
            if (result) {
                console.log(result)
                //email and password matched
                //generate token
                const { _id, email, password, name } = result
                const payload = { _id, email, password, name }
                jwt.sign(
                    payload,
                    process.env.JWT_SECRET,
                    { expiresIn: '6h' },
                    (err, token) => {
                        if (err) {
                            res.status(500).json(err)
                            console.log(err)
                        }
                        else {
                            res.status(200).json({ token, name, email: email })

                        }
                    }
                )
            }
            else {
                res.status(401).json({ message: 'Invalid email or password' });
            }
        }).catch((err) => {
            console.log(err);
            res.status(500).json({ err });
        });
})

module.exports = router;