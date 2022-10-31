import Layout from "./components/Layout"
import Navbar from "./components/Navbar"
import Hero from './components/Hero';
import Main from "./components/Main";
import Companies from "./components/Companies";
import Contact from "./components/Contact";

function App() {

  return (
    <Layout>
      <Navbar />
      <Hero />
      <Main />
      <Companies />
      <Contact />
    </Layout>
  )
}

export default App
