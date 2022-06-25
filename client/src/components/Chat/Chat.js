import * as React from "react";
import io from "socket.io-client";
import { useState } from "react";
import Conver from "./Conver";
import "./Chat.css";

const socket = io.connect("http://localhost:5000");

export default function Chat() {
  const [username, setUsername] = useState("");
  const [room, setRoom] = useState("");

  const joinRoom = () => {
    if (username !== "" && room !== "") {
      socket.emit("join_room", room);
    }
  };

  return (
    <div className='Chat'>
      <h3>Join A Chat</h3>
      <input
        type='text'
        placeholder='User Name'
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      ></input>
      <input
        type='text'
        placeholder='Room'
        onChange={(event) => {
          setRoom(event.target.value);
        }}
      ></input>
      <button onClick={joinRoom}>Join A Room</button>

      <Conver socket={socket} username={username} room={room} />
    </div>
  );
}
