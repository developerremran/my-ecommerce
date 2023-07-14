
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { cartAdded } from '../../API/Auth';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../AuthProvider/AuthProvider';
// import CategoryData from '../../API/CategoryData';

const SingleDetailsPage = (products) => {

  const [itemValue, setItemValue] = useState(0)
const {user}= useContext(AuthContext)
const email =user.email
  const [product, setProduct] = useState(null);
  // const [userCategory] = CategoryData()
  // console.log(userCategory.length);
  const { id } = useParams();
  useEffect(() => {
    fetch(`http://localhost:5000/product/${id}`)
      .then(res => res.json())
      .then(data => {
        console.log(data);
        setProduct(data[0])
      })
  }, [id])

  if (!product) {
    return <p>Loading...</p>;
  }

const quantity = parseInt(itemValue);
  // console.log(quantity);


  const { productName, productPrice, productCategory, productTags, productDescription, image, _id } = product;

const totalPrice = parseInt(productPrice * quantity)

  const valueUp = () => {
    setItemValue(itemValue + 1);
  }

  const valueDown = () => {
    if (itemValue > 0) {
      setItemValue(itemValue - 1);
    }
  }
  


  const productAdd = (product) => {
    const { productName, productPrice, productCategory,_id} = product;
    const productDetails = { productName, productPrice, productCategory, quantity,totalPrice,email }
    console.log(productDetails);

    cartAdded(_id,productDetails)
      .then(data => {
        console.log(data);
        if (data.insertedId) {
          toast.success('Product Add Success')
        }
      })

  }


  return (
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="lg:w-4/5 mx-auto flex flex-wrap">
            <img
              alt="ecommerce"
              className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded"
              src={image}
            />
            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
              <h2 className="text-sm title-font text-gray-500 tracking-widest">
                {productCategory}
              </h2>
              <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                {productName}

              </h1>
              <div className="flex mb-4">
                <span className="flex items-center">
                  {/* Four star SVG icons */}
                </span>
                <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2">
                  {/* Three SVG icons */}
                </span>
              </div>
              <p className="leading-relaxed">
                {productDescription}
              </p>
              <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                <div className="flex">
                  <span onClick={valueDown} className='p-2 border'>-</span>
                  <span className='p-2 border'>{itemValue}</span>
                  <span onClick={valueUp} className='p-2 border'>+</span>


                </div>
                <div className="flex ml-6 items-center">
                  {/* Size selection dropdown */}
                </div>
              </div>
              <div className="flex">
                <span className="title-font font-medium text-2xl text-gray-900">
                  Price : $ {productPrice}
                </span>
                <button onClick={() => productAdd(product)} className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">
                  Add To Cart
                </button>
                {/* Missing part of the code, please provide the rest */}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SingleDetailsPage;

