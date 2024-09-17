import { useUser } from "@clerk/clerk-react";
import { BarLoader } from "react-spinners";

const Onboarding = () => {

  const { user, isLoaded } = useUser();
  
  if (!isLoaded) {
    return <BarLoader className="mb-4" width={"100%"} color="#9dff00" />;
  }
  return <div>Onboarding</div>;
};

export default Onboarding;
