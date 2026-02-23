"use client";

import React, { createContext, useContext, useState, ReactNode } from "react";

interface FMPlayerContextType {
  isPlaying: boolean;
  setIsPlaying: (playing: boolean) => void;
}

const FMPlayerContext = createContext<FMPlayerContextType | undefined>(
  undefined
);

export function FMPlayerProvider({ children }: { children: ReactNode }) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <FMPlayerContext.Provider value={{ isPlaying, setIsPlaying }}>
      {children}
    </FMPlayerContext.Provider>
  );
}

export function useFMPlayer() {
  const context = useContext(FMPlayerContext);
  if (context === undefined) {
    throw new Error("useFMPlayer must be used within FMPlayerProvider");
  }
  return context;
}
