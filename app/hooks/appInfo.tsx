

export const initialState={
    userAdress:""
}

export const appReducer=(state:any=initialState, action:any)=>{
    switch(action.type){
        case "UserMetaMask" : {
            return{
                ...state,
                userAdress:action.payload
            }
        }
        default:state
    }
}