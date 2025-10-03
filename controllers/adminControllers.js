import Admin from "../models/admin.js";
import bcrypt from "bcrypt";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";

dotenv.config();

export async function createAdmins(req, res) {
  // Hash the password
  const hashedPassword = bcrypt.hashSync(req.body.password, 10);

  // Find the admin with the highest id
  const lastAdmin = await Admin.findOne().sort({ id: -1 });
  const newId = lastAdmin && lastAdmin.id ? lastAdmin.id + 1 : 1;

  // Check if adminname already exists
  const existingAdminname = await Admin.findOne({ adminname: req.body.adminname });
  if (existingAdminname) {
    return res.status(400).json({ message: "Adminname is already entered" });
  }

  // Check if email already exists
  const existingEmail = await Admin.findOne({ email: req.body.email });
  if (existingEmail) {
    return res.status(400).json({ message: "Email is already entered" });
  }

  // Check if full phone number already exists
  const existingNumber = await Admin.findOne({ number: req.body.number });
  if (existingNumber) {
    return res.status(400).json({ message: "Phone number is already entered" });
  }


  const admin = new Admin({
    id: newId,
    email: req.body.email,
    password: hashedPassword,
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    adminname: req.body.adminname,
    numbercode: req.body.numbercode,
    number: req.body.number,
    currency: req.body.currency,
    pincode: req.body.pincode,
  });

  admin
    .save()
    .then(() => {
      res.json({
        message: "Admin created successfully",
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: "Failed to create admin",
        error: err,
      });
    });
}

export async function getAdmins(req, res) {
  try {
    if (isAdmin(req)) {
      const admin = await Admin.find();
      res.json(admin);
    } else {
      res.json({
      message: "Your not authorized",
    });
    }
  } catch (err) {
    res.json({
      message: "Failed to retrieve admins",
      error: err,
    });
  }
}

export function loginAdmin(req, res) {
  const email = req.body.email;
  const password = req.body.password;

  Admin.findOne({ email: email }).then((admin) => {
    if (admin == null) {
      res.status(404).json({
        message: "Admin not found",
      });
    } else {
      const isPasswordCorrect = bcrypt.compareSync(password, admin.password);

      const token = jwt.sign(
        {
          email: admin.email,
          firstName: admin.firstName,
          lastName: admin.lastName,
          adminname: admin.adminname,
          numbercode: admin.numbercode,
          number: admin.number,
          currency: admin.currency,
          pincode: admin.pincode,
          role: admin.role,
          active: admin.active,
          exp: Math.floor(Date.now() / 1000) + 12 * 60 * 60, // Expire in 12 hours
        },
        process.env.JWT_KEY
      );

      if (isPasswordCorrect) {
        res.status(200).json({
          message: "Login successfull",
          token: token,
        });
      } else {
        res.status(404).json({
          message: "wrong password",
        });
      }
    }
  });
}

export async function deleteAdmins(req, res) {
  try {
    await Admin.deleteOne({ id: req.params.id });
    res.json({
      message: `Admin deleted successfully`,
    });
  } catch (err) {
    res.json({
      message: "Failed to delete admin",
      error: err,
    });
  }
}

export async function updateAdmins(req, res) {
  const adminId = req.params.id;
  const updateData = {};

  // Only include fields that are provided in req.body
  if (req.body.firstname) updateData.firstname = req.body.firstname;
  if (req.body.lastname) updateData.lastname = req.body.lastname;
  if (req.body.email) updateData.email = req.body.email;
  if (req.body.password)
    updateData.password = bcrypt.hashSync(req.body.password, 10);
  if (req.body.numbercode) updateData.numbercode = req.body.numbercode;
  if (req.body.number)
    updateData.number = req.body.numbercode + req.body.number;
  if (req.body.birthday) updateData.birthday = req.body.birthday;
  if (req.body.countrycode) updateData.countrycode = req.body.countrycode;
  if (req.body.currency) updateData.currency = req.body.currency;
  if (req.body.zipcode) updateData.zipcode = req.body.zipcode;
  if (req.body.nic) updateData.nic = req.body.nic;
  if (req.body.ballance) updateData.ballance = req.body.ballance;
  if (req.body.noncashballance)
    updateData.noncashballance = req.body.noncashballance;
  if (req.body.emailverified) updateData.emailverified = req.body.emailverified;
  if (req.body.numberverified)
    updateData.numberverified = req.body.numberverified;
  if (req.body.active) updateData.active = req.body.active;


  // Check duplicates only for fields being updated
  if (req.body.email) {
    const existingEmail = await Admin.findOne({
      email: req.body.email,
      id: { $ne: adminId },
    });
    if (existingEmail) {
      return res.status(400).json({ message: "Email is already entered" });
    }
  }

  if (req.body.number) {
    if (req.body.number.length !== 9) {
      return res.status(400).json({
        message: "Phone number should be 9 digits",
        data: req.body.number,
      });
    }
    const existingNumber = await Admin.findOne({
      number: req.body.number,
      id: { $ne: adminId },
    });
    if (existingNumber) {
      return res
        .status(400)
        .json({ message: "Phone number is already entered" });
    }
  }

  if (req.body.nic) {
    const existingNic = await Admin.findOne({
      nic: req.body.nic,
      id: { $ne: adminId },
    });
    if (existingNic) {
      return res.status(400).json({ message: "NIC is already entered" });
    }
  }

  try {
    const result = await Admin.updateOne({ id: adminId }, { $set: updateData });
    if (result.matchedCount === 0) {
      return res.status(404).json({ message: "Admin not found" });
    }
    res.json({ message: "Admin updated successfully" });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Internal server error", error: err.message });
  }
}

export function checkAdmin(req, res) {
  if (isAdmin(req)) {
    res.status(200).json({
      message: "Your Admin",
      role: "admin",
    });
  } else {
    res.status(200).json({
      message: "Your Not Admin",
    });
  }
}

export function isAdmin(req) {
  if (req.admin == null) {
    return false;
  }
  if (req.admin.role != "admin") {
    return false;
  }
  return true;
}
