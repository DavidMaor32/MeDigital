import express from 'express';
const router = express.Router();





router.get('/dashboard',async(req,res)=>{

    //API
    // return req.statusCode(200).json({
    //     message:'Hi'
    // });
    //HTML
    res.render('index',{

    })
});






export default router;