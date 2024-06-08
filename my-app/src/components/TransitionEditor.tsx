import { useState } from "react";
import { TransitionEditorProps, Transition } from "../types/interfaces";

const TransitionEditor = ({ step, onUpdateStep }: TransitionEditorProps) => {
  const [transitions, setTransitions] = useState<Transition[]>(
    step.Transitions || []
  );

  const updateTransition = (index: number, updatedTransition: Transition) => {
    const newTransitions = [...transitions];
    newTransitions[index] = updatedTransition;
    setTransitions(newTransitions);
    onUpdateStep({ ...step, Transitions: newTransitions });
  };

  const addTransition = () => {
    const newTransitions = [
      ...transitions,
      { result: "Succeeded", NextStepId: "" } as Transition,
    ];
    setTransitions(newTransitions);
    onUpdateStep({ ...step, Transitions: newTransitions });
  };

  return (
    <div>
      <h4>Transitions</h4>
      {transitions.map((transition, index) => (
        <div key={index}>
          <select
            value={transition.result}
            onChange={(e) =>
              updateTransition(index, {
                ...transition,
                result: e.target.value as "Succeeded" | "Failed",
              })
            }
          >
            <option value="Succeeded">Succeeded</option>
            <option value="Failed">Failed</option>
          </select>
          <input
            type="text"
            placeholder="Next Step ID"
            value={transition.NextStepId}
            onChange={(e) =>
              updateTransition(index, {
                ...transition,
                NextStepId: e.target.value,
              })
            }
          />
        </div>
      ))}
      <button onClick={addTransition}>Add Transition</button>
    </div>
  );
};

export default TransitionEditor;
