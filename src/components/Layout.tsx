import Sidebar from "./Sidebar";
import Header from "./Header";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Sidebar />
      <Header />
      {children}
    </div>
  );
}
