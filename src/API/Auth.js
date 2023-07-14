import axios from "axios"

export const newUserR = (userInfo) => {
    // axios.post(`${import.meta.env.VITE_lOCAL_Server}/newUsers,`,{userInfo})
    axios.post('http://localhost:5000/newUsers', { userInfo })
        .then(data => {
            console.log(data);
        })
}

export const productDelete = (_id) => {
    return fetch(`${import.meta.env.VITE_lOCAL_Server}/productUpload/${_id}`, {
        method: 'DELETE'
    }).then(res => res.json())
}


// user delete 

export const userDelete = (_id) => {
    return fetch(`${import.meta.env.VITE_lOCAL_Server}/users/delete/${_id}`, {
        method: 'DELETE',
    })
        .then(res => res.json())

}



// cart data added 
export const cartAdded = (_id, productDetails) => {

    return fetch(`${import.meta.env.VITE_lOCAL_Server}/cartData/${_id}`, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(productDetails)
    })
        .then(res => res.json())
}

// ....delete 
// /cartData/:id

export const delteOne = (_id) => {
    return fetch(`${import.meta.env.VITE_lOCAL_Server}/cartData/${_id}`, {
        method: 'DELETE'
    })
        .then(res => res.json())
}



// '/products/:id

export const deleteItem = (_id) => {
    return fetch(`${import.meta.env.VITE_lOCAL_Server}/products/${_id}`, {
        method: 'DELETE'
    })
        .then(res => res.json())


}