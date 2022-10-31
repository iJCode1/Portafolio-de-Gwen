import Layout from "./components/Layout"
import Navbar from "./components/Navbar"
import Hero from './components/Hero';
import Main from "./components/Main";
import Companies from "./components/Companies";

function App() {

  return (
    <Layout>
      <Navbar />
      <Hero />
      <Main />
      <Companies />
    </Layout>
  )
}

export default App
