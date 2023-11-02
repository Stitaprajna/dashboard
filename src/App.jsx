import './App.css';
import Page1 from './pages/page1';
import Page2 from './pages/page2';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
function App() {
  return (
    <div>
      {/* <Page1/> */}
      <Router>
          <Routes>
            <Route exact path='/' element={<Page1/>}/>
            <Route exact path='/manage-skills' element={<Page2/>}/>
          </Routes>
      </Router>
    </div>
  );
}

export default App;
