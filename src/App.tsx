
import { Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/home/Home'
import Layout from './layout/Layout'
function App() {

   return (
      <>
        <Layout>
         <Routes>
            <Route path="/" element={<Home />} />
         </Routes>
        </Layout>
      </>
   )
}

export default App
