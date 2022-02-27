const User = require("../models/Users");
const CryptoJS = require("crypto-js");
const expressAsyncHandler = require("express-async-handler");

class UserController {
  /**
   * GET ALL USER
   */
  getAllUser(req, res, next) {
    User.find({})
      .then((data) => res.json(data))
      .catch(next);
  }

  /**
   * LOGIN BY EMAIL
   */
  login = expressAsyncHandler(async (req, res) => {
    const { email, password } = req.body;
    try {
      const user = await User.findOne({ email });
      !user &&
        res.status(401).send({ message: "Wrong email, please check again!!" }); //401 is not authorized

      const bytes = CryptoJS.AES.decrypt(user.password, "Scanleaf");
      const originalPassword = bytes.toString(CryptoJS.enc.Utf8);

      originalPassword !== password &&
        res
          .status(401)
          .send({ message: "Wrong password, please check again!!" }); //401 is not authorized

      res.status(200).json(user); //200 is success
    } catch (error) {
      res.status(500).json(error); //500 is server error
    }
  });

  /**
   * REGISTER
   */
  register = async (req, res) => {
    const { fullname, email, password, isAdmin } = req.body;

    try {
      const userExist = await User.findOne({ email });
      if (userExist !== null) {
        res.status(400).send({ message: "Email does exists." });
      }

      const newUser = new User({
        fullname,
        email,
        password: CryptoJS.AES.encrypt(password, "Scanleaf").toString(),
        isAdmin,
      });

      const user = await newUser.save();
      res.status(201).json(user); //201 is created
      return;
    } catch (error) {
      res.status(500).json(error); //500 is server error
      return;
    }
  };
}

module.exports = new UserController();
