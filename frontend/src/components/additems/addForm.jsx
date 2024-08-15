import { useState } from "react";
import useCreateCoffee from "../../hooks/createCoffee";

function AddForm() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [count, setCount] = useState("");
  const [description, setDescription] = useState("");

  const { createCoffee, loading } = useCreateCoffee();

  const handleSubmit = async (e) => {
    e.preventDefault();
   
    const success = await createCoffee(name, price, image, count, description);
    if (success) {
      setName("");
      setPrice("");
      setImage("");
      setCount("");
      setDescription("");
    }
  };

  if (loading) return <h1>Loading...</h1>;

  return (
    <div className="bg-cardColor rounded-lg flex sm:flex-row flex-col justify-between items-center z-10 mx-auto">
      <div
        className="w-full h-96 sm:h-full bg-cover bg-center sm:rounded-l-lg rounded-t-lg sm:rounded-tr-none"
        style={{
          backgroundImage: `url(https://media01.stockfood.com/largepreviews/MzAzNTYwNjg=/00979228-Coffee-beans-in-a-jute-sack.jpg)`,
        }}
      ></div>
      <form action="" className="p-10 h-full w-full" onSubmit={handleSubmit}>
        <label htmlFor="name">Product name</label>
        <input
          id="name"
          value={name}
          type="text"
          placeholder="Name"
          className="w-full h-8 bg-sectionColor rounded-lg p-2 mb-2"
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="price">Price</label>
        <input
          id="price"
          value={price}
          type="number"
          placeholder="Price"
          step="0.01"
          className="w-full h-8 bg-sectionColor rounded-lg p-2 mb-2"
          onChange={(e) => setPrice(e.target.value)}
        />
        <label htmlFor="image">Image URL</label>
        <input
          id="image"
          value={image}
          type="text"
          placeholder="URL"
          className="w-full h-8 bg-sectionColor rounded-lg p-2 mb-2"
          onChange={(e) => setImage(e.target.value)}
        />
        <label htmlFor="count">Count</label>
        <input
          id="count"
          value={count}
          type="number"
          placeholder="Item count"
          className="w-full h-8 bg-sectionColor rounded-lg p-2 mb-2"
          onChange={(e) => setCount(e.target.value)}
        />
        <label htmlFor="description">Description</label>
        <textarea
          id="description"
          value={description}
          name="description"
          placeholder="Description"
          className="w-full h-20 bg-sectionColor rounded-lg p-2 mb-2"
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
        <button
          type="submit"
          value="Submit"
          className="w-full h-8 bg-btnColor rounded-lg font-extrabold hover:bg-opacity-70 hover:text-coffeeColor"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddForm;
