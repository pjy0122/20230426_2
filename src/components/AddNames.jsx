import { Input, Button } from "@chakra-ui/react";
import React, { useState } from "react";

export default function AddNames({ data, setData }) {
  const [name, setName] = useState("");

  const addNames = (e) => {
    e.preventDefault();
    if (name === "") {
      alert("값을 입력해 주세요!");
    } else {
      setData([...data, { option: name }]);
      setName("");
    }
  };

  const removeName = () => {
    if (data.length === 1) {
      alert("더이상 삭제할 수 없습니다!");
    } else {
      setData(data.slice(0, data.length - 1));
    }
  };

  return (
    <>
      <form onSubmit={addNames}>
        <Input
          placeholder="이름을 입력하세요."
          mt={"20px"}
          ml={"20px"}
          htmlSize={20}
          width="auto"
          isInvalid
          errorBorderColor="black"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <Button type="submit">추가</Button>
        <Button onClick={removeName}>삭제</Button>
      </form>
    </>
  );
}
