import { useState } from "react";
import login from "../../assets/png/login.png";
import { ActionText, Tab } from "../../common";
import { CustomButton, CustomTextInput } from "../../components/shared";
import { tabDataItem } from "../../constants/login";
import { useTab } from "../../hooks/state";
import { SignUpIndividual } from "../../components/auth/SignUp-Individual";
import { SignUpCorporate } from "../../components/auth/SignUp-Corporate";
import { Controller, useForm } from "react-hook-form";
import { loginFormTypes } from "../../form/schema/types";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginFormValidationSchema } from "../../form/rules/validation";
import { useAuthStore } from "../../hooks/store";
import { useNavigate } from "react-router-dom";
import { dashboardNavigationRouteNames } from "../../navigation";

export const Login = () => {
  const { selectedTabItem, setSelectedTabItem } = useTab(tabDataItem);
  const [authType, setAuthType] = useState<"Login" | "SignUp">("Login");
  const navigate = useNavigate();
  const { setIsAuthenticated } = useAuthStore();
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<loginFormTypes>({
    mode: "onChange",
    resolver: yupResolver(loginFormValidationSchema),
  });

  const onSubmit = async (data: loginFormTypes) => {
    if (data) {
      setIsAuthenticated(true);
      navigate(dashboardNavigationRouteNames.DASH_BOARD);
    }
  };

  return (
    <div className='flex h-screen justify-center items-center'>
      <div className='w-[70%] h-screen flex items-start'>
        <div className='w-[50%] h-full justify-center items-center py-1 hidden md:flex'>
          <div className='w-[95%] h-full'>
            <img
              src={login}
              alt='login'
              className='h-full w-full object-center'
            />
          </div>
        </div>
        <div className='sm:w-[100%] md:w-[100%] lg:w-[50%] h-full flex flex-col lg:px-16'>
          <div className='w-full h-full overflow-y-scroll py-20 scrollbar-hide'>
            <div className='sm:w-[90%] md:w-[80%] lg:w-[70%]'>
              <Tab
                data={tabDataItem}
                setSelectedItem={(value) => setSelectedTabItem(value)}
                selectedItem={selectedTabItem}
              />
            </div>
            <div className='space-y-2 pt-10 pb-5'>
              <p className='font-satoshi font-bold text-[#1B1818] text-2xl'>
                {authType === "Login" ? "Welcome back!" : "Welcome!"}
              </p>
              <ActionText
                actionTitle={authType === "Login" ? "Sign Up" : "Login"}
                description={
                  authType === "Login"
                    ? "Already have an account?"
                    : "Don't have an account?"
                }
                onClickAction={() => {
                  if (authType === "Login") {
                    setAuthType("SignUp");
                  } else {
                    setAuthType("Login");
                  }
                }}
              />
            </div>
            {authType === "SignUp" &&
            selectedTabItem === "Individual Account" ? (
              <SignUpIndividual />
            ) : authType === "SignUp" &&
              selectedTabItem === "Corporate Account" ? (
              <SignUpCorporate />
            ) : (
              <>
                <div>
                  <Controller
                    control={control}
                    render={({ field }) => (
                      <CustomTextInput
                        label='Email Address'
                        placeHolder='Enter email address'
                        inputType='email'
                        onChange={(value) => field.onChange(value)}
                        value={field.value}
                        error={errors?.email?.message}
                      />
                    )}
                    name='email'
                    defaultValue=''
                  />

                  <Controller
                    control={control}
                    render={({ field }) => (
                      <CustomTextInput
                        label='Password'
                        placeHolder='Enter password'
                        inputType='password'
                        onChange={(value) => field.onChange(value)}
                        value={field.value}
                        error={errors?.password?.message}
                      />
                    )}
                    name='password'
                    defaultValue=''
                  />
                </div>
                <CustomButton
                  title='Login'
                  onClick={handleSubmit(onSubmit)}
                  className='w-full text-white'
                />
                <ActionText
                  actionTitle='Recover'
                  description='Forgot password?'
                  onClickAction={() => {}}
                  className='text-center'
                />
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
