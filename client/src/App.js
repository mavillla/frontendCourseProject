import {BrowserRouter, Routes, Route} from "react-router-dom"
import MainScreeen from "./pages/MainScreen/MainScreen"
import TaroScreen from "./pages/TaroScreen/TaroScreen"

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path={"/"} element={<MainScreeen/>}/>
      <Route path={"/taro"} element={<TaroScreen/>}/>
      {/* <Route path="/taro/:taroId" exact element={<TaroCardScreeen/>}/> */}
    </Routes>
    </BrowserRouter>
  
  );
}

export default App;
