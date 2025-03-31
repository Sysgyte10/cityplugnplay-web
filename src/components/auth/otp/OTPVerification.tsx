import { CustomButton } from "../../shared";
import { ActionText } from "../../../common";
import { OTPInput } from "../../shared";

interface IOTPVerificationProps {
  visible: boolean;
  otp: string;
  setOtp: (value: string) => void;
  onProceed: () => void;
}

export const OTPVerification: React.FC<IOTPVerificationProps> = ({
  visible,
  otp,
  setOtp,
  onProceed,
}) => {
  return (
    <>
      {visible && (
        <div className='flex fixed bg-modalBg top-0 left-0 right-0 bottom-0 w-[100%] h-[100%] justify-center items-center'>
          <div className='w-[25%] rounded-md py-4 bg-white space-y-2 px-4'>
            <p className='text-[#101928] font-bold text-[20px] text-center'>
              OTP Verification
            </p>
            <div>
              <p className='text-[#667185] font-medium text-[11px] text-center'>
                Please input the OTP code sent to your email address
              </p>
              <p className='text-[#667185] font-medium text-[11px] text-center'>
                provided for activation
              </p>
            </div>
            <div className='py-2'>
              <OTPInput value={otp} onChange={setOtp} />
            </div>
            <CustomButton
              title='Proceed'
              onClick={() => onProceed()}
              className='w-[95%]'
            />
            <ActionText
              description='Not Received?'
              actionTitle='Resend'
              onClickAction={() => {}}
              className='text-center'
            />
          </div>
        </div>
      )}
    </>
  );
};
