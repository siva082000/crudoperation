import { BrowserRouter,Routes,Route } from "react-router-dom";
import'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Home";
import Create from "./Create";
import Edit from "./Edit";
import Read from "./Read";
function App()
{
    
return(
     <>
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/Create" element={<Create/>}></Route>
          <Route path="/Read/:id" element={<Read/>}></Route>
          <Route path="/Edit/:id" element={<Edit/>}></Route> 
        </Routes>
     </BrowserRouter>
  </>  
) 
}
export default App;