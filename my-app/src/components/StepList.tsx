import StepRow from "./StepRow";
import { StepListProps } from "../types/interfaces";

const StepList = ({
  steps,
  machineCapabilities,
  onUpdateStep,
  onDeleteStep,
}: StepListProps) => {
  return (
    <div>
      <table className="step-table">
        <thead>
          <tr>
            <th>Step ID</th>
            <th>Function</th>
            <th>Transitions</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {steps.map((step) => (
            <StepRow
              key={step.StepId}
              step={step}
              machineCapabilities={machineCapabilities}
              onUpdateStep={onUpdateStep}
              onDeleteStep={onDeleteStep}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default StepList;
