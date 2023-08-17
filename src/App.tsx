import { Routes, Route } from 'react-router-dom';
import Layout from './pages/layout';
import ThankYou from './pages/thankyou';
import Error from './pages/error';
function App() {

  return (
    <main className="font-default">
      <Routes>
        <Route path="/" element={<Layout/>}/>
        <Route path="/thankyou" element={<ThankYou />} />
        <Route path="/error" element={<Error/>}/>
      </Routes>
    </main>
  )
}

export default App
