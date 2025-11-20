import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";

const App = () => (
  <div className="min-h-screen bg-slate-50">
    <Navbar />
    <Home />
    <div className="mx-auto max-w-6xl px-6">
      <Footer />
    </div>
  </div>
);

export default App;
