import About from "./components/About"
import Main from "./components/Main"
import NavMenu from "./components/NavMenu"

function App() {

  return (
    <div className="container mx-auto p-5 lg:px-40">
      <NavMenu />
      <Main />
      <About />
    </div>
  )
}

export default App
