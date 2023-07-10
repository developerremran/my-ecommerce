
import { productDelete } from "../../../API/Auth";
import UseProductsGet from "../../../API/UseProductsGet";
import { Link } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { toast } from "react-hot-toast";

const MyProduct = () => {
  const { user,setLoading,loading } = useContext(AuthContext);

  const [products, refetch, isLoading] = UseProductsGet();
  const [myProductData, setMyProductData] = useState([]);

  const url = `${import.meta.env.VITE_lOCAL_Server}/products?email=${user?.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMyProductData(data);
      });
  }, []);

  const deleteProduct = (_id) => {
    productDelete(_id)
      .then((data) => {
        console.log(data);
  
        toast.success("Deleted Success");
        setLoading(false )
      }); 
     
  };

  return (
    <div>
      <div className="overflow-x-auto">
        <table className="table shadow-2xl bg-slate-300">
          <thead>
            <tr>
              <th></th>
              <th>Product Name</th>
              <th>Price</th>
              <th>Category</th>
              <th>Total Sale</th>
              <th className="flex justify-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {myProductData.map((product, index) => (
              <tr key={product._id} className="bg-base-200">
                <th>{index + 1}</th>
                <td>{product.productName}</td>
                <td>{product.productPrice}</td>
                <td>{product.productCategory}</td>
                <td>343 items</td>
                <td>
                  <div className="flex justify-center">
                    <button
                      onClick={() => deleteProduct(product._id)}
                      className="btn bg-[red] stn-sm text-white hover:text-black"
                    >
                      Delete
                    </button>
                    <Link>
                      <button className="btn bg-[green] stn-sm text-white hover:text-black">
                        Update
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

export default MyProduct;
