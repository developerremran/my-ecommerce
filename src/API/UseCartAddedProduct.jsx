import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import axios from "axios";

// http://localhost:5000/cartData?email=emranhossain5640@gmail.com
const UseCartAddedProduct = () => {
  const { user,loading } = useContext(AuthContext);
  const { data: cartAddedData = [], refetch, isLoading } = useQuery({

    queryKey: ["cartData",user?.email], // Include search in the queryKey
    enabled: !loading,
    queryFn: async () => {
      const res = await axios.get(`${import.meta.env.VITE_lOCAL_Server}/cartData?email=${user.email}`);
      const data = res.data;
      console.log(data);
      return data;
    },
  });

  return [cartAddedData, refetch, isLoading];
};

export default UseCartAddedProduct;
