"use client";
import React, { useState } from "react";
import { NewWindow } from "../components";

const Test = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div>
      <h1>Yo Sem !</h1>
      <button onClick={() => setIsOpen(!isOpen)}>
        {!isOpen ? "Ouvrir une nouvelle fenêtre" : "Fermé"}
      </button>
      {isOpen && (
        <NewWindow onClose={() => setIsOpen(false)}>
          <p>Salut Sem !</p>
          <p>Voici une nouvelle fenêtre ! 👌</p>
        </NewWindow>
      )}
    </div>
  );
};

export default Test;
