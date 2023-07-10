export const newUserR = (userInfo) => {
    return fetch(`${import.meta.env.VITE_lOCAL_Server}/newUsers`, {
        method: 'POST',
        headers: { 'content-type': 'application/json' },
        body: JSON.stringify(userInfo)
    }).then(res => res.json())
}


// product deleted 
// http://localhost:5000

export const productDelete = (_id) => {
    return fetch(`${import.meta.env.VITE_lOCAL_Server}/productUpload/${_id}`, {
        method: 'DELETE'
    }).then(res => res.json())
}