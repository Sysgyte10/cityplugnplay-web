import {
  Flashlight,
  GraduationCap,
  Home,
  Phone,
  ShowerHead,
  Tv,
  Wifi,
} from "lucide-react";

export const renderServicesIcon = (serviceName: string, iconColor: string) => {
  if (serviceName.toLowerCase().includes("airtime")) {
    return {
      icon: <Phone size={15} color={iconColor} />,
      title: "Buy Airtime",
    };
  } else if (serviceName.toLowerCase().includes("data")) {
    return {
      icon: <Wifi size={15} color={iconColor} />,
      title: "Buy Data",
    };
  } else if (serviceName.toLowerCase().includes("dashboard")) {
    return {
      icon: <Home size={15} color={iconColor} />,
      title: "Dashboard",
    };
  } else if (serviceName.toLowerCase().includes("tv")) {
    return {
      icon: <Tv size={15} color={iconColor} />,
      title: "Tv Subscription",
    };
  } else if (serviceName.toLowerCase().includes("electricity")) {
    return {
      icon: <Flashlight size={15} color={iconColor} />,
      title: "Buy Electricity",
    };
  } else if (serviceName.toLowerCase().includes("education")) {
    return {
      icon: <GraduationCap size={15} color={iconColor} />,
      title: "Buy Education",
    };
  } else if (serviceName.toLowerCase().includes("insurance")) {
    return {
      icon: <ShowerHead size={15} color={iconColor} />,
      title: "Insurance",
    };
  }
};
