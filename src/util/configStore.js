import { createLogger } from 'redux-logger';//打印日志
import { createStore, applyMiddleware, compose } from 'redux';
import thunkMiddleWare from 'redux-thunk';
import {hasHistory} from 'react-router-redux';
import { routerMiddleware } from 'react-router-redux';
import thunkMiddleware from 'redux-thunk'
import promise from 'redux-promise';

import rootReducer from '../reducer/rootReducer.js';

const logger = createLogger();
const router = routerMiddleware(hasHistory);

const enhancer = compose(//compose函数表示从右到左组合多个函数，形成串联式的函数调用关系
    applyMiddleware(//将中间件组成数组，依次执行
        thunkMiddleWare,// 允许我们 dispatch() 函数
        promise,
        logger, // 一个很便捷的 middleware，用来打印 action 日志,logger一定要放在最后，否则输出结果会不正确。
        router
    )
);


export default function configStore(initialState){
    const storeCreator = createStore(
        rootReducer,
        initialState,
        enhancer
    );
    
    return storeCreator;
}