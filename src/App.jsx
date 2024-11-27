import { Link, useLoaderData } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import UserCard from "./components/UserCard";

function App() {
  const loadedUsers = useLoaderData();
  // console.log(loadedUsers);
  const [users, setUsers] = useState(loadedUsers);

  return (
    <div className="text-center">
      <h1 className="m-20">CRUD Practice</h1>
      <Link className="btn btn-outline btn-neutral" to={`/addUser`}>
        Add User
      </Link>

      <div className="flex gap-8 items-center justify-center m-10 ">
        {users.map((user) => (
          <UserCard
            key={user._id}
            user={user}
            users={users}
            setUsers={setUsers}
          ></UserCard>
        ))}
      </div>
    </div>
  );
}

export default App;
