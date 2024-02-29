import { Box, Typography } from "@mui/material";
import "../styles/HomePage.css";
import ButtonComp from "./ButtonComp";
import LogoBlack from "../assets/OIP.jpg";
import TransalateButton from "./TranslateButton";

interface Props {
  setCurrentPage: React.Dispatch<React.SetStateAction<string>>;
}

const HomePage = ({ setCurrentPage }: Props) => {
  return (
    <div className="page-div">
      <Typography
        variant="h2"
       
      >
        <div className="header-container">
          <span className="saffron"> Welcome</span>{" "}
          <span className="blue">To</span>{" "}
          <span className="white">CPGRAMS</span>
          <span className="green">ASSISTANT</span>
        </div>
      </Typography>
      <Box sx={{ height: "8vh", width: "auto", paddingTop: "5vh" }}>
        <img className="logo" src={LogoBlack} alt="Logo"></img>
      </Box>
      <Box
        className="main-box"
        sx={{
          border: "20px solid 	#00BFFF",
          borderRadius: "8px",
          width: "50%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          marginTop: "17vh",
        }}
      >
        <Typography
          variant="h4"
          style={{
            color: "black",
            display: "flex",
            justifyContent: "center",
            fontFamily: "sans-serif",
            marginTop: "2rem",
          }}
        >
          Choose any Option 
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            padding: "2rem",
            justifyContent: "center",
            gap: "10%",
            marginBottom: "0.8rem",
          }}
        >
          <ButtonComp
            buttonText={"Submit here your Complaint"}
            onClick={() => {
              setCurrentPage("complaint-page");
            }}
            buttonForeground={"	#800000"}
            buttonBackground={"inherit"}
            buttonForegroundHover={"inherit"}
            buttonBackgroundHover={"	#800000"}
            borderClr={"	#800000"}
          ></ButtonComp>
          <ButtonComp
            buttonText={"Your Personal AI Assistant"}
            onClick={() => {
              setCurrentPage("chat-page");
            }}
            buttonForeground={"#9370DB"}
            buttonBackground={"inherit"}
            buttonForegroundHover={"inherit"}
            buttonBackgroundHover={"#9370DB"}
            borderClr={"#9370DB"}
          ></ButtonComp>
        </Box>
      </Box>
      <Box sx={{ paddingTop: "2rem" }}>
        <TransalateButton />
      </Box>
    </div>
  );
};

export default HomePage;
