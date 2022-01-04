export const addMyItem=(product)=>{
    return{
        type:'Add_Item',
        payload:product
    }
}
export const delMyItem=(product)=>{
    return{
        type:'Del_Item',
        payload:product
    }
}


