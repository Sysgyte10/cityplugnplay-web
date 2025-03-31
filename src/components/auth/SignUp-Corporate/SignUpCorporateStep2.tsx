import { Controller } from "react-hook-form";
import { CustomTextInput } from "../../shared";

interface ISignUpCorporateStep2Props {
  useFormProps: any;
}

export const SignUpCorporateStep2: React.FC<ISignUpCorporateStep2Props> = ({
  useFormProps,
}) => {
  const props = useFormProps;
  return (
    <>
      <Controller
        control={props?.control}
        render={({ field }) => (
          <CustomTextInput
            label='About Company'
            placeHolder='Enter brief description'
            inputType='text'
            textArea
            onChange={(value) => field.onChange(value)}
            value={field.value}
            error={props?.errors?.about_company?.message}
          />
        )}
        name='about_company'
        defaultValue=''
      />

      <Controller
        control={props?.control}
        render={({ field }) => (
          <CustomTextInput
            label='Phone Number'
            placeHolder='Enter phone number'
            inputType='text'
            onChange={(value) => field.onChange(value)}
            value={field.value}
            error={props?.errors?.company_phone_number?.message}
          />
        )}
        name='company_phone_number'
        defaultValue=''
      />

      <Controller
        control={props?.control}
        render={({ field }) => (
          <CustomTextInput
            label='BVN'
            placeHolder='Enter BVN'
            inputType='text'
            onChange={(value) => field.onChange(value)}
            value={field.value}
            error={props?.errors?.bvn?.message}
          />
        )}
        name='bvn'
        defaultValue=''
      />

      <Controller
        control={props?.control}
        render={({ field }) => (
          <CustomTextInput
            label='Confirm Address'
            placeHolder='Enter company address'
            inputType='number'
            onChange={(value) => field.onChange(value)}
            value={field.value}
            error={props?.errors?.company_address?.message}
          />
        )}
        name='company_address'
        defaultValue=''
      />
    </>
  );
};
