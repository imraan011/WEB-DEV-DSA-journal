import { useState } from "react";
import Create from "./Components/Create";
import Read from "./Components/read";

const App = () => {
  const [user, setuser] = useState([
    {
      name: "imraan",
      age: 11,
    },
    {
      name: "ishtikhar",
      age: 25,
    },
  ]);

  return (
    <div>
      <Create />
      <Read user={user} setuser={setuser} />
    </div>
  );
};

export default App;
