import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Home} from "./pages/Home";
import {StageLayout} from "./components/StageLayout";
import {Stage} from "./pages/Stage";
import {PresentationContextProvider} from "./hook/usePresentation.tsx";
import {FrontStage} from "./pages/FrontStage";
import {Controls} from "./pages/Controls";

export const App = () => {
  return (
      <PresentationContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<StageLayout/>}>
              <Route path="/" element={<Home/>}/>
              <Route path="/stage" element={<Stage/>}/>
            </Route>
            <Route path="/front-stage" element={<FrontStage/>}/>
            <Route path="/controles" element={<Controls/>}/>
          </Routes>
        </BrowserRouter>
      </PresentationContextProvider>
  )
}