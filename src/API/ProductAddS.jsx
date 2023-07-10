

const ProductAddS = (dataProducts) => {

 

    return fetch(`${import.meta.env.VITE_lOCAL_Server}/productUpload`, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(dataProducts)
    }).then(res=> res.json())

};

export default ProductAddS;