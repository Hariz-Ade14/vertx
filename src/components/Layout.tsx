import Sidebar from "./Sidebar";
import Header from "./Header";
export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <Sidebar />
      <Header />
      {/* <div className="left-[300px] top-[113px] absolute bg-black/95 px-10 right-0 py-5"> */}
        {children}
      {/* </div> */}
    </div>
  );
}
