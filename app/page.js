"use client";
import { useState } from "react";
import Card from "@/components/Card";
import About from "./about/page";
import Projects from "./about/projects/page";


export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [names, setNames] = useState(["Jake", "Heather", "John", "Christy"]);
  const name = "Cowboy";

  const handleClick = () => {
    setIsVisible(!isVisible);
  };
  const handleAdd = () => {
    setNames([...names, "New Name"])
  }

  const cards =
    isVisible && names.map((name, index) => <Card key={index}>{name}</Card>);

  return (
    <>
      <div className="p-20 space-y-4">
        <div className="">Hello {name}!</div>
        {cards}
        <div className="flex justify-around space-x-4">
          <button type="button" className="border rounded-lg bg-blue-500 border-blue-300 p-4" onClick={handleClick}>
            {isVisible ? "Hide" : "Show"}
          </button>
          <button type="button" className="border rounded-lg bg-blue-500 border-blue-300 p-4" onClick={handleAdd}>
            Add Name
          </button>
        </div>
      </div>
    </>
  );
}
