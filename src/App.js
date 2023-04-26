import { ChakraProvider } from "@chakra-ui/react";
import Roulette from "@components/Roulette";


function App() {
  return (
    <>
      <ChakraProvider>
        <Roulette />
      </ChakraProvider>
    </>
  );
}

export default App;
