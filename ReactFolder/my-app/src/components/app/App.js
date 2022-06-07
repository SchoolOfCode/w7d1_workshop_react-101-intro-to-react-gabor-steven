import "./App.css";
import List from "../list/index.js";
import ListItem from "../ListItem/index.js";

function App() {
  return (
    <main className="App">
      <List>
        <ListItem text="Milk" />
        <ListItem text="Eggs" />
        <ListItem text="Flour" />
      </List>
    </main>
  );
}

export default App;
