import { Link } from 'react-router-dom';
import ManageUserGet from '../../../API/ManageUserGet';
import { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import { toast } from 'react-hot-toast';
import { userDelete } from '../../../API/Auth';

const AllManageUser = () => {
    const [newUserss, refetch, isLoading] = ManageUserGet()
    const { user } = useContext(AuthContext)
    console.log(user);


    console.log(newUserss);
    const handleMakeAdmin = user => {
        // console.log(email);
        fetch(`${import.meta.env.VITE_lOCAL_Server}/users/admin/${user?._id}`, {
            method: 'PATCH'
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount) {
                    refetch()
                    toast.success(`${user.name} is an admin now`)
                }
            })
    }

    const deleteeduser = (_id) => {
        userDelete(_id)
        .then(data => {
            console.log(data)
            if(data.deletedCount > 0){
                refetch()
                alert('delete')
            }
        })
    }


    return (

        <div className="overflow-x-auto">
            <table className="table shadow-2xl bg-slate-300">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>

                        <th className="flex justify-center">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {newUserss.map((user, index) => (
                        <tr key={user._id} className="bg-base-200">
                            <th>{index + 1}</th>
                            <td>{user.name}</td>
                            <td>{user.email}</td>

                            <td>
                                <div className="flex justify-center">
                                    <span onClick={() => handleMakeAdmin(user)} className="btnstyle cursor-pointer">
                                        {
                                            user.role === 'admin' ? 'admin' : <>Make Admin</>
                                        }
                                    </span>
                                    <Link>
                                        <button onClick={() => deleteeduser(user._id)} className="btn bg-[green] stn-sm text-white hover:text-black">
                                            Delete
                                        </button>
                                    </Link>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>

    );
};

export default AllManageUser;
