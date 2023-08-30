import "./App.css";
import Layout from "./component/shared/layout";
import AddFruits from "./pages/AddFruits";
import AllFruits from "./pages/AllFruits";
import {Routes,Route} from 'react-router-dom';
import UpdateFruit from "./pages/UpdateFruit";

function App() {
  return(
  <Layout>
    <Routes>
      <Route path="/" element={<AllFruits/>}></Route>
      <Route path="/add-fruit" element={<AddFruits/>}></Route>
      <Route path="/update-fruit/:id" element={<UpdateFruit/>}></Route>
    </Routes>
    </Layout>
  ) 
}
export default App
