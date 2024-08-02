import "./App.css";
import Filter from "./Filter";
function App() {

  const dropdownOptions=["Date of regestration","Vendor Score","Rating","Status","Type of Business","Location","Assign to"]
  return (
    <div className="App">
      <Filter options={dropdownOptions}/>
    </div>
  );
}

export default App;
