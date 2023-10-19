import React, { useState } from "react";
import BasicContactForm from "../components/BasicContactForm";
import AdvancedContactForm from "../components/AdvancedContactForm";
const Contacts = () => {
  const [view, setView] = useState("basic");
  return (
    <div className="h-screen mt-20">
      <h1 className="text-center font-bold text-2xl uppercase text-zinc-200 mb-4 bg-[#946b6f]/30 rounded-md">
        Contact us
      </h1>
      <nav className="flex justify-center gap-8">
        <h3
          onClick={() => setView("basic")}
          className={view === "basic" ? "text-zinc-200 underline" : ""}
        >
          Basic
        </h3>
        <h3
          onClick={() => setView("advanced")}
          className={view === "advanced" ? "text-zinc-200 underline" : ""}
        >
          Advanced
        </h3>
      </nav>
      {view === "basic" ? <BasicContactForm /> : <AdvancedContactForm />}
    </div>
  );
};

export default Contacts;
