import Header from "./Header";
import Home from "./Home";
import Footer from "./Footer";
import About from "./About";
import  {Routes , Route} from 'react-router-dom';
import Vehicles from "./Vehicles";
import Services from "./Services";
import ContactUs from "./ContactUs";
import AddVehicle from "./AddVehicle";
import UpdateVehicle from "./UpdateVehicle";

function App(){
  return(
    <>
    <h1>DJS AUTOMOBILES</h1>
    <Header/>
  
<Routes>
  <Route path="/" element={<Home/>}/>
  <Route path="/about" element={<About/>}/>
  <Route path="/vehicles" element={<Vehicles/>}/>
  <Route path="/add-vehicles" element={<AddVehicle/>}/>
  <Route path="/update-vehicle/:id" element={<UpdateVehicle/>}/>
  <Route path="/services" element={<Services/>}/>
  <Route path="/contact-us" element={<ContactUs/>}/>
</Routes>


    <Footer/>
    </>
  )
}

export default App;