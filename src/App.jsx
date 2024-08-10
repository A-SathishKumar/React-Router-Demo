import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainMenu from './Components/MainMenu';
import AllCourses from './Components/AllCourses';
import Coding from './Components/Coding';
import FullStack from './Components/FullStack';
import Datascience from './Components/Datascience';
import './App.css'
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<MainMenu />}>
            <Route path='/' element={<AllCourses />} />
            <Route path="/coding" element={<Coding />} />
            <Route path='/fullstack' element={<FullStack />} />
            <Route path='/datascience' element={<Datascience />} />
            <Route path='*' element={<h1>404 Not Found</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
