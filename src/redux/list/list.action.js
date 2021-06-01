const addItems = (data)=>({
    type : 'AddItems',
    payload : data 
})


export const deleteItems = (index)=> ({
    type :'DeleteItems',
    payload : index
})


export const updateItems = (index,data)=>({
    type :"EditItems",
    payload : {data, index}

})


export default addItems ;
