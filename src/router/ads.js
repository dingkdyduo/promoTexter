const express = require('express')
const router = express.Router()
const {insertAd, getAds,updateAd,deleteAd,findAd} = require('../db/ads');


router.get('/', (req, res) => {
   res.send('Birds home page')
 })

router.post('/insertAds', async (req, res) => {
    let title = req.body.title
    let description = req.body.description
    let isExist = await  findAd(title)
    if(isExist.length==0){
         await insertAd({"title": title,
                     "description":description,
                     "status": "active"});
        res.status(200).json({message: "Successfully added","ad" : title})
    } else {
        res.status(408).json({message: "alreaty exist","title" : title})
    }
       
    
 });
 
 
 router.put('/updateAds/:title', async (req, res) => {
     
      let update = {}
      if( req.body.description){
          update.description = req.body.description
      }
      if(req.body.status){
         update.status = req.body.status
      }
     console.log(update)
      let query = {"title":req.params.title}
      let result =  await updateAd(query,update);
      res.status(200).json({message: result})
   });
 
 router.delete('/deleteAds/:title', async (req, res) => {
     
     let update = {
        description : req.body.description,
        status : req.body.status
     }
     let query = {"title":req.params.title}
     console.log(query)
     let result =  await deleteAd(query,update);
     res.status(200).json({message: result})
  });

module.exports = router