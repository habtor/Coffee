import mongoose from "mongoose";

const coffeeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: true },
  description: { type: String, required: true },
  rating: { type: Number, required: true },
  numReviews: { type: Number, required: true },
  price: { type: Number, required: true },
  countInStock: { type: Number, required: true },
});

const Coffee = mongoose.model("Coffee", coffeeSchema);

export default Coffee;
