import { useState } from "react";
import toast from "react-hot-toast";

const useCreateCoffee = () => {
  const [loading, setLoading] = useState(false);

  const createCoffee = async (name, price, image, count, description) => {
    const success = handleInputErrors({
      name,
      price,
      image,
      count,
      description,
    });

    if (!success) return;

    setLoading(true);
    try {
      const res = await fetch(`http://localhost:3000/coffee`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          price,
          image,
          count,
          description,
        }),
      });

      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }

      toast.success("Item created successfully");
      return true;
    } catch (error) {
      toast.error(error.message);
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { loading, createCoffee };
};

export default useCreateCoffee;

function handleInputErrors({ name, price, image, count, description }) {
  if (!name || !description || !price || !image || !count) {
    toast.error("Please fill in all the fields");
    return false;
  }
  return true;
}
