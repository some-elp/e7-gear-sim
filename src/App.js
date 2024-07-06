import { BrowserRouter, Route, Routes, } from "react-router-dom";
import Learning from "./pages/Learning";
import Home from "./pages/Home";
import Gacha from "./pages/Gacha";


export default function App() {
  return (
    <BrowserRouter basename="/e7-gear-sim">
      <main>
        <Routes>
          <Route index element = {<Home/>}/>
          <Route path="learning" element = {<Learning/>}/>
          <Route path="gacha" element = {<Gacha/>}/>
        </Routes>
      </main>
    </BrowserRouter>
  )
}