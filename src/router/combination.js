const express = require('express')
const router = express.Router()
const { Combination} =  require('@math-x-ts/generix')

const keypad={
              "1":"",
              "2":"abc",
              "3":"def",
              "4":"ghi",
              "5":"jkl",
              "6":"mno",
              "7":"pqrs",
              "8":"tuv",
              "9":"wxyz"
            }

router.get('/:input', (req, res) => {
    let input = req.params.input
    let letters = []
    
    for(i=0;i<input.length;i++){
        let keys = keypad[input[i]]
        for(x=0;x<keys.length;x++){
            letters.push(keys[x])
        }
       
    }
    let combiNumber = input.includes("1") ? input.length-1 : input.length
    let result =  Combination.withoutRepetition(letters,combiNumber);
    res.status(200).json({result})
 })

module.exports = router