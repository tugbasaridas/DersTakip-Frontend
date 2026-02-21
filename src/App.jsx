import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import Stats from "./Pages/Stats";

function App() {

  const [studies, setStudies] = useState(() => {
    const saved = localStorage.getItem("studies");
    return saved ? JSON.parse(saved) : [];
  });


  useEffect(() => {
    localStorage.setItem("studies", JSON.stringify(studies));
  }, [studies]);

  return (
    <Router>
      <div>
        {/* Ortak Header Alanı - Tüm sayfalarda görünür */}
        <header className="text-center py-6">
          <Link to="/">
            <h1 className="text-4xl font-bold text-white cursor-pointer">
              📚 Ders Takip Not Defteri
            </h1>
          </Link>
          <p className="text-white opacity-80">
            Çalışmanı planla, başarını artır.
          </p>
          
      
          <nav className="mt-4">
            <Link to="/" className="text-white mx-2 underline">Ana Sayfa</Link>
            <Link to="/stats" className="text-white mx-2 underline">İstatistikler</Link>
          </nav>
        </header>

      
        <Routes>
          <Route 
            path="/" 
            element={<Home studies={studies} setStudies={setStudies} />} 
          />
          <Route 
            path="/stats" 
            element={<Stats studies={studies} />} 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
