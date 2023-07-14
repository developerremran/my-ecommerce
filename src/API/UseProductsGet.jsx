import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import axios from "axios";

const UseProductsGet = () => {
  const { loading } = useContext(AuthContext);
  const { data: products = [], refetch, isLoading } = useQuery({

    queryKey: ["products"], // Include search in the queryKey
    enabled: !loading,
    queryFn: async () => {
      const res = await axios.get(`${import.meta.env.VITE_lOCAL_Server}/products`);
      const data = res.data;
      // console.log(data);
      return data;
    },
  });

  return [products, refetch, isLoading];
};

export default UseProductsGet;