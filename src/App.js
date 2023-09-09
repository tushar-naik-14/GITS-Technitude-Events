import logo from "./logo.svg";
import "./App.css";
// import Form from "./components/Form";
import NavBar from "./components/NavBar";
import {Events} from "./components/Events";
import eventsList from './components/Events_list';

function App() {
  return (
    <div className="App">
      <div className="nav">
        <NavBar />
      </div>
      <div className="appEvents">
        {eventsList.map(eventsList => (
          <Events 
              key={eventsList.id}
              image={eventsList.image}
              name={eventsList.name}
              details={eventsList.details}
              register={eventsList.register}
          />
        ))} 
      </div>
    </div>
    
  );
}

export default App;
