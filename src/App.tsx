import { Routes, Route } from 'react-router-dom';
import Layout from './pages/layout';
import ThankYou from './pages/thankyou';
import Blog from './pages/blog';
import Error from './pages/error';
function App() {

  return (
    <main className="font-default">
      <Routes>
        <Route path="/" element={<Layout/>}/>
        <Route path="/thankyou" element={<ThankYou />} />
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/error" element={<Error/>}/>
      </Routes>
    </main>
  )
}

export default App
