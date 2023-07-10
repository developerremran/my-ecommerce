import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { UseAxiosSecure } from "./UseAxiosSecure";
import { useQuery } from "@tanstack/react-query";

export const AdminVerify = () => {
 
    const {user, loading} = useContext(AuthContext);
    const [axiosSecure] = UseAxiosSecure();

    const {data: isAdmin, isLoading: isAdminLoading} = useQuery({
        queryKey: ['isAdmin', user?.email],
        enabled:!loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/admin/${user?.email}`);
            console.log('is admin response', res)
            return res.data.admin;
        }
    })
    return [isAdmin,isAdminLoading]
};
