import React, {Fragment, useState, useEffect} from "react";

const GetUsers = () => {
  
  //use effect is used everytime a component is rendered. It keeps running it will keep making multiple request and to ensure it only makes one request at a time add a []
  useEffect(() => {
    getUsers();
  },[]);
}
export default GetUsers;

