import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

import Home from "./pages/Home";
// import AboutUs from "./pages/AboutUs";
// import ContactUs from "./pages/ContactUs";
// import Login from "./pages/Login";
// import Signup from "./pages/Signup";
// import Artist from "./pages/Artist";
// import Nav from "./components/Nav/Nav";
// import Footer from "./components/footer/Footer";
// import Hero from "./components/hero/Hero";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("id_token");
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : "",
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});


function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
          {/* <Nav /> */}
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/artist/:artistName" element={<Artist />} /> */}
            {/* <Route path="/aboutus" element={<AboutUs />} /> */}
            {/* <Route path="/contactus" element={<ContactUs />} /> */}
            {/* <Route path="/login" element={<Login />} /> */}
            {/* <Route path="/signup" element={<Signup />} /> */}
            {/* <Route path="*" element={<NoMatch/>} /> */}
          </Routes>
      </Router>
    </ApolloProvider>
  );
}

export default App;
