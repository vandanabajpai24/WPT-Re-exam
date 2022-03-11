import './App.css';
import { BrowserRouter as Router, Routes, Route, Navigate, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home></Home>} />
          <Route path="/page1" element={<Page1></Page1>} />
          <Route path="/page2" element={<Page2></Page2>} />
          <Route path="/page3" element={<Page3></Page3>} />
        </Routes>
      </Router>
    </div>
  );
}
export default App;
function Home() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link className='btn btn-primary'
        to="/Page1">go to Page1</Link><br></br><br></br>
      <Link className='btn btn-primary'
        to="/Page2">go to Page2</Link><br></br><br></br>
      <Link className='btn btn-primary'
        to="/Page3">go to Page3</Link><br></br><br></br>
    </div>
  );
}
function Page1() {
  return (
    <div>
      <h1>THIS IS PAGE 1</h1>
      <Link className='btn btn-primary'
        to="/Home">Back to home</Link>
    </div>
  );
}
function Page2() {
  return (
    <div>
      <h1>THIS IS PAGE 2</h1>
      <Link className='btn btn-primary'
        to="/Home">Back to home</Link>
    </div>
  );
}
function Page3() {
  return (
    <div>
      <h1>THIS IS PAGE 3</h1>
      <Link className='btn btn-primary'
        to="/Home">Back to home</Link>
    </div>
  );
}