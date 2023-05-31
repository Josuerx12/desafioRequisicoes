import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState();

  useEffect(() => {
    api();
  }, [url]);
  const api = async () => {
    try {
      setLoading(true);
      const res = await fetch(url);
      const json = res.json();

      setData(json);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  return { data, loading };
};
