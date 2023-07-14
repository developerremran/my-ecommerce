import { toast } from "react-hot-toast";
import { delteOne } from "../../../API/Auth";
import UseCartAddedProduct from "../../../API/UseCartAddedProduct";


const MyProduct = () => {

  const [cartAddedData, refetch, isLoading]=UseCartAddedProduct();

  console.log(cartAddedData);

  const deleteCart=(_id)=>{
    delteOne(_id)
    .then(data => {
      console.log(data)
      if(data.deletedCount > 0){
        refetch()
        toast.success('success deleted item')
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
                        <th>Price</th>
                        <th>Category</th>
                        <th>Quantity</th>
                        <th>Total Price</th>
                        <th className="flex justify-center">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {cartAddedData.map((product, index) => (
                        <tr key={product._id} className="bg-base-200">
                            <th>{index + 1}</th>
                            <td>{product.productName}</td>
                            <td>$ {product.productPrice}</td>
                            <td>{product.productCategory}</td>
                            <td>{product.quantity}</td>
                            <td> $ {product.totalPrice}</td>
                           
                           <td className="flex justify-center"><button onClick={()=> deleteCart(product._id)} className="btn bg-red-500 text-white ">Delete</button></td>
                           
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
  );
};

export default MyProduct;