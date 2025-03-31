import { useState } from "react";

export const useStepper = (steps: any[]) => {
  const stepLength = steps && steps.length - 1;
  const [activeStep, setActiveStep] = useState<number>(0);

  const nextStep = () => {
    if (activeStep < stepLength) {
      setActiveStep(activeStep + 1);
    } else if (activeStep === stepLength) {
      //nothing should happen
    }
  };

  const prevStep = () => {
    if (activeStep === stepLength) {
      setActiveStep(activeStep - 1);
    }
  };

  return {
    nextStep,
    prevStep,
    activeStep,
  };
};
