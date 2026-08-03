import { useEffect, useState } from "react";
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import ScrollProgress from "./components/ScrollProgress";
import Cursor from "./components/Cursor";
import Aurora from "./components/Aurora";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2800);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Aurora />
      <Cursor />
      <ScrollProgress />
      <Navbar />
      <Home />
    </>
  );
}

export default App;