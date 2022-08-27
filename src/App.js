import Input from "./components/Input";
import Button from "./components/Button";
import { useState } from "react";


function App() {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div>
      <Input
        name={name} password={password}
        setName={setName} setPassword={setPassword}>
      </Input>
      <div className="button">
        {password === "252525" && <Button />}
      </div>
    </div>
  );
}

export default App;
