import React from "react";
import { ScrollRestoration, Outlet, createBrowserRouter, RouterProvider } from "react-router";
import Home from "./Home";
import About from "./About";
import Products from "./Products";
import Contact from "./Contact";
import SingleProduct from "./SingleProduct";
import Cart from "./Cart";
import ErrorPage from "./ErrorPage";
import { GlobalStyle } from "./GlobalStyle";
import { ThemeProvider } from "styled-components";
import type { DefaultTheme } from "styled-components";
import Header from "./components/Header";
import Footer from "./components/Footer";


const AppLayout = () => {
  return (<>
    <Header />
    <ScrollRestoration getKey={(location) => location.pathname} />
    <Outlet />
    <Footer />
  </>)
}

const Router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "products", element: <Products /> },
      { path: "contact", element: <Contact /> },
      { path: "singleproduct/:id", element: <SingleProduct /> },
      { path: "cart", element: <Cart /> },
      { path: "about", element: <About /> }
    ]
  }
])

const App: React.FC = () => {
  const theme: DefaultTheme = {
    colors: {
      heading: "rgb(24,24,49)",
      text: "rgba(29,29,29,0.8)",
      white: "#fff",
      black: "#212529",
      helper: "#8490ff",

      bg: "#F6F8FA",
      footer_bg: "#0a1435",
      btn: "rgb(98,84,234)",
      border: "rgba(98,84,243,0.5)",

      hr: "#ffffff",
      gradient:
        "linear-gradient(0deg,rgb(132, 144, 255) 0% rgb(98,189,252) 100%)",
      shadow:
        "rgba(0,0,0,0.02) 0px 1px 3px 0px, rgba(27,31,35,0.15) 0px 0px 0px 1px",
      shadowSupport: "rgba(0,0,0,0.16) 0px 1px 4px",
    },
    media: {
      mobile: "768px",
      tab: "998px",
    },
  };
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterProvider router={Router} />
    </ThemeProvider>
  );
};

export default App;



// <ThemeProvider theme={theme}>
//   <GlobalStyle />
//   <Router >
//     <Header />
//     <Routes>
//       <Route path="/" element={<Home />} />
//       <ScrollRestoration getKey={(location) => { return location.pathname }} />
//       <Route path="/about" element={<About />} />
//       <Route path="/products" element={<Products />} />
//       <Route path="/contact" element={<Contact />} />
//       <Route path="/singleproduct/:id" element={<SingleProduct />} />
//       <Route path="/cart" element={<Cart />} />
//       <Route path="/*" element={<ErrorPage />} />
//     </Routes>
//     <Footer />
//   </Router>
// </ThemeProvider>