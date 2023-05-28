import { useAuth0 } from "@auth0/auth0-react";
import Search from "../components/Search";
import Layout from "../layouts/Layout";
type ChildrenProps = {
  children: JSX.Element;
};
const HomeLayout = ({ children }: ChildrenProps) => {
  return (
    <div className="w-full flex justify-center mb-5">
      <span className="italic text-gray-400">{children}</span>
    </div>
  );
};

const Home = () => {
  const { user } = useAuth0();
  return (
    <>
      <Layout>
        <>
          <HomeLayout>
            <>{user?.name || "( no name )"}</>
          </HomeLayout>

          <HomeLayout>
            <>{user?.email || "( no email )"}</>
          </HomeLayout>

          <Search />
        </>
      </Layout>
    </>
  );
};

export default Home;
