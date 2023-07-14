import { Link } from "react-router-dom";
import UseProductsGet from "../../../API/UseProductsGet";
import { deleteItem } from "../../../API/Auth";
import { toast } from "react-hot-toast";

 

const ManageAllProduct = () => {

   const [products, refetch, isLoading]=UseProductsGet()

    const deleteedItemP=(_id)=>{
         deleteItem(_id)
         .then(data => {
            if(data.deletedCount > 0){
                refetch()
                toast.success('Product Delete Success')
            }
         })
    }
    return (
        <div>
              <div className="overflow-x-auto">
            <table className="table shadow-2xl bg-slate-300">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Category</th>

                        <th className="flex justify-center">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((user, index) => (
                        <tr key={user._id} className="bg-base-200">
                            <th>{index + 1}</th>
                            <td>{user.productName}</td>
                            <td>{user.email}</td>
                            <td>{user.productCategory}</td>

                            <td>
                                <div className="flex justify-center">
                                 
                                    <Link>
                                        <button onClick={() => deleteedItemP(user._id)} className="btn bg-[green] stn-sm text-white hover:text-black">
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
        </div>
    );
};

export default ManageAllProduct;