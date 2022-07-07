import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import routeList from './routes';
import "./index.scss";

function App() {

  return (
    <BrowserRouter>
      
      <Routes>
        {routeList.map((e) => <Route path={e.path} element={<e.component />} key={e.path} />)}
      </Routes>

    </BrowserRouter>
  );
}

export default App;
