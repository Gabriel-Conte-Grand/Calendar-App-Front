import { types } from "../actions/actions";

const initialState = {
    checking: true,
    //uid
    //name
}


export const authReducer = ( state=initialState , action ) => {

    switch (action.type) {
        
        case types.Login:
            return{
                ...state,
                ...action.payload,
                checking: false
            }

        case types.CheckingFinish:
            return{
                ...state,
                checking: false
            }

        case types.Logout:
            return{
               checking: false
            }

        default:
            return state;
    }



}





