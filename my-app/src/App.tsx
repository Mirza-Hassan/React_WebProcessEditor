import { useState } from "react";
import Editor from "./components/Editor";
import { MachineCapabilities, Sequence } from "./types/interfaces";
import machineCapabilitiesData from "./data/MachineCapabilities_Assessment.json";
import sequenceData from "./data/sequence_assessment.json";
import "./App.css";

const parsedMachineCapabilitiesData: MachineCapabilities =
  machineCapabilitiesData;
const parsedSequenceData: any = sequenceData;

const App = () => {
  const [machineCapabilities] = useState<MachineCapabilities>(
    parsedMachineCapabilitiesData
  );
  const [sequence] = useState<Sequence>(parsedSequenceData);

  const saveSequence = () => {
    const dataStr = JSON.stringify(sequence, null, 2);
    const blob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "sequence.json";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="container">
      <h1>Machine Sequence Editor</h1>
      <button onClick={saveSequence}>Save Sequence</button>
      {machineCapabilities && sequence ? (
        <Editor
          machineCapabilities={machineCapabilities}
          initialSequence={sequence}
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default App;
