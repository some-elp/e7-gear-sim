import { BrowserRouter, Route, Routes, NavLink, HashRouter } from "react-router-dom";

import Learning from "./Learning";
import Home from "./Home";


export default function App() {
  return (
    <BrowserRouter basename="/e7-gear-sim">
      <main>
        <Routes>
          <Route index element = {<Home/>}/>
          <Route path="learning" element = {<Learning/>}/>
        </Routes>
      </main>
    </BrowserRouter>
  )
}