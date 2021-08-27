const router = require("express").Router();
const User = require("../User");
router.post("/", async (req, res)=>{
    const response = await new User({
        name:req.body.name,
        age: req.body.age,
        city: req.body.city,
        country: req.body.country,
    }).save();
    res.status(200).send("Data inserted");
});

module.exports = router;