import React,{useState} from "react";
function App() {
    const [name,setName]=useState("");
    return (
        <div className="app">
            <h1>Hola react world</h1>
            <div>     
            <label htmlFor="name">NOmbre:</label>;
            <input id="name" type="text" value={name}
            onChange={(e)=>setName(e.target.value)}/>
            </div>
        </div>
        
    )
}
export default App;