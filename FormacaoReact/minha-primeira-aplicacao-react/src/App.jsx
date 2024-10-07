// import { Flex, Text, Input, InputGroup, InputRightElement, Button } from "@chakra-ui/react";
// import React from "react";

// function App() {
//   const [show, setShow] = React.useState(false)
//   const handleClick = () => setShow(!show)
//   return (
//     <Flex
//       width={"100vw"}
//       height={"100vh"}
//       align={"start"}
//       justify={"center"}
//       direction={"column"}
//       gap={"1rem"}
//       padding={"20rem"}
//       color={"white"}
//       background={"black"}
//     >
//       <Text>Olá mundo!</Text>
//       <Input focusBorderColor="blue.400" placeholder="Digite seu e-mail" />
//       <InputGroup size="md">
//         <Input
//           pr="4.5rem"
//           type={show ? "text" : "password"}
//           placeholder="Enter password"
//         />
//         <InputRightElement width="4.5rem">
//           <Button h="1.75rem" size="sm" onClick={handleClick}>
//             {show ? "Hide" : "Show"}
//           </Button>
//         </InputRightElement>
//       </InputGroup>
//     </Flex>
//   );
// }

// export default App;

import { useState } from "react";

function App() {
  const [contador, setContador] = useState(0);

  function adicionarMaisUmContador(){
    setContador(contador + 1);
  }

  function retiraUmContador(){
    setContador(contador - 1);
  }

  return(
    <div>
      <h1>{contador}</h1>
      <span>
        <button onClick={adicionarMaisUmContador}>Adicionar</button>
        <button onClick={retiraUmContador}>Retirar</button>
      </span>
    </div>
  )
}

export default App;