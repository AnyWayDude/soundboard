import { useState, useEffect } from "react";
import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000";

const useGetCollection = <T>(url: string) => {
  const [fetchedData, setFetchedData] = useState<T[]>([]);
  const [loading, setLoading] = useState(true);

  async function fetchData() {
    try {
      const response = await axios.get(url);
      setFetchedData(response.data);
      setLoading(false);
    } catch (error) {
      console.error(`Error fetching data from ${url}:`, error);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchData();
  }, [url]);

  const refetch = () => {
    setLoading(true);
    fetchData();
  };

  return { loading, data: fetchedData, refetch };
};

export default useGetCollection;
