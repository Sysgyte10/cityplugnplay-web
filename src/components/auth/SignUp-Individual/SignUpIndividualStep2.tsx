import { Controller } from "react-hook-form";
import { CustomTextInput } from "../../shared";

interface ISignUpIndividualStep2Props {
  useFormProps: any;
}

export const SignUpIndividualStep2: React.FC<ISignUpIndividualStep2Props> = ({
  useFormProps,
}) => {
  const props = useFormProps;
  return (
    <>
      <Controller
        control={props?.control}
        render={({ field }) => (
          <CustomTextInput
            label='Email Address'
            placeHolder='Enter email address'
            inputType='text'
            onChange={(value) => field.onChange(value)}
            value={field.value}
            error={props?.errors?.email_address?.message}
          />
        )}
        name='email_address'
        defaultValue=''
      />
      <Controller
        control={props?.control}
        render={({ field }) => (
          <CustomTextInput
            label='Username'
            placeHolder='Enter username'
            inputType='text'
            onChange={(value) => field.onChange(value)}
            value={field.value}
            error={props?.errors?.username?.message}
          />
        )}
        name='username'
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
