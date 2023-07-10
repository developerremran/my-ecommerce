// import { useContext, useEffect, useState } from "react";
// import { useForm } from "react-hook-form";
// import { AuthContext } from "../../../AuthProvider/AuthProvider";
// import { useLoaderData, useParams } from "react-router-dom";



// const UpdateProduct = () => {
//     const { user } = useContext(AuthContext)

//     const [productData, setProductData] = useState()
 
//     const { product } = useParams();

//     console.log(product);

//     useEffect(() => {
//         fetch(`${import.meta.env.VITE_lOCAL_Server}/product/${id}`)
//             .then(res => res.json())
//             .then(data => {
//                 console.log(data);
//                 setProductData(data)
//             })
//     }, [id])

//     if (!productData) {
//         return <p>Loading...</p>;
//     }

//     // const {productName,productPrice,productCategory,productTags,productDescription,image}= update;

//     const {
//         register,
//         handleSubmit,
//         formState: { errors },
//     } = useForm();

//     const onSubmit = (data) => {
//         console.log(data);
//     }

//     return (
//         <div>

//             <div>
//                 <div className="container px-5 py-24 mx-auto flex">
//                     <div className="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col w-full mt-10 md:mt-0 relative z-10 shadow-md">
//                         <h2 className="text-gray-900 text-3xl py-5 text-center mb-1 font-medium title-font">Add Your Own Product</h2>

//                         <form onSubmit={handleSubmit(onSubmit)}>
//                             <div className="relative mb-4">
//                                 <label className="leading-7 text-sm text-gray-600"> Email</label>
//                                 <input {...register('UserEmail')} type="text" defaultValue={user?.email} name="userEmail" className="w-full inputStyle" readOnly />

//                                 <label className="leading-7 text-sm text-gray-600">Product Name</label>
//                                 <input {...register('productName')} type="text" name="productName" className="w-full inputStyle" />

//                                 <label className="leading-7 text-sm text-gray-600">Product Price</label>
//                                 <input {...register('productPrice')} type="number" name="productPrice" className="w-full inputStyle" />

//                                 <label className="leading-7 text-sm text-gray-600">Product Category</label>
//                                 <input {...register('productCategory')} type="text" name="productCategory" className="w-full inputStyle" />

//                                 <label className="leading-7 text-sm text-gray-600">Product Tags</label>
//                                 <input {...register('productTags')} type="text" name="productTags" className="w-full inputStyle" />

//                                 <label htmlFor="imageUpload">Upload Images:</label>
//                                 <input
//                                     {...register('image')}
//                                     className="w-full inputStyle"
//                                     type="file"
//                                     name="image"
//                                 />
//                             </div>
//                             <div className="relative mb-4">
//                                 <label htmlFor="message" className="leading-7 text-sm text-gray-600">Product Description</label>
//                                 <textarea
//                                     {...register('productDescription')}
//                                     name="productDescription"
//                                     className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
//                                 ></textarea>
//                             </div>

//                             <button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg" type="submit">
//                                 Submit
//                             </button>

//                         </form>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default UpdateProduct;