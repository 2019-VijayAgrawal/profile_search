
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Home from './component/Home';
import Page from './component/Page';
function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/home' element = {<Home/>}/>
        <Route path='/profile_search' element = {<Page/>}/>
      </Routes>
    </BrowserRouter>
     {/* <Page/> */}

    {/* <Api/> */}
      
    </>
  );
}

export default App;
