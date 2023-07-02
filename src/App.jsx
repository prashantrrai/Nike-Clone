import './App.css'
import Banner from './components/banner/Banner'
import Navbar from './components/navigation/Navbar'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  return (
    <>
      <div className="container">
        <Navbar/>
        <Banner/>
      </div>
    </>
  )
}

export default App
