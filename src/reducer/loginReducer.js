import * as LOGINTYPE from '../constants/loginType.js';

const initialState = {

}
export default function login(state = initialState,action){
    switch(action.type){
        case LOGINTYPE.LOGIN_REQUEST:
            return Object.assign({},state,{
                isFetching:true
            })

        case LOGINTYPE.LOGIN_SUCCESS:
            return Object.assign({},state,{
                isFetching:false,
                loginData:action.data
            })

        case LOGINTYPE.LOGIN_FAILED:
            return Object.assign({},state,{
                isFetching:false,
                loginError:action.message
            })

        case LOGINTYPE.MENU_REQUEST:
            return Object.assign({},state,{
                isFetching:true
            })
        
        case LOGINTYPE.MENU_SUCCESS:
            return Object.assign({},state,{
                isFetching:false,
                menuData:action.menu
            })

        case LOGINTYPE.MENU_FAILED:
            return Object.assign({},state,{
                isFetching:false,
                menuError:action.message
            })
        
        default:
            return state;
    }
}