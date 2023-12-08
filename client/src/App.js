import {BrowserRouter, Routes, Route} from "react-router-dom"
import MainScreeen from "./pages/MainScreen/MainScreen"
import TaroScreen from "./pages/TaroScreen/TaroScreen"
import SpreadScreen from "./pages/SpreadScreen/SpreadScreen";
import TaroCardScreen from "./pages/TaroCardScreen/TaroCardScreen";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path={"/"} element={<MainScreeen/>}/>
                <Route path={"/taro"} element={<TaroScreen/>}/>
                <Route path={"/spreads"} element={<SpreadScreen/>}/>
                <Route path={"/taro/:link"} element={<TaroCardScreen/>}/>
            </Routes>
        </BrowserRouter>

    );
}

export default App;
