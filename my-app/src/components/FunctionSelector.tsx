import { FunctionSelectorProps } from "../types/interfaces";

const FunctionSelector = ({
  step,
  machineCapabilities,
  onFunctionChange,
}: FunctionSelectorProps) => {
  return (
    <select
      value={step.Function}
      onChange={(e) => onFunctionChange(e.target.value)}
    >
      <option value="" disabled>
        Select Function
      </option>
      {Object.keys(machineCapabilities).map((moduleName) =>
        Object.keys(machineCapabilities[moduleName].Functions).map(
          (functionName) => (
            <option
              key={`${moduleName}/${functionName}`}
              value={`${moduleName}/${functionName}`}
            >
              {`${moduleName}/${functionName}`}
            </option>
          )
        )
      )}
    </select>
  );
};

export default FunctionSelector;
