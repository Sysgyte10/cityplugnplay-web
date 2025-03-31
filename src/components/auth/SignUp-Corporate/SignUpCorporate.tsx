import { useForm } from "react-hook-form";
import { Steps } from "../../../constants/steps";
import { useStepper } from "../../../hooks/state";
import { yupResolver } from "@hookform/resolvers/yup";
import { CustomButton } from "../../shared";
import {
  corporateCaptureForm1Types,
  corporateCaptureForm2Types,
} from "../../../form/schema/types";
import {
  corporateCaptureForm1ValidationSchema,
  corporateCaptureForm2ValidationSchema,
} from "../../../form/rules/validation";
import { SignUpCorporateStep1 } from "./SignUpCorporateStep1";
import { SignUpCorporateStep2 } from "./SignUpCorporateStep2";
import { useState } from "react";
import { OTPVerification, TransPinVerification } from "../otp";

export const SignUpCorporate: React.FC<{}> = () => {
  const { nextStep, prevStep, activeStep } = useStepper(Steps);
  //otp
  const [showOtp, setShowOtp] = useState<boolean>(false);
  const [otp, setOtp] = useState<string>("");
  //transaction pin
  const [showTransPin, setShowTransPin] = useState<boolean>(false);
  const [transPin, setTransPin] = useState<string>("");

  //form 1 validation control
  const {
    control: corporateCaptureForm1Control,
    formState: { errors: corporateCaptureForm1Error },
    trigger: corporateCaptureForm1Trigger,
    setValue: setCorporateCaptureForm1Value,
    getValues: getCorporateCaptureForm1Value,
    clearErrors: clearCorporateForm1Errors,
  } = useForm<corporateCaptureForm1Types>({
    mode: "onChange",
    resolver: yupResolver(corporateCaptureForm1ValidationSchema),
  });

  //form 2 validation
  const {
    control: corporateCaptureForm2Control,
    formState: { errors: corporateCaptureForm2Error },
    trigger: corporateCaptureForm2Trigger,
    setValue: setCorporateCaptureForm2Value,
    getValues: getCorporateCaptureForm2Value,
    clearErrors: clearCorporateForm2Errors,
  } = useForm<corporateCaptureForm2Types>({
    mode: "onChange",
    resolver: yupResolver(corporateCaptureForm2ValidationSchema),
  });

  const onSubmit = async () => {
    let isValid = false;
    if (activeStep === 0) {
      isValid = await corporateCaptureForm1Trigger();
      if (isValid) nextStep();
    } else if (activeStep === 1) {
      isValid = await corporateCaptureForm2Trigger();
      if (isValid) {
        const {
          company_name,
          company_email_address,
          password,
          confirm_password,
        } = getCorporateCaptureForm1Value();
        const { about_company, company_address, company_phone_number, bvn } =
          getCorporateCaptureForm2Value();
        console.log(
          company_name,
          company_email_address,
          password,
          confirm_password,
          about_company,
          company_address,
          company_phone_number,
          bvn
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
    <SignUpCorporateStep1
      useFormProps={{
        control: corporateCaptureForm1Control,
        errors: corporateCaptureForm1Error,
        setValues: setCorporateCaptureForm1Value,
        clearErrors: clearCorporateForm1Errors,
      }}
    />,
    <SignUpCorporateStep2
      useFormProps={{
        control: corporateCaptureForm2Control,
        errors: corporateCaptureForm2Error,
        setValues: setCorporateCaptureForm2Value,
        clearErrors: clearCorporateForm2Errors,
      }}
    />,
  ];
  return (
    <div>
      {/* <CustomStepper activeStep={activeStep} steps={Steps} /> */}
      {FormSteps[activeStep]}
      <div className='flex flex-row justify-between gap-4'>
        {activeStep > 0 && (
          <CustomButton
            title='Previous'
            onClick={() => prevStep()}
            className='bg-transparent border-[1.5px] border-orange text-[orange] w-full'
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
    </div>
  );
};
