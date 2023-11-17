import { createBrowserRouter } from "react-router-dom";
import Homepage from "../Homepage";
import About from "../Pages/About";
import Service from "../Pages/Service";
import Contact from "../Pages/Contact";
import Blog from "../Pages/Blog";

const Index = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
    ],
  },
  {
    path: "/About",
    element: <About />,
  },
  {
    path: "/Services",
    element: <Service />,
  },
  {
    path: "/Contact",
    element: <Contact />,
  },
  {
    path: "/Blog",
    element: <Blog />,
  },
]);

export default Index;
