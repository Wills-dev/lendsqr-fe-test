import "./DashboardLayout.scss";
import Sidebar from "@/components/Sidebar/Sidebar";
import Header from "@/components/Header/Header";

interface DashboardLayoutProps {
  children: React.ReactNode;
}
const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  return (
    <div className="container">
      <Header />

      <main className="main__container">
        <Sidebar />
        {children}
      </main>
    </div>
  );
};

export default DashboardLayout;
