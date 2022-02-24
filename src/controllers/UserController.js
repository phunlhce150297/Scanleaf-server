const User = require("../models/Users");
const CryptoJS = require("crypto-js");

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
  async login(req, res) {
    const { email, password } = req.body;
    try {
      const user = await User.findOne({ email });
      !user && res.status(401).json("Wrong email or password");

      const bytes = CryptoJS.AES.decrypt(user.password, "Scanleaf");
      const originalPassword = bytes.toString(CryptoJS.enc.Utf8);

      originalPassword !== password &&
        res.status(401).json("Wrong email or password");

      res.status(200).json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  /**
   * REGISTER
   */
  async register(req, res) {
    const { fullname, email, password, isAdmin } = req.body;
    const newUser = new User({
      fullname,
      email,
      password: CryptoJS.AES.encrypt(password, "Scanleaf").toString(),
      isAdmin,
    });
    try {
      const user = await newUser.save();
      res.status(201).json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

module.exports = new UserController();
