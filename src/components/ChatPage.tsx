import { useState } from "react";
import { Button, TextField, Box } from "@mui/material";
import "../styles/ChatPage.css";
import TransalateButton from "./TranslateButton";
import Logo from "../assets/image.png";


interface Props {
  setCurrentPage: React.Dispatch<React.SetStateAction<string>>;
}

const ChatPage = ({ setCurrentPage }: Props) => {
  const [messages, setMessages] = useState<string[]>([]);
  const [inputMessage, setInputMessage] = useState<string>("");


  const handleSendMessage = () => {
    // Add the user's message to the chat
    setMessages((prevMessages) => [...prevMessages, inputMessage]);

    // Process the user's message (you can implement your logic here)
    // For now, let's assume the bot responds with a simple message
    const botResponse = "Hello! I'm your chatbot. How can I assist you today?";

    // Add the bot's response to the chat
    setMessages((prevMessages) => [...prevMessages, botResponse]);

    // Clear the input field after sending the message
    setInputMessage("");
  };

  const handleClearChat = () => {
    // Clear the chat messages
    setMessages([]);
  };

  return (

    <Box
      className="main-box"
      sx={{
        border: "3px solid #0000ff",
        borderRadius: "20px",
        width: "50%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        margin: "auto",
        marginTop: "50px",
        padding: "20px",
        // background-image: url("../assets/OIP3.jpg"), // Set the background image here
        // backgroundRepeat: "no-repeat", // Prevent image repetition
        // backgroundSize: "cover", // Adjust image size to cover the entire box
      }}
    >
      <div className="chat-container">
        <div className="chat-messages">
          {messages.map((message, index) => (
            <div key={index} className="chat-message">
              {message}
            </div>
          ))}
        </div>
        <div className="chat-input" style={{ marginTop: "20px" }}>
          <TextField
            fullWidth
            variant="outlined"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Type your message..."
          />
          <Button
            variant="contained"
            color="primary"
            onClick={handleSendMessage}
            style={{ marginLeft: "10px" }}
          >
            Send
          </Button>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleClearChat}
            style={{ marginLeft: "10px" }}
          >
            Clear
          </Button>
        </div>
      </div>
      <div style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}>
        <img src={Logo} alt="Logo" style={{ width: "100px", height: "100px" }} />
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",

        }}
      >
        <Button
          onClick={() => {
            setCurrentPage("home");
          }}
          variant="contained"
          color="primary"
          style={{
            borderRadius: "4px",
            marginLeft: "10px",
            backgroundColor: "#001489",
          }}
        >
          Back To Home
        </Button>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "20px",
        }}
      >
        <TransalateButton />
      </div>
    </Box>
  );
};

export default ChatPage;

