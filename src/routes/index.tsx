import Root from './Root';
import { createBrowserRouter } from 'react-router-dom';

import Home from '../components/Home';
import Other from '../components/Other';
import About from '../components/About';
import MyTodoList from '../components/MyTodoList';

const Routers = createBrowserRouter([{
  path: '/',
  element: <Root />,
  children: [{
    path: '/',
    element: <Home /> // 默认子路由组件
  }, {
    path: '/mytodolist',
    element: <MyTodoList /> // 默认子路由组件
  }, {
    path: '/other',
    element: <Other />
  }, {
    path: '/about',
    element: <About />
  }]
}]);


export default Routers;
