import Design from "./components/Design";
import LoginPage from "./components/LoginPage"
import './App.css'

function App() {
  return (
    <div className="app-container">
      <div className="text-white">
        <LoginPage />
      </div>
      <div className="w-full h-screen absolute top-0 left-0">
        <Design />
      </div>
    </div>
  );
}

export default App;
