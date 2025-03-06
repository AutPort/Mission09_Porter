import "./App.css";
import collegeBasketballTeams from "./CollegeBasketballTeams.json";

function Header() {
  return (
    <>
      <h1>Welcome to NCAA College Basketball Teams</h1>
      <p>Explore the teams, their mascots, and where they are from!</p>
    </>
  );
}

function TeamCard({school, name, city, state}: {school: string; name: string; city: string; state: string}) {
  return (
    <>
      <br></br>
      <h2>{school}</h2>
      <h3>Mascot: {name}</h3>
      <h3>Location: {city}, {state}</h3>
      <br></br>
    </>
  );
}

function TeamList() {
  return (
    <>
      {
        collegeBasketballTeams.teams.map(({school, name, city, state}, index) => (
          <TeamCard key={index} school={school} name={name} city={city} state={state} />
        ))
      }
    </>
  );
}

function App() {
  return (
    <>
      <Header />
      <TeamList />
    </>
  );
}

export default App;
