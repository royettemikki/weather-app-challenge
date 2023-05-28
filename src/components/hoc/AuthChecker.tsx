import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";

type ChildrenProps = {
  children: JSX.Element;
};
const AuthChecker = ({ children }: ChildrenProps) => {
  const { isAuthenticated } = useAuth0();

  if (isAuthenticated) return children;

  return <Navigate to="/" />;
};

export default AuthChecker;
