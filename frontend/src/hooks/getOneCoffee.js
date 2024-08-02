import { useEffect, useState } from "react";
import useSelectCoffee from "../components/zustandStore/selectedCoffee";

const useGetOneCoffee = () => {
  const { selectedCoffee } = useSelectCoffee();
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCoffee = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `http://localhost:3000/coffee/${selectedCoffee}`
        );
        if (!res.ok) {
          throw new Error("Network response was not ok");
        }
        const result = await res.json();
        setData(result);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCoffee();
  }, [selectedCoffee]);

  return { loading, data, error };
};
export default useGetOneCoffee;
