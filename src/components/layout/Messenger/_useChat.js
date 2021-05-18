import React, { useState, useContext, useEffect } from "react";
import { socket, SocketContext } from "../../../context/SocketContextProvider";

// const [messages, setMessages] = useState("");

const useChat = () => {
  const [messages, setMessages] = useState([]);
  console.log(messages);
  //const socketRef = useRef();
  useEffect(() => {
    //will run, (messages) get the lasted messages append more messages

    socket.on("newChatMessage", ({ message }) => {
      setMessages((messages) => [...messages, message]);
    });
    //ทำแบบนี้ เพราะuseEffect run first once message is emt array แต่ถ้าไม่ได้ใส่ current messages
    //เพราะทำแบบนี้เปนการใส่ add append emt arr ,we should append more messages จึงใช้ callback
    //setMessages([...messages, message])
    return () => {
      socket.disconnect();
    };
  }, []);

  const sendMessage = ({ message }) => {
    socket.emit("newChatMessage", {
      message,
    });
  };

  return { messages, sendMessage };
};

export default useChat;

// useEffect(() => {
//   socket.on("connect", function () {
//     socket.send("hi");

//     socket.on("newChatMessage", ({ message }) => {
//       setMessages((messages) => [...messages, message]);
//     });

//     //   socket.on("message", function (msg) {});
//     // })
//   });
//   return { messages, sendMessage };
// }, []);
// export default useChat;
