import "./App.css";
import Layout from "./components/shared/Layout";
import AddFruits from "./pages/AddFruits";
import AllFruits from "./pages/AllFruits";
import {Routes,Route} from 'react-router-dom';

function App() {
  return(
  <Layout>
    <Routes>
      <Route path="/" element={<AllFruits/>}></Route>
      <Route path="/add-fruit" element={<AddFruits/>}></Route>
    </Routes>
  </Layout>
  ) 
}
export default App
