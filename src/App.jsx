import Layout from "./components/Layout"
import Navbar from "./components/Navbar"
import Hero from './components/Hero';
import Main from "./components/Main";
import Companies from "./components/Companies";
import Contact from "./components/Contact";
import Media from "./components/Media";

function App() {

  return (
    <Layout>
      <Navbar />
      <Hero />
      <Main />
      <Companies />
      <Contact />
      <Media />
    </Layout>
  )
}

export default App
