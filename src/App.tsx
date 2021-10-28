import Button from "./components/Button";
import LogoutIcon from "./components/LogoutIcon";
import TomatoButton from "./components/TomatoButton";

const App = () => {
  return (
    <div>
      <h1>React App</h1>
      <Button>click me</Button>
      <Button primary size="large">
        Sign up
      </Button>
      <TomatoButton size="large">Add tomato</TomatoButton>
      <Button padding="0.5rem 1rem">
        <LogoutIcon />
        <span>Logout</span>
      </Button>
      <Button padding="0.5rem 1.5rem">click me</Button>
    </div>
  );
};

export default App;
