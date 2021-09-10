const express = require('express')
const router = express.Router()
const User = require('../models/user.js')

router.get('/', function(req, res){
    User.find({}, function(err, users) {
        res.send(users)
    })
})

router.post('/', function(req, res){
    User.create(req.body, function(err, user) {
        res.send(user)
    })
})

router.get('/statistic', async function(req, res) {
    const agg = req.query.agg
    if(agg === 'min'){
        const result = await User.aggregate(
            [
                { 
                    $group: 
                    {   
                        _id: "",
                        age: { $min: "$age" },
                    } 
                }
            ]
        )
        res.send({Usercollection: result})
    } 
    if(agg === 'max'){
        const result = await User.aggregate(
            [
                { 
                    $group: 
                    {   
                        _id: "",
                        age: { $max: "$age" },
                    } 
                }
            ]
        )
        res.send({Usercollection: result})
    } 
    if(agg === 'avg'){
        const result = await User.aggregate(
            [
                { 
                    $group: 
                    {   
                        _id: "",
                        age: { $avg: "$age" },
                    } 
                }
            ]
        )
        res.send({Usercollection: result})
    } 
})

router.post("/register", async (req, res) => {

    // Our register logic starts here
    try {
      // Get user input
      const { first_name, last_name, email, password } = req.body;
  
      // Validate user input
      if (!(email && password && first_name && last_name)) {
        res.status(400).send("All input is required");
      }
  
      const oldUser = await User.findOne({ email });
  
      if (oldUser) {
        return res.status(409).send("User Already Exist. Please Login");
      }

      encryptedPassword = await bcrypt.hash(password, 10);
  
      const user = await User.create({
        first_name,
        last_name,
        email: email.toLowerCase(), 
        password: encryptedPassword,
        IP: req.connection.remoteAddress,
      });
  
      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.TOKEN_KEY,
        {
          expiresIn: "2h",
        }
      );

      user.token = token;
  
      res.status(201).json(user);
    } catch (err) {
      console.log(err);
    }
});

router.post("/login", async (req, res) => {

  try {
    const { email, password } = req.body;

    if (!(email && password)) {
      res.status(400).send("All input is required")
    }
    const user = await User.findOne({ email })

    if (user && (await bcrypt.compare(password, user.password))) {
      const token = jwt.sign(
        { user_id: user._id, email },
        process.env.TOKEN_KEY,
        {
          expiresIn: "2h",
        }
      )

      user.token = token;

      res.status(200).json(user);
    }
    res.status(400).send("Invalid Credentials");
  } catch (err) {
    console.log(err);
  }
});

module.exports = router