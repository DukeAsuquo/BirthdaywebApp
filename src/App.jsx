import { useState } from "react";
import data from "./data";
import List from "./List";

const App = () => {
  const [people, setPeople] = useState(data);

  return (
    
    <>
      <main className="">
        <section className="container">
          <h3>{people.length} Birthdays Today</h3>
          <List people={people}
            setPeople={setPeople}
          /> 
          <button onClick={()=>setPeople([])} type="button"  className="btn btn-block">Clear All</button>
        </section>
      </main>
    </>
  );
};
export default App;
