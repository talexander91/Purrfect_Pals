import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from "@apollo/client";
import { setContext } from "@apollo/client/link/context";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Navbar from "./components/Navbar/Navbar";
import Discussion from "./pages/Discussion";
import Shelter from "./pages/Shelter";
import About from "./pages/About/About";
import LoadDiscussionById from "./pages/LoadDiscussionById/LoadDiscussionById";

const httpLink = createHttpLink({
  uri: "/graphql",
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem("auth_token");
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
      <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/shelter" element={<Shelter />} />
            <Route path="/discussion" element={<Discussion />} />
            <Route path="/about" element={<About />} />
            <Route path="discussion/:id" element={<LoadDiscussionById/>}/>

          </Routes>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
