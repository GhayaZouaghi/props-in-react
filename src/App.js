import logo from "./logo.svg";
import "./App.css";
import Profile from "./Profile/Profile";

function App() {
  const handleName = (name) => alert(`${name}`);
  return (
    <div className="App">
      <h1>Checkpoint Props</h1>
      <Profile
        fullName="Ghaya Zouaghi"
        bio="Née en 29 Avril"
        profession="Entrepreneur et candidate à GoMyCode"
        handleName={handleName}
      >
        <img
          src="https://cdn.pixabay.com/photo/2017/11/15/20/49/head-2952533_960_720.png"
          alt="props"
          width="300px"
        />
      </Profile>
    </div>
  );
}

export default App;
