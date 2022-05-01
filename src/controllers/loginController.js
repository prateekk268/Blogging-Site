
// POST /login ---API Code
const jwt = require("jsonwebtoken");
const authorModel = require("../models/authorModel");
const blogModel = require("../models/blogModel");

const loginUser = async function (req, res) {
     try {
      let email = req.body.email;
      let password = req.body.password

      
        let user = await authorModel.findOne({ email: email , password: password });
        if (!user)
          return res.status(400).send({
            msg: "username or the password is not corerct",
          });

        
     
        let token = jwt.sign(
          {
            userId: user._id.toString(),
            batch: "uranium",
            organisation: "FUnctionUp",
          },
          "functionup-uranium"
        );
        console.log(token);
        res.status(200).send({ status: true, msg : token });
      }
    
    
    catch (err) {
      console.log("This is the error :", err.message)
      res.status(500).send({ msg: "Error", error: err.message })
    };
  }














  module.exports.loginUser = loginUser