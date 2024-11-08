import { Container } from "@chakra-ui/react"
import { Routes,Route } from "react-router-dom"
import Userpage from "./pages/Userpage"
import Postpage from "./pages/Postpage"
import Header from "./components/Header"
function App() {
  return (
    <Container maxWidth='620px'>
      <Header />
      <Routes>
        <Route path="/:username" element={<Userpage />} />
        <Route path="/:username/post/:pid" element={<Postpage />} />
      </Routes>
    </Container>
  )
}

export default App
