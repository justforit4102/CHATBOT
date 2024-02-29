

import { useState } from "react";
import ChatPage from "./ChatPage";
import HomePage from "./HomePage";
import ComplaintPage from "./ComplaintPage";

function App() {
  const [currentPage, setCurrentPage] = useState("home");

  return (
    <>
      {currentPage === "home" && (
        <HomePage setCurrentPage={setCurrentPage} />
      )}
      {currentPage === "complaint-page" && (
        <ComplaintPage setCurrentPage={setCurrentPage} />
      )}
      {currentPage === "chat-page" && (
        <ChatPage setCurrentPage={setCurrentPage} />
      )}
    </>
  );
}

export default App;
