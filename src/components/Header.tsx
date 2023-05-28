import { useAuth0 } from "@auth0/auth0-react";
const Header = () => {
  const { logout, isAuthenticated } = useAuth0();

  const showLogout = () => {
    return (
      <button
        className="w-[100px]"
        onClick={() =>
          logout({ logoutParams: { returnTo: window.location.origin } })
        }
      >
        Log out
      </button>
    );
  };

  return (
    <div className="flex items-center p-7 border-solid border-slate-950 border-b-2">
      <div className="flex gap-3 items-center grow">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-12 h-12"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z"
          />
        </svg>
        <h2>
          <strong>Weather Forecast</strong>
        </h2>
      </div>
      {isAuthenticated && showLogout()}
    </div>
  );
};

export default Header;
