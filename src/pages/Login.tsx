import { useAuth0 } from "@auth0/auth0-react";
import { Navigate } from "react-router-dom";
import Layout from "../layouts/Layout";

const Login = () => {
  const { loginWithRedirect, isAuthenticated, isLoading } = useAuth0();
  if (isLoading)
    return <div className="w-full flex justify-center">Loading...</div>;
  return (
    <>
      {isAuthenticated ? (
        <Navigate to="/home" />
      ) : (
        <Layout>
          <>
            <h3 className="grow-1">
              Welcome to the weather forecast web application. Please login with
              your Github user to use the application and view the weather in
              your city
            </h3>
            <div className="mt-5 lg:m-5 w-full flex lg:justify-end justify-start">
              <button className="w-[100px]" onClick={() => loginWithRedirect()}>
                Log In
              </button>
            </div>
          </>
        </Layout>
      )}
    </>
  );
};

export default Login;
