import "./App.css";
import AboutUs from "./pages/AboutUs/AboutUs";
import ContactUs from "./pages/ContactUs/ContactUs";
import CoursePage from "./pages/CoursePage/CoursePage";
import CoursesPage from "./pages/CoursesPage/CoursesPage";
import HomePage from "./pages/HomePage/HomePage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage/RegisterPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/aboutUs",
    element: <AboutUs />,
  },
  {
    path: "/contactus",
    element: <ContactUs />,
  },
  {
    path: "/courses",
    element: <CoursesPage />,
  },
  {
    path: "/course",
    element: <CoursePage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
