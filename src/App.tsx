import './App.css';
import Routers from './routes';
import { BrowserRouter as Router, Route, Routes, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';

// import Home from './components/Home';

// const router = createBrowserRouter(createRoutesFromElements(
//   <Route path="/" element={<Home />}>
//     <Route path="/mytodolist" element={<MyTodoList />} />
//   </Route>
// ));

function App() {
  return (
    <RouterProvider router={Routers} />
  );
}


export default App;
