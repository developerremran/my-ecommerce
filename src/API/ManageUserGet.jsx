import { useQuery } from "@tanstack/react-query";
import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { UseAxiosSecure } from "./UseAxiosSecure";


const ManageUserGet = () => {
  const { loading } = useContext(AuthContext);
  const [axiosSecure]=UseAxiosSecure()
  const { data: newUserss = [], refetch, isLoading } = useQuery({
    queryKey: ["newUserss", ], // Include search in the queryKey
    enabled: !loading,
    queryFn: async () => {
      const res = await axiosSecure.get(
        `${import.meta.env.VITE_lOCAL_Server}/users`);
        return res.data;                                 
    },
  });

  return [newUserss, refetch, isLoading];
};

export default ManageUserGet;