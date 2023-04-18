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
import About from "./pages/About";
import Artist from "./pages/Artist";
// import Contact from "./pages/Contact";

import Nav from "./components/Nav/Nav";
import Footer from "./components/footer/Footer";
// import Hero from "./components/Hero/Hero";
// import Footer from "./components/footer/Footer";
import Login from "./components/loginModal/Login";
import Signup from "./components/signupModal/Signup";

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
        <div>
          <Nav Signup={Signup} Login={Login} />
          {/* <Hero /> */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/artist/:userId" element={<Artist />} />
            <Route path="/about" element={<About />} />
            {/* <Route path="/contact" element={<Contact />} /> */}
            {/* <Route path="*" element={<NoMatch/>} /> */}
          </Routes>
          <Footer />
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
