import Root from './Root';
import MyTodoList from '../containers/MyTodoList';
import { createBrowserRouter } from 'react-router-dom';

const Routers = createBrowserRouter([{
  path: '/',
  element: <Root />
}, {
  path: '/mytodolist',
  element: <MyTodoList />
}]);


export default Routers;
