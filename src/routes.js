import Dashboard from "./routes/dashboard";
import Login from "./routes/login";

const routes = [
  {
    path: '/',
    component: Login,
  },
  {
    path: 'dashboard',
    component: Dashboard,
  }
]

export default routes;