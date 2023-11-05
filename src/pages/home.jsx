import React from "react";
import { ChakraProvider, Button, Box, Text, Heading, Flex } from "@chakra-ui/react";
import { ChangeEvent } from 'react';
import { useState } from 'react';
import axios from 'axios';

var myHeaders = new Headers();
myHeaders.append("api-key", "1693862365854x357554743587379400");
myHeaders.append("Content-Type", "application/json");

var raw = JSON.stringify({
  "id": "DOCUMENT ID GOES HERE",
  "content": "React.js, often simply referred to as React, is a popular and widely-used JavaScript library for building user interfaces. Developed and maintained by Facebook, React has gained immense popularity for its efficiency and flexibility in creating interactive and dynamic web applications. What sets React apart is its component-based architecture, allowing developers to break down complex UIs into smaller, reusable building blocks. These components are easy to manage and update, thanks to React's virtual DOM, which efficiently updates only the parts of the user interface that have changed. React also excels in its ability to seamlessly integrate with other libraries and frameworks, ",
  "readability": "High School",
  "purpose": "General Writing",
  "strength": "More Human"
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://api.undetectable.ai/document", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));

function HomePage() {

    

    

    return (
        <Flex>
            <Heading>Hello Bitches</Heading>
        </Flex>
    );
}
export default HomePage;