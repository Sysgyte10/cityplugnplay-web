import { Controller } from "react-hook-form";
import { CustomTextInput } from "../../shared";

interface ISignUpCorporateStep1Props {
  useFormProps: any;
}

export const SignUpCorporateStep1: React.FC<ISignUpCorporateStep1Props> = ({
  useFormProps,
}) => {
  const props = useFormProps;
  return (
    <>
      <Controller
        control={props?.control}
        render={({ field }) => (
          <CustomTextInput
            label='Company Name'
            placeHolder='Enter company name'
            inputType='text'
            onChange={(value) => field.onChange(value)}
            value={field.value}
            error={props?.errors?.company_name?.message}
          />
        )}
        name='company_name'
        defaultValue=''
      />
      <Controller
        control={props?.control}
        render={({ field }) => (
          <CustomTextInput
            label='Company Email Address'
            placeHolder='Enter last name'
            inputType='text'
            onChange={(value) => field.onChange(value)}
            value={field.value}
            error={props?.errors?.company_email_address?.message}
          />
        )}
        name='company_email_address'
        defaultValue=''
      />

      <Controller
        control={props?.control}
        render={({ field }) => (
          <CustomTextInput
            label='Password'
            placeHolder='Enter password'
            inputType='password'
            onChange={(value) => field.onChange(value)}
            value={field.value}
            error={props?.errors?.password?.message}
          />
        )}
        name='password'
        defaultValue=''
      />

      <Controller
        control={props?.control}
        render={({ field }) => (
          <CustomTextInput
            label='Confirm Password'
            placeHolder='Enter confirm password'
            inputType='password'
            onChange={(value) => field.onChange(value)}
            value={field.value}
            error={props?.errors?.confirm_password?.message}
          />
        )}
        name='confirm_password'
        defaultValue=''
      />
    </>
  );
};
