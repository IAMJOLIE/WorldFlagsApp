import Card, { cardLoader } from "./components/Card";
import "./App.css";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import HomePage, { countriesLoader } from "./components/HomePage";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import ErrorPage from "./components/ErrorPage";
import SkeletonThemeProvider from "./components/SkeletonThemecontext";



const router = createBrowserRouter([
  {
    path: "/",
    loader: countriesLoader,
    element: <HomePage />,
  },
  {
    path: "/country/:cca3",
    element: <Card />,
    loader: cardLoader,
    errorElement: <ErrorPage />,
  },
]);

function App() {
 
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (

    <SkeletonThemeProvider theme={theme}>
    <div className={`container ${theme}`}>
      <Navbar theme={theme} setTheme={setTheme} />

      <RouterProvider router={router} />
    </div>
    </SkeletonThemeProvider>
  );
}

export default App;
