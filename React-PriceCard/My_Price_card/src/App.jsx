import './App.css'
import Card from './Components/Card';
function App() {
  return (
    <div className="App">
      <div className="outerContainer">
        <Card price="0" cardType="F R E E" user="Single User" storage="5GB Storage"  private={false} phone={false} domain={false} report={false} />
        <Card price="9" cardType="P L U S" user="5 Users" storage="50GB Storage"  private={true} phone={true} domain={true}  report={false}/>
        <Card price="49" cardType="P R O" user="Unlimited Users" storage="150GB Storage"  private={true} phone={true} domain="unlimited"  report={true}/>
      </div>
    </div>
  
    
  )
}

export default App;
