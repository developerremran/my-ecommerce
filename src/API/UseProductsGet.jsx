import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

const UseProductsGet = () => {
  const { loading } = useContext(AuthContext);
  const { data: products = [], refetch, isLoading } = useQuery({
    queryKey: ["products"], // Include search in the queryKey
    enabled: !loading,
    queryFn: async () => {
      const res = await fetch(
        `${import.meta.env.VITE_lOCAL_Server}/products`);
      const data = await res.json();
      return data;
    },
  });

  return [products, refetch, isLoading];
};

export default UseProductsGet;