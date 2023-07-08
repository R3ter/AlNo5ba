import "./App.scss";
import AboutUs from "./pages/AboutUs/AboutUs";
import ContactUs from "./pages/ContactUs/ContactUs";
import CoursePage from "./pages/CoursePage/CoursePage";
import CoursesPage from "./pages/CoursesPage/CoursesPage";
import HomePage from "./pages/HomePage/HomePage";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage/RegisterPage";
import ScrollToTop from "./components/ScrollTop/ScrollTop";
import TeacherPage from "./pages/TeacherProfilePage/TeacherPage";
import { PopupProvider } from "./components/Context/PopUpContext";
import PopUpWindow from "./components/PopUp/PopUpWindow/PopUpWindow";

const AuthLayout = () => (
  <div>
    <PopUpWindow />
    <ScrollToTop />
    <Outlet />
  </div>
);
const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [
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
      {
        path: "/teacherProfile",
        element: <TeacherPage />,
      },
    ],
  },
]);

function App() {
  return (
    <div id="app">
      <PopupProvider>
        <RouterProvider router={router} />
      </PopupProvider>
    </div>
  );
}

export default App;
