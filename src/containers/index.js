import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom';
import configStore from '../util/configStore.js';

const store = configStore();

//引入页面
import Login from './login.js';
import MainPage from './mainPage.js';

ReactDOM.render(//Provide本身并没有做什么，只是将store放在context中，传递给子组件中的context
    <Provider store={store}>
        <Router>
            <div style={{height:'100%'}}>
                <Switch>
                <Route path="/" exact component={Login}></Route>
                <Route path="/login" component={Login}></Route>
                <Route path="/" component={MainPage}></Route>
                </Switch>
            </div>
        
        </Router>
    </Provider>,
    document.getElementById('index')
);