import { Stepper, Step } from "react-form-stepper";
import { StepDTO } from "react-form-stepper/dist/components/Step/StepTypes";

interface ICustomStepperProps {
  activeStep: number;
  steps: StepDTO[];
}

export const CustomStepper: React.FC<ICustomStepperProps> = ({
  activeStep,
  steps,
}) => {
  return (
    <Stepper
      activeStep={activeStep}
      steps={steps}
      styleConfig={{
        activeBgColor: "#4E1114", // Active step background color
        inactiveBgColor: "#F092282E", // Inactive step background color
        completedBgColor: "#4E1114", // Completed step background color
        activeTextColor: "#FFFFFF", // Active step text color
        inactiveTextColor: "#0d0101", // Inactive step text color
        completedTextColor: "#FFFFFF", // Completed step text color
        size: "2em", // Adjust step circle size
        circleFontSize: "0.9em",
        borderRadius: "50%", // Makes steps circular
        labelFontSize: "12px", // Fixing missing property
        fontWeight: 500, // Fixing missing property
      }}>
      {steps && steps.map((_, index) => <Step key={index} />)}
    </Stepper>
  );
};
