import { render } from "@testing-library/react";
import React, { useState, useEffect, useRef } from "react";
import NameList from "./NameList";

export default function App() {
  const [name, setName] = useState('');
  const prevName = useRef('');

  useEffect(() => {
    prevName.current = name;
  },[name])

  render(prevName.current) {
    return (
      <div>
        <NameList />
      </div>
    );
  }}