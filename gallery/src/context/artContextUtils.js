import { createContext, useContext } from "react";

export const ArtContext = createContext();

export const useArt = () => useContext(ArtContext);