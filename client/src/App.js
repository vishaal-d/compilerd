import React, { useState } from "react";
import { Editor, Monaco } from "@monaco-editor/react";
import Dropdown from "./components/Dropdown";
import { SunIcon, MoonIcon } from "@heroicons/react/solid";
import "./App.css";

const languages = [
  { id: "cpp", name: "C++" },
  { id: "java", name: "Java" },
  { id: "python", name: "Python" },
  { id: "javascript", name: "JavaScript" },
];

const themes = [
  { id: "vs-dark", name: "Dark" },
  { id: "vs-light", name: "Light" },
];

function App() {
  const [code, setCode] = useState("");
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  const [selectedTheme, setSelectedTheme] = useState(themes[0]);

  const handleRun = () => {
    // Add your logic to compile and run the code
  };

  return (
    <div
      className={`h-screen ${
        selectedTheme.id === "vs-dark"
          ? "bg-gray-900 text-white"
          : "bg-white text-black"
      }`}
    >
      <div className="flex flex-col p-4">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">Online Compiler</h1>
          <div className="flex space-x-4">
            <Dropdown
              options={languages}
              selectedOption={selectedLanguage}
              setSelectedOption={setSelectedLanguage}
            />
            <Dropdown
              options={themes}
              selectedOption={selectedTheme}
              setSelectedOption={setSelectedTheme}
            />
          </div>
        </div>

        <Editor
          height="40vh"
          language={selectedLanguage.id}
          theme={selectedTheme.id}
          value={code}
          onChange={setCode}
        />

        <div className="mt-4">
          <h2 className="text-lg font-semibold">Input</h2>
          <textarea
            className="w-full h-24 p-2 mt-2 border rounded-md"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          ></textarea>
        </div>

        <div className="mt-4">
          <button
            onClick={handleRun}
            className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700"
          >
            Run
          </button>
        </div>

        <div className="mt-4">
          <h2 className="text-lg font-semibold">Output</h2>
          <textarea
            className="w-full h-24 p-2 mt-2 border rounded-md"
            value={output}
            readOnly
          ></textarea>
        </div>
      </div>
    </div>
  );
}

export default App;
