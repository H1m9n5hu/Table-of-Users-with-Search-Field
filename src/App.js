import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserList from './Components/UserList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
         <Routes>
          <Route path="/" element={<UserList />} />
         </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
