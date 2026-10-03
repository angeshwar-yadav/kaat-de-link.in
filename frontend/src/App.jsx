import { useState } from "react";
import Navbar from "./components/navbar";
import Branding from "./components/branding";
import "./index.css";
function App() {
  const [url, setUrl] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const shortenURL = async () => {
    setError("");
    setResult(null);

    try {
      const res = await fetch("http://localhost:3000/shorten", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          url: url,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.message);
        return;
      }

      setResult(data);

    } catch (error) {
      console.error("Error connecting to backend:", error);
      setError("Could not connect to backend");
    }
  };

  return (
    <div>
      <div  class="border border-gray-300 rounded-xl m-5 shadow-md">
      
      <Navbar />
      <Branding />
    <div className="flex items-center justify-center mt-15">
      <div className="border rounded-3xl flex  ">
      <img src="https://img.icons8.com/?size=100&id=LmG49EnUQig9&format=png&color=000000" alt="" className="w-5 h-5 mt-1.5 ml-0.5" />
      <input
        className=" p-1"
        type="text"
        placeholder=" Enter your URL"
        value={url}
        onChange={(e) => setUrl(e.target.value)}
      />
      <button onClick={shortenURL}
      className="bg-black text-amber-50 border rounded-3xl p-1"
      >
        Shorten
      </button>
      
      </div>
      
    </div>
    <div className="flex items-center justify-center mt-4">
      <p className="text-sm text-gray-500">
        By continuing, you agree to the Terms and Privacy Policy.
      </p>
    </div>
      <div className="flex items-center justify-center mt-4 mb-10">

        {error && (
          <p style={{ color: "red" }}>
            {error}
          </p>
        )}
        {result && (
          <div>
            <div className="flex items-center justify-center mt-2">
              <span >get your shortened URL</span>
            </div>

              <div className="flex items-center justify-center mt-2 border rounded-3xl bg-black mb-5">
                <div className="text-amber-50 h-8 mt-2.5 shadow-olive-400 pl-2 pr-2">
                    <a
                      href={result.shortUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {result.shortUrl}
                    </a>
                    </div>
                        <button onClick={() => navigator.clipboard.writeText(result.shortUrl)} className="bg-white text-black p-1 border rounded-3xl mr-1">copy</button>
                        <button onClick={() => window.open(result.shortUrl, "_blank")} className="bg-white text-black p-1 border rounded-3xl">open</button>
                    </div>
              
                </div>
      )}
      </div>
      </div>
    </div>
  );
}

export default App;
