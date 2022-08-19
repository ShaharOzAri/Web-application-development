import { Button } from "@mui/material";
import React, { useEffect } from "react";
import { FiMessageCircle } from "react-icons/fi";
import { useAuth } from "../Utils/auth";
import { useNavigate, useParams } from "react-router-dom";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";

import { getUserById, updateUser } from "../../controller/UserController";

function ChatIcon() {
  const navigate = useNavigate();
  const auth = useAuth();
  const loginUser = JSON.parse(auth.getUser());
  var id;

  useEffect(() => {
    if (loginUser != null) {
      const id = loginUser._id;
    }
  });

  const handleStartChat = async () => {
    var user;
    if (loginUser.role == "client") {
      var recivedUser = await getUserById(id);

      if (recivedUser.status == 200) {
        user = recivedUser.data.msg;
        user.chat = true;
      }
    }
    const response = await updateUser(user);
    console.log(user);
    if (response.status == 200) {
      navigate("/chat");
    } else {
      alert("something went wrong");
    }
  };

  // const startAndNav = async () =>{
  //   console.log("works")
  //   navigate('/chat');
  //     //handleStartChat();

  // }

  return (
    <Button onClick={handleStartChat}>
      <ChatBubbleOutlineOutlinedIcon
        sx={{ fontSize: "40px", color: "black" }}
      ></ChatBubbleOutlineOutlinedIcon>
      {/* <FiMessageCircle size="4em" color="cornflowerblue" /> */}
    </Button>
  );
}

export default ChatIcon;
