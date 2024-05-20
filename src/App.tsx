import About from "./components/About"
import Main from "./components/Main"
import NavMenu from "./components/NavMenu"
import Stack from "./components/Stack"

function App() {

  return (
    <div className="container mx-auto p-5 lg:px-40">
      <NavMenu />
      <Main />
      <About />
      <Stack />
    </div>
  )
}

export default App
