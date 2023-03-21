import PersonList from "./components/PersonList";

import PersonAdd from "./components/PersonAdd";
import PersonRemove from "./components/PersonRemove";

export default function App() {
  return (
    <div ClassName="App">
      <PersonAdd />
      <PersonList />
      <PersonRemove />
    </div>
  );
}
