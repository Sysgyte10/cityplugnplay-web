import { CustomButton } from "../../shared";
import { OTPInput } from "../../shared";

interface ITransPinVerificationProps {
  visible: boolean;
  transPin: string;
  setTransPin: (value: string) => void;
  onProceed: () => void;
}

export const TransPinVerification: React.FC<ITransPinVerificationProps> = ({
  visible,
  transPin,
  setTransPin,
  onProceed,
}) => {
  return (
    <>
      {visible && (
        <div className='flex fixed bg-modalBg top-0 left-0 right-0 bottom-0 w-[100%] h-[100%] justify-center items-center'>
          <div className='w-[25%] rounded-md py-4 bg-white space-y-2 px-4'>
            <p className='text-[#101928] font-bold text-[20px] text-center'>
              Create Transaction Pin
            </p>
            <div>
              <p className='text-[#667185] font-medium text-[11px] text-center'>
                This transaction PIN will be used to approve all transaction
              </p>
              <p className='text-[#667185] font-medium text-[11px] text-center'>
                activity within the application
              </p>
            </div>
            <div className='py-2'>
              <OTPInput value={transPin} onChange={setTransPin} />
            </div>
            <CustomButton
              title='Proceed'
              onClick={() => onProceed()}
              className='w-[95%]'
            />
          </div>
        </div>
      )}
    </>
  );
};
