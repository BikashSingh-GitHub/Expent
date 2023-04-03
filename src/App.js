

import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
// import Controls from './Controls';
// import Background from './Background';
import ReactFlow from './ReactFlow';
{/* <WorkflowAutomation />
import WorkflowAutomation from './WorkflowAutomation'; */}

function App() {
  return (
    <div>
       {/* 
      <Controls/>
    <Background/> */}
   
   <ReactFlow />
      
       <Navbar />
      <Home />
    </div>
  );
}

export default App;
