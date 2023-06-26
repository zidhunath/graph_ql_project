import Header from "./components/Header";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from './pages/Home'
import NotFound from "./pages/NotFound"
import Project from './pages/Project'

const cache = new InMemoryCache({
  typePolicies: {
    Query: {
      fields: {
        clients: {
          merge(existing, incomming) {
            return incomming;
          },
        },
        projects: {
          merge(existing, incomming) {
            return incomming;
          },
        },
      },
    },
  },
});
const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache,
});

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <Router>
          <Header />
          <div className="Conatiner">
            <Routes>  
              <Route path = "/" element = {<Home/>}/>
              <Route path = "/projects/:id" element = {<Project />}/>
              <Route path = "*" element = {<NotFound/>}/>
            </Routes>
          </div>
        </Router>
      </ApolloProvider>
    </>
  );
}

export default App;
