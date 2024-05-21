import Coffee from "../models/coffee.js";

export const getAllCoffees = async (req, res) => {
  try {
    const coffees = await Coffee.find();
    res.status(200).json(coffees);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const getCoffeeById = async (req, res) => {
  try {
    const coffee = await Coffee.findById(req.params.id);
    res.status(200).json(coffee);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

export const createCoffee = async (req, res) => {
  const coffee = req.body;
  const newCoffee = new Coffee(coffee);

  try {
    await newCoffee.save();
    res.status(201).json(newCoffee);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};
