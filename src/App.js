import Dashboard from "./Dashboard";
import Home from "./Home";

function App() {
  const showDashboard = false;

  return (
    <div>
      {showDashboard ? <Dashboard /> : <Home />}
    </div>
  );
}

export default App;