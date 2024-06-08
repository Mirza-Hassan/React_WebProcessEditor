import { useState } from "react";
import FunctionSelector from "./FunctionSelector";
import { AddStepProps, ProcessStep } from "../types/interfaces";

const AddStep = ({ machineCapabilities, onAddStep }: AddStepProps) => {
  const [newStep, setNewStep] = useState<ProcessStep>({
    StepType: 1,
    StepId: "",
    Function: "",
    Transitions: [],
  });

  const addStep = () => {
    if (newStep.StepId && newStep.Function) {
      onAddStep(newStep);
      setNewStep({
        StepType: 1,
        StepId: "",
        Function: "",
        Transitions: [],
      });
    }
  };

  return (
    <div>
      <h3>Add New Step</h3>
      <input
        type="text"
        placeholder="Step ID"
        value={newStep.StepId}
        onChange={(e) => setNewStep({ ...newStep, StepId: e.target.value })}
      />
      <FunctionSelector
        step={newStep}
        machineCapabilities={machineCapabilities}
        onFunctionChange={(func) => setNewStep({ ...newStep, Function: func })}
      />
      <button onClick={addStep}>Add Step</button>
    </div>
  );
};

export default AddStep;
