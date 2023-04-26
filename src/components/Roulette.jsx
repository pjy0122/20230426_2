import React, { useState } from "react";
import { Wheel } from "react-custom-roulette";
import { Box, Button } from "@chakra-ui/react";
import AddNames from "./AddNames";

export default function Roulette() {
  const [mustSpin, setMustSpin] = useState(false);
  const [prizeNumber, setPrizeNumber] = useState(0);
  const [data, setData] = useState([{ option: "치킨" }, { option: "돈까스" }]);

  const handleSpinClick = () => {
    if (!mustSpin) {
      const newPrizeNumber = Math.floor(Math.random() * data.length);
      setPrizeNumber(newPrizeNumber);
      setMustSpin(true);
    }
  };

  return (
    <>
      <Box
        maxW="lg"
        borderWidth="1px"
        borderRadius="lg"
        overflow="hidden"
        bg="green.200"
        marginLeft={"11px"}
      >
        <AddNames data={data} setData={setData} />

        <Wheel
          mustStartSpinning={mustSpin}
          prizeNumber={prizeNumber}
          data={data}
          onStopSpinning={() => {
            setMustSpin(false);
          }}
          backgroundColors={["blue", "red", "green", "yellow"]}
        />

        <Button mb={"20px"} ml={"20px"} onClick={handleSpinClick}>
          SPIN
        </Button>
      </Box>
    </>
  );
}
