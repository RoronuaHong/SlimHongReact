import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import MyTodoList from './containers/MyTodoList'
import Home from './components/Home';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mytodolist" element={<MyTodoList />} />
      </Routes>
    </Router>
  );
}

export default App;
