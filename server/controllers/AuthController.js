const { Admin } = require("../models/AdminSchema");
const bcrypt = require("bcryptjs");

const signup = async (req, res) => {
  const { Admin_name, email, password, creationkey } = req.body;
  const checkuser = await Admin.findOne({ Admin_name });
  const checkEmail = await Admin.findOne({ email });
  if (creationkey !== process.env.CREATEKEY) {
    return res.status(401).send("Wrong creation key access denied");
  }
  if (checkuser) {
    return res.status(401).send("username already exists");
  }
  if (checkEmail) {
    return res.status(401).send("email already exists");
  }
  const salt = await bcrypt.genSalt(Number(process.env.ENCRYPTKEY));
  const passencrypt = await bcrypt.hash(password, salt);

  const newUser = new Admin({
    Admin_name: Admin_name,
    email: email,
    password: passencrypt,
  });
  try {
    const user = await newUser.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(500).send("internal server error");
  }
};

const login = async (req, res) => {
  const { email, password, adminkey } = req.body;
  if (adminkey !== process.env.ADMINKEY) {
    return res.status(401).send({ message: "Invalid Admin Key" });
  }
  try {
    const admin = await Admin.findOne({ email: email });
    if (!admin) {
      return res.status(401).send({ message: "Invalid Email" });
    }
    const validpassword = await bcrypt.compare(password, admin.password);

    if (!validpassword) {
      return res.status(401).send({ message: "invalid password" });
    }
    const token = await admin.generateAuthToken();
    return res
      .status(200)
      .send({ data: token, message: "Logged in successfully" });
  } catch (error) {
    res.status(500).send({ message: "Internal Server Error" });
  }
};

module.exports = { login, signup };
