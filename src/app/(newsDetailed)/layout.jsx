import Header from "@/components/shared/Header";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header></Header>
      {children}
    </>
  );
};

export default MainLayout;
