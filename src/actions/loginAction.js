import * as LOGINTYPE from '../constants/loginType.js';
import * as PATH from '../util/path.js';
import {fetchAsyncPost,fetchAsyncGet} from '../util/fetchRequest.js';

//
export function loginRequest(){
    return {
        type:LOGINTYPE.LOGIN_REQUEST,
        isFetching:true
    }
}

export function loginSuccess(data){
    return {
        type:LOGINTYPE.LOGIN_SUCCESS,
        isFetching:false,
        data
    }
}

export function loginFailed(message){
    return {
        type:LOGINTYPE.LOGIN_FAILED,
        isFetching:false,
        message
    }
}

export function loginOK(obj){
    return (dispatch)=>{
        dispatch(loginRequest());
        return fetchAsyncPost(PATH.BASEPATH + 'login.do','userName='+obj.userName+'&password='+obj.password)
            .then(res=>{
                if(res.status===200)
                    return res.json();
            })
            .then(json=>{
                dispatch(loginSuccess(json));
                if(json.toString().length!==2 && json[0].SCHEMA !== undefined){
                    localStorage.setItem('userID',json[0].USERID);
                    localStorage.setItem('schema',json[0].SCHEMA);
                    localStorage.setItem('username',obj.userName);
                    localStorage.setItem('password',obj.password);
                    //获取首页中的菜单
                    dispatch(getMenu(json[0].USERID));
                    
                }
            })
            .catch(e=>{
                console.log('login failed',e);
                dispatch(loginFailed(e));
            });
    }
}

//获取首页中的目录板块
function menuRequest(){
    return {
        type:LOGINTYPE.MENU_REQUEST,
        isFetching:true
    }
}

function menuSuccess(menu){
    return {
        type:LOGINTYPE.MENU_SUCCESS,
        isFetching:false,
        menu
    }
}

function menuFailed(message){
    return {
        type:LOGINTYPE.MENU_FAILED,
        isFetching:false,
        message
    }
}

export function getMenu(userID){
    return (dispatch) => {
        dispatch(menuRequest());
        return fetchAsyncGet(PATH.BASEPATH + 'getModuleByUserID.do','userID='+userID)
            .then(res=>{
                if(res.status===200)
                    return res.json();
            })
            .then(json=>{
                dispatch(menuSuccess(json));
            })
            .catch(e=>{
                console.log('menu failed',e);
                dispatch(menuFailed(e));
            });

    }
}