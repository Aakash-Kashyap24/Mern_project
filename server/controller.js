import Model from "./model.js";

export const getProduct = async (req, res, next) => {
  try {
    const users = await Model.find();

    res.json({
      users: users,
    });
  } catch (error) {
    next(error);
  }
};



export const createProduct = async (req, res) => {
  try {
    const {name, email, gender, status,id } = req.body;
// console.log(name, email, gender, status)
    // Update data in the model
    const model=await Model.create({ number:id,name, email, gender, status });

    res.status(200).json({ message: "Data Created successfully",user:model });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};




export const updateProduct = async (req, res) => {
  try {
    const { name, email, gender, status } = req.body;

    const user=await Model.findOne({email});
    if (!user) {
       return res.json({
           message: "user not exists"
        })
    }

    user.name = name||user.name;
    user.email = email||user.email;
    user.gender= gender||user.gender;
    user.status= status||user.status;

    // Update data in the model
    await user.save()

    res.status(200).json({ message: "Data updated successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};


