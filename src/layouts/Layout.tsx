type ChildrenProps = {
  children: JSX.Element;
};
const Layout = ({ children }: ChildrenProps) => {
  return (
    <div className="flex justify-center max-w-[100dvw] pt-20">
      <div className="flex flex-col lg:w-[50%] w-[80%]">{children}</div>
    </div>
  );
};

export default Layout;
