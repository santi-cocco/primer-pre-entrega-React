import  Navbar  from "./components/Navbar/Navbar"
import ItemListContainer from "./components/ItemListContainer/ItemListContainer"
import 'bootstrap/dist/css/bootstrap.min.css';




function App() {
  return (
    <>
    <Navbar/>
    <ItemListContainer greeting='Bienvenido, encontra tu estilo en ModernMarket.' />
    </>
  )
}

export default App 
