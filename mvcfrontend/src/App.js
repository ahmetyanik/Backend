import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [postEdilen,setPostEdilen] = useState({});

  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((data) => data.json())
      .then((data) => setUsers(data));
  }, [postEdilen]);

  async function addNewUser(e) {

    e.preventDefault();

    const name = document.querySelector("#exampleInputEmail1").value;

    const newUser = { name: name };

    await fetch("http://localhost:3000/addUser", {
      method: "POST", // or 'PUT'
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newUser),
    });

    setPostEdilen(newUser);
    
  }

 


  return (
    <div className="App d-flex justify-content-center flex-wrap">
      <form onSubmit={addNewUser}>
        <div class="mb-3">
          <label for="exampleInputEmail1" class="form-label">
            Name
          </label>
          <input
            type="text"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" class="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div class="mb-3">
          <label for="exampleInputPassword1" class="form-label">
            Age
          </label>
          <input
            type="password"
            class="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>

      {users.map((user) => {
        return (
          <div class="card" style={{ width: "18rem" }}>
            <div class="card-body">
              <h5 class="card-title">{user.name}</h5>
              <p class="card-text">{user.date}</p>
              <a href="#" class="btn btn-primary">
                Go somewhere
              </a>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default App;
