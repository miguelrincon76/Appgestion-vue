import User from "../models/User";
import jwt from "jsonwebtoken";
import config from "../config";
import Role from "../models/Role";

export const signUp = async (req, res) => {
  try {
    // obtener el cuerpo de la peticion
    const { username, email, password, roles } = req.body;
    //crear un nuevo Objeto usuario
    const newUser = new User({
      username,
      email,
      password: await User.encryptPassword(password),
    });
    //verificar roles
    if (roles) {
      const foundRoles = await Role.find({ name: { $in: roles } });
      newUser.roles = foundRoles.map((role) => role._id);
    } else {
      const role = await Role.findOne({ name: "user" });
      newUser.roles = [role._id];
    }
    //grabando el objeto Usur en mongodb
    const savedUser = await newUser.save();
    console.log(savedUser);
    //Crear un token
    const token = jwt.sign({ id: savedUser._id }, config.SECRET, {
      expiresIn: 86400, // 24 hours
    });

    return res.status(200).json({ token });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
  }
};
export const signIn = async (req, res) => {
  try {
    //requerir cuerpo email (puede ser email o nombre usuario)
    const userFound = await User.findOne({ email: req.body.email }).populate(
      "roles"
    );

    if (!userFound)
      return res.status(400).json({ message: "Usuario no encontrado" });

    const matchPassword = await User.comparePassword(
      req.body.password,
      userFound.password
    );

    if (!matchPassword)
      return res.status(401).json({
        token: null,
        message: "Contraseña incorrecta",
      });

    //console.log(userFound);

    const token = jwt.sign({ id: userFound._id }, config.SECRET, {
      expiresIn: 86400, //24 horas
    });

    res.json({ token });
  } catch (error) {
    console.log(error);
  }
};
