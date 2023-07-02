import Home from "./pages/home/Home";
import Profile from "./pages/Profile/Profile";
import Login from './pages/login/Login'
import Register from "./pages/register/Register";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route index element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/profile/:username" element={<Profile />} />
      {/* ... etc. */}
    </Route>
  )
);

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App;
