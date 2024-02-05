import './App.css';
import {Route,Routes,BrowserRouter} from 'react-router-dom';


import Landing from'./componentes/Landing'

function App() {
  
 // const ID=useSelector(state=>state.ID)
  
  
  
  
  
  
  
  
  return (
    <div className="App">
      
        
    
        
     
      
      <BrowserRouter>
     
       <Routes>
          <Route exact path='/'element={<Landing/>}/>
          


         
          

       </Routes>

      
      </BrowserRouter>
    </div>
  );
}

export default App;
