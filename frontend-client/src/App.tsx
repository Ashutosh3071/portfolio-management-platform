import { useState } from "react";
import AdminSkillsPage from "./pages/AdminSkillsPage";
import ClientSkillsPage from "./pages/ClientSkillsPage";
import Navbar from "./components/common/Navbar";

function App() {
  const [role, setRole] = useState<"admin" | "client">("client");

  return (
    <>
      <Navbar />

      <div className="flex justify-center mt-4 gap-4">
        <button
          onClick={() => setRole("admin")}
          className="px-4 py-1 bg-green-600 text-white rounded"
        >
          Admin View
        </button>

        <button
          onClick={() => setRole("client")}
          className="px-4 py-1 bg-blue-600 text-white rounded"
        >
          Client View
        </button>
      </div>

      {role === "admin" ? <AdminSkillsPage /> : <ClientSkillsPage />}
    </>
  );
}

export default App;
