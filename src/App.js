import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import routeList from './routes';

import "./index.scss";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {routeList.map((e) => <Route path={e.path} element={<e.component />} key={e.path} />)}
      </Routes>
      <ToastContainer />

    </BrowserRouter>
  );
}

export default App;
