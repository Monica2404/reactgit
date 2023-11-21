import LogSign from "./Components/Login";
import Example from "./Components/Example";
import {BrowserRouter,Route,Routes} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
    <Routes>
    <Route path="/" element={<Example/>}/>
    <Route path="/Login" element={<LogSign/>}/>
    </Routes>
    </BrowserRouter>
    
  );
}

export default App;
