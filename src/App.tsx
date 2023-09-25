import { Route, Routes } from 'react-router-dom';
import { Collab} from './pages/Collaboration';
import RootLayout from './Layout';
import PageNotFound from './pages/404';

function App() {

  return (
    <main className="relative font-default">
      <Routes>
        <Route path='*' element={<PageNotFound/>}/>
        <Route path='/' element={<RootLayout/>}/>
        <Route path="collab" element={<Collab/>}/>
      </Routes>
    </main>
  )
}

export default App
