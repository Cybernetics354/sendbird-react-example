import Dashboard from "./routes/dashboard";
import Login from "./routes/login";

const routes = [
  {
    path: '/',
    component: Login,
  },
  {
    path: 'chat',
    component: Dashboard,
  }
]

export default routes;