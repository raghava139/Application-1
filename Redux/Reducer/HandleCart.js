const Cart=[]

const HandleCart=(state=Cart,action)=>{

    const prod=action.payload
    switch (action.type) {
        case "Add_Item":
             const exist=state.find((x)=>{
                 console.log(x)
                //  console.log(x.id)
                 console.log(x.prod)
                 return x.id===x.prod
             });
            //  console.log(exist)
            if(exist){
                return state.map((x)=>{
                    // console.log(x.id)
                    return x.id===x.prod?{...x,qty:x.qty+1}:x;
                })
            }
            else{
                const prod=action.payload
                return [...state,{...prod,qty:1}]
            }
            break;
        default:
            return state
            break;
    }



}
export default HandleCart;
