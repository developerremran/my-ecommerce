import UseProductsGet from "./UseProductsGet";

const CategoryData = () => {

    const [products, refetch, isLoading] = UseProductsGet();

    const productCategory = products.filter(user => user.productCategory === 'T-shirt')
    const productCategory1 = products.filter(user => user.productCategory === 'Mens')
    const productCategory2 = products.filter(user => user.productCategory === 'Women')


    return [productCategory,productCategory1,productCategory2];
  
};

export default CategoryData;