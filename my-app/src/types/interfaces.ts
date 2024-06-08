export interface FunctionDescription {
  Name: string;
  Description: string;
}

export interface Module {
  Functions: {
    [FunctionName: string]: { FunctionDescription: FunctionDescription };
  };
}

export interface MachineCapabilities {
  [ModuleName: string]: Module;
}

export interface Transition {
  result: "Succeeded" | "Failed";
  NextStepId: string;
}

export interface Step {
  StepType: 1 | 5;
  StepId: string;
}

export interface ProcessStep extends Step {
  StepType: 1;
  Function: string;
  Transitions: Transition[];
}

export interface DoneStep extends Step {
  StepType: 5;
}

export interface Sequence {
  Name: string;
  StartStepId: string;
  Steps: (ProcessStep | DoneStep)[];
}

export interface AddStepProps {
  machineCapabilities: MachineCapabilities;
  onAddStep: (step: ProcessStep) => void;
}

export interface EditorProps {
  machineCapabilities: MachineCapabilities;
  initialSequence: Sequence;
}

export interface FunctionSelectorProps {
  step: ProcessStep;
  machineCapabilities: MachineCapabilities;
  onFunctionChange: (func: string) => void;
}

export interface StepProps {
  step: ProcessStep | DoneStep;
  machineCapabilities: MachineCapabilities;
  onUpdateStep: (step: ProcessStep) => void;
  onDeleteStep: (stepId: string) => void;
}

export interface StepListProps {
  steps: (ProcessStep | DoneStep)[];
  machineCapabilities: MachineCapabilities;
  onUpdateStep: (step: ProcessStep) => void;
  onDeleteStep: (stepId: string) => void;
}

export interface TransitionEditorProps {
  step: ProcessStep;
  onUpdateStep: (step: ProcessStep) => void;
}
