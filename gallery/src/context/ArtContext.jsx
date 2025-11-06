import React, { useState } from "react";
import { ArtContext } from "./artContextUtils";

export const ArtProvider = ({ children }) => {
  const [artworks, setArtworks] = useState([]);

  const addArt = (newArt) => setArtworks((prev) => [...prev, newArt]);

  return (
    <ArtContext.Provider value={{ artworks, addArt }}>
      {children}
    </ArtContext.Provider>
  );
};
