import Footer from "./Component/Footer";
import Main from "./Component/Main";
import Navbar from "./Component/Navbar";
import Sidebar from "./Component/Sidebar";

function App() {
  return (
    <div className="bg-[#f7f7f8]">
      {/* Navbar */}
      <Navbar />
      {/* Sidebar */}
      <div className="flex">
        <Sidebar />
        {/* Main */}
        <Main />
      </div>
      {/* Footer */}
      <Footer/>
    </div>
  );
}

export default App;
