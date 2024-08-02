import { useEffect, useState } from "react";

const useGetCoffee = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCoffee = async () => {
      setLoading(true);
      try {
        const res = await fetch("http://localhost:3000/coffee");
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
  }, []);

  return { loading, data, error };
};
export default useGetCoffee;
