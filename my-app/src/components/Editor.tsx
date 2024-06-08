import { useState } from "react";
import StepList from "./StepList";
import AddStep from "./AddStep";
import { EditorProps, Sequence, ProcessStep, DoneStep } from "../types/interfaces";

const Editor = ({ machineCapabilities, initialSequence }: EditorProps) => {
  const [sequence, setSequence] = useState<Sequence>(initialSequence);

  const addStep = (step: ProcessStep | DoneStep) => {
    setSequence({
      ...sequence,
      Steps: [...sequence.Steps, step],
    });
  };

  const updateStep = (updatedStep: ProcessStep | DoneStep) => {
    setSequence({
      ...sequence,
      Steps: sequence.Steps.map((step) =>
        step.StepId === updatedStep.StepId ? updatedStep : step
      ),
    });
  };

  const deleteStep = (stepId: string) => {
    setSequence({
      ...sequence,
      Steps: sequence.Steps.filter((step) => step.StepId !== stepId),
    });
  };

  return (
    <div>
      <StepList
        steps={sequence.Steps}
        machineCapabilities={machineCapabilities}
        onUpdateStep={updateStep}
        onDeleteStep={deleteStep}
      />
      <AddStep machineCapabilities={machineCapabilities} onAddStep={addStep} />
    </div>
  );
};

export default Editor;
