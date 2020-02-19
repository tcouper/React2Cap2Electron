import React from 'react';
import './App.css';
import isElectron from 'is-electron';


function handleClick (e) {
  
  if (isElectron()) {
    console.log("Detected Electron:  Using IPC")
    const {ipcRenderer} = window.require('electron')
    ipcRenderer.send("FROM_WINDOW", "Hi")

  } else {

    console.log(" Not Supported - requires the Desktop app")

  }

}


if (isElectron()) {

  const {ipcRenderer} = window.require('electron')

  ipcRenderer.on("FROM_IPC", (data) => {
    console.log(`Received ${data} from main process`);
  });

}

function App() {
  return (
    <div className="App">

      <h1>React to Capacitor to Electron</h1>
      <p>This is a basic test harness to demonstrate accessing Electron APIs from within REACT</p>

      <button onClick={handleClick}>Click Me</button>



    </div>
  );
}

export default App;
