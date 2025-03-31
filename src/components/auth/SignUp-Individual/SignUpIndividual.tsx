import { useForm } from "react-hook-form";
import { Steps } from "../../../constants/steps";
import { useStepper } from "../../../hooks/state";
import {
  individualCaptureForm1Types,
  individualCaptureForm2Types,
} from "../../../form/schema/types";
import {
  individualCaptureForm1ValidationSchema,
  individualCaptureForm2ValidationSchema,
} from "../../../form/rules/validation";
import { yupResolver } from "@hookform/resolvers/yup";
import { SignUpIndividualStep1 } from "./SignUpIndividualStep1";
import { CustomButton } from "../../shared";
import { SignUpIndividualStep2 } from "./SignUpIndividualStep2";
import { useState } from "react";
import { OTPVerification, TransPinVerification } from "../otp";

export const SignUpIndividual: React.FC<{}> = () => {
  const { nextStep, prevStep, activeStep } = useStepper(Steps);
  //otp
  const [showOtp, setShowOtp] = useState<boolean>(false);
  const [otp, setOtp] = useState<string>("");
  //transaction pin
  const [showTransPin, setShowTransPin] = useState<boolean>(false);
  const [transPin, setTransPin] = useState<string>("");

  //form 1 validation control
  const {
    control: individualCaptureFrm1Control,
    formState: { errors: individualCaptureFrm1Error },
    trigger: individualCaptureFrm1Trigger,
    setValue: setIndividualCaptureFrm1Value,
    getValues: getIndividualCaptureFrm1Value,
    clearErrors: clearIndividualFrm1Errors,
  } = useForm<individualCaptureForm1Types>({
    mode: "onChange",
    resolver: yupResolver(individualCaptureForm1ValidationSchema),
  });

  //form 2 validation
  const {
    control: individualCaptureFrm2Control,
    formState: { errors: individualCaptureFrm2Error },
    trigger: individualCaptureFrm2Trigger,
    setValue: setIndividualCaptureFrm2Value,
    getValues: getIndividualCaptureFrm2Value,
    clearErrors: clearIndividualFrm2Errors,
  } = useForm<individualCaptureForm2Types>({
    mode: "onChange",
    resolver: yupResolver(individualCaptureForm2ValidationSchema),
  });

  const onSubmit = async () => {
    let isValid = false;
    if (activeStep === 0) {
      isValid = await individualCaptureFrm1Trigger();
      if (isValid) nextStep();
    } else if (activeStep === 1) {
      isValid = await individualCaptureFrm2Trigger();
      if (isValid) {
        const { first_name, last_name, phone_number, bvn } =
          getIndividualCaptureFrm1Value();
        const { email_address, username, password, confirm_password } =
          getIndividualCaptureFrm2Value();
        console.log(
          first_name,
          last_name,
          phone_number,
          bvn,
          email_address,
          username,
          password,
          confirm_password
        );
        setShowOtp(!showOtp);
      }
    }
  };

  const onProceedOTP = () => {
    if (otp.length >= 6) {
      setShowOtp(!showOtp);
      setShowTransPin(!showTransPin);
    }
  };

  const onProceedTransPin = () => {
    if (transPin.length >= 6) {
      setShowTransPin(!showTransPin);
    }
  };

  const FormSteps = [
    <SignUpIndividualStep1
      useFormProps={{
        control: individualCaptureFrm1Control,
        errors: individualCaptureFrm1Error,
        setValues: setIndividualCaptureFrm1Value,
        clearErrors: clearIndividualFrm1Errors,
      }}
    />,
    <SignUpIndividualStep2
      useFormProps={{
        control: individualCaptureFrm2Control,
        errors: individualCaptureFrm2Error,
        setValues: setIndividualCaptureFrm2Value,
        clearErrors: clearIndividualFrm2Errors,
      }}
    />,
  ];
  return (
    <>
      {/* <CustomStepper activeStep={activeStep} steps={Steps} /> */}
      {FormSteps[activeStep]}
      <div className='flex flex-row justify-between gap-4'>
        {activeStep > 0 && (
          <CustomButton
            title='Previous'
            onClick={() => prevStep()}
            className='bg-transparent border-[1.5px] border-orange text-[#f09228]'
          />
        )}
        <CustomButton
          title={activeStep > 0 ? "Submit" : "Next"}
          onClick={() => onSubmit()}
          className='w-full'
        />
      </div>
      <OTPVerification
        visible={showOtp}
        otp={otp}
        setOtp={setOtp}
        onProceed={() => onProceedOTP()}
      />
      <TransPinVerification
        visible={showTransPin}
        transPin={transPin}
        setTransPin={setTransPin}
        onProceed={() => onProceedTransPin()}
      />
    </>
  );
};
