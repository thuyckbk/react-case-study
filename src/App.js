// import { BrowserRouter,Routes, Route, Link } from "react-router-dom";
// import LoginHS from "./components/loginHS";
// import LoginGV from "./components/loginGV";
// import{Provider} from 'react-redux';
// import store from './redux/store';
// import TestList from './components/TestList'
// import Login from "./components/Login";


// function App() {
//   return (
//     <div className="form-login">
//       <h1>Xin mời bạn đăng nhập</h1>
//       <button><Link to="/Login">Dành cho </Link> </button>
//       <button><Link to="/loginGV">Dành cho Giáo Viên</Link> </button>
//       <button><Link to="/loginHS">Dành cho Học Sinh</Link> </button>
//       {/* <ul>
//         <li>
//           <Link to="/">Home</Link>
//         </li>
//         <li>
//           <Link to="/about">About</Link>
//         </li>
//         <li>
//           <Link to="/contact">Contact</Link>
//         </li>
//       </ul> */}

//       <hr />
//       <Provider store={store}>
//         <BrowserRouter>
//       <Routes>
//         <Route path="/Login" element={<Login />} />
//         <Route path="/loginGV" element={<LoginGV />} />
//         <Route path="/loginHS" element={<LoginHS />} />
//         <Route path="/TestList" element={<TestList />} />
//       </Routes>
//       </BrowserRouter>
// </Provider>
//     </div>
//   );
// }

// export default App;

import { BrowserRouter, Routes, Route,Link } from "react-router-dom";
import Login from "./components/Login";
import { Provider } from "react-redux";
import store from "./redux/store";
import TestList from "./components/TestList";
import LoginGV from './components/loginGV';


function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <div className="form-login">
      <h1>Xin mời bạn đăng nhập</h1>
      <button><Link to="/Login">Dành cho Hoc Sinh </Link> </button>
      <button><Link to="/loginGV">Dành cho Giáo Viên</Link> </button>
      <hr/>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/LoginGV" element={<LoginGV />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/TestList" element={<TestList />} />
        </Routes>
        </div>
      </BrowserRouter>
    </Provider>
  );
}
export default App;