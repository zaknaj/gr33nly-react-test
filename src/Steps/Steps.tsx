import Step from "./Step";
import { StepType } from "./StepType";

export const Steps = ({ steps }: { steps: StepType[] }) => {
  return (
    <>
      {steps &&
        steps.map((step, stepIndex) => (
          <Step key={`step__${stepIndex}`} etape={step} />
        ))}
    </>
  );
};

export default Steps;
