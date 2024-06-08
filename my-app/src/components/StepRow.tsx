import { useState } from "react";
import FunctionSelector from "./FunctionSelector";
import TransitionEditor from "./TransitionEditor";
import { StepProps, ProcessStep, DoneStep } from "../types/interfaces";

const StepRow = ({
  step,
  machineCapabilities,
  onUpdateStep,
  onDeleteStep,
}: StepProps) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedStep, setEditedStep] = useState<ProcessStep | DoneStep>(step);

  const saveStep = () => {
    onUpdateStep(editedStep as ProcessStep);
    setIsEditing(false);
  };

  return (
    <tr>
      {isEditing ? (
        <>
          <td>
            <input
              type="text"
              value={editedStep.StepId}
              onChange={(e) =>
                setEditedStep({ ...editedStep, StepId: e.target.value })
              }
            />
          </td>
          <td>
            {editedStep.StepType === 1 && (
              <FunctionSelector
                step={editedStep as ProcessStep}
                machineCapabilities={machineCapabilities}
                onFunctionChange={(func) =>
                  setEditedStep({
                    ...(editedStep as ProcessStep),
                    Function: func,
                  })
                }
              />
            )}
          </td>
          <td>
            {editedStep.StepType === 1 && (
              <TransitionEditor
                step={editedStep as ProcessStep}
                onUpdateStep={(step) => setEditedStep(step as ProcessStep)}
              />
            )}
          </td>
          <td>
            <button onClick={saveStep}>Save</button>
            <button onClick={() => setIsEditing(false)}>Cancel</button>
          </td>
        </>
      ) : (
        <>
          <td>{step.StepId}</td>
          <td>{step.StepType === 1 ? (step as ProcessStep).Function : "-"}</td>
          <td>
            {step.StepType === 1 &&
              (step as ProcessStep).Transitions.map((t, index) => (
                <div key={index}>
                  {t.result}: {t.NextStepId}
                </div>
              ))}
          </td>
          <td>
            <button onClick={() => setIsEditing(true)}>Edit</button>
            <button onClick={() => onDeleteStep(step.StepId)}>Delete</button>
          </td>
        </>
      )}
    </tr>
  );
};

export default StepRow;
