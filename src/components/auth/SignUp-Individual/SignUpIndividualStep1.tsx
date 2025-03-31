import { Controller } from "react-hook-form";
import { CustomSelectInput, CustomTextInput } from "../../shared";

interface ISignUpIndividualStep1Props {
  useFormProps: any;
}

export const SignUpIndividualStep1: React.FC<ISignUpIndividualStep1Props> = ({
  useFormProps,
}) => {
  const props = useFormProps;
  return (
    <>
      <Controller
        control={props?.control}
        render={({ field }) => (
          <CustomTextInput
            label='First Name'
            placeHolder='Enter first name'
            inputType='text'
            onChange={(value) => field.onChange(value)}
            value={field.value}
            error={props?.errors?.first_name?.message}
          />
        )}
        name='first_name'
        defaultValue=''
      />
      <Controller
        control={props?.control}
        render={({ field }) => (
          <CustomTextInput
            label='Last Name'
            placeHolder='Enter last name'
            inputType='text'
            onChange={(value) => field.onChange(value)}
            value={field.value}
            error={props?.errors?.last_name?.message}
          />
        )}
        name='last_name'
        defaultValue=''
      />

      <Controller
        control={props?.control}
        render={({ field }) => (
          <CustomTextInput
            label='Phone Number'
            placeHolder='Enter phone number'
            inputType='number'
            onChange={(value) => field.onChange(value)}
            value={field.value}
            error={props?.errors?.phone_number?.message}
          />
        )}
        name='phone_number'
        defaultValue=''
      />

      <Controller
        control={props?.control}
        render={({ field }) => (
          <CustomTextInput
            label='BVN'
            placeHolder='Enter BVN'
            inputType='number'
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
          <CustomSelectInput
            label='Gender'
            options={["Male", "Female", "Others"]}
            value={field.value}
            onChange={(value) => field.onChange(value)}
            error={props?.errors?.gender?.message}
          />
        )}
        name='gender'
        defaultValue=''
      />
    </>
  );
};
