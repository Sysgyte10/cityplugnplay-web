import { create } from "zustand";

// Define the user data type
export type userDataType = {
  userId: number;
  token: {
    token: string;
    expireFrom: string;
    expireTo: string;
    expireTimeTo: string;
    is2FAEnabled: boolean;
    twoFactorToken: string | null;
  } | null;
  id: number;
  code: string;
  photo: string | null;
  idCard: string | null;
  userName: string;
  email: string;
  emailConfirmed: boolean;
  country: string | null;
  phoneNumber: string;
  phoneNumberConfirmed: boolean;
  accountType: string;
  lastLogin: string;
  isDeleted: boolean;
  homeAddress: string | null;
  accountStatus: string;
  numberOfReferrals: number;
  firstName: string;
  lastName: string;
  middleName: string | null;
  countryOfResidence: string | null;
  referredBy: string | null;
  countryName: string;
  is2FAEnabled: boolean;
  usersAccountsNumbers: {
    userAccountId: number;
    bankCode: string;
    bankName: string;
    accountNumber: string;
    accountName: string;
  }[];
  idCardName: string | null;
  idNumber: string | null;
  kycverification: string | null;
  isDisable: boolean;
  dateKycSubmitted: string | null;
  kycDeclineReason: string | null;
  profilePicUrl: string | null;
  totalBalance: number;
  commision: number;
};

// Define Zustand store with sessionStorage persistence
interface IAuthStoreProps {
  userData: userDataType | null;
  setUserData: (value: userDataType) => void;
  isAuthenticated: boolean;
  setIsAuthenticated: (value: boolean) => void;
  isDeviceAuthenticated: boolean;
  setIsDeviceAuthenticated: (value: boolean) => void;
}

export const useAuthStore = create<IAuthStoreProps>((set) => {
  // Retrieve stored session data on load
  const storedUserData = sessionStorage.getItem("userData");
  const storedAuth = sessionStorage.getItem("isAuthenticated");

  return {
    userData: storedUserData ? JSON.parse(storedUserData) : null,
    setUserData: (userData) => {
      sessionStorage.setItem("userData", JSON.stringify(userData));
      set({ userData });
    },
    isAuthenticated: storedAuth ? JSON.parse(storedAuth) : false,
    setIsAuthenticated: (isAuthenticated) => {
      sessionStorage.setItem(
        "isAuthenticated",
        JSON.stringify(isAuthenticated)
      );
      set({ isAuthenticated });
    },
    isDeviceAuthenticated: false,
    setIsDeviceAuthenticated: (isDeviceAuthenticated) =>
      set({ isDeviceAuthenticated }),
  };
});
