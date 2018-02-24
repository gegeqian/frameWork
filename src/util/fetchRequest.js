/*
参数说明
url:请求的方法的路径
parameters:请求的参数

fetch请求默认不带cookie，传cookie时需设置credentials:'include'
*/

//POST请求
export const fetchAsyncPost = (url,parameters)=>{
    let result = fetch(url,{
        method:'POST',
        credentials:'include',
        headers:{
            'Accept':'application/json',
            'Content-Type':'application/x-www-form-urlencoded'
        },
        mode:'no-cores',
        body:parameters
    });
    return result;
}

//GET请求
export const fetchAsyncGet = (url,parameters) => {
    let result = fetch(url+'?'+parameters,{
        method:'GET',
        credentials:'include',
        headers:{
            'Content-type':'application/x-www-form-urlencoded; charset=UTF-8'
        },
        mode:'core'
    });
    return result;
}