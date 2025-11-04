// src/context/ArtContext.jsx
import React, { createContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const STORAGE_KEY = "nag_art_v1";
const ArtContext = createContext();

const sampleArtIfEmpty = (list) => {
  if (list && list.length) return list;
  return [
    {
      id: uuidv4(),
      title: "Sunset Over Hills",
      description: "A warm acrylic sunset study",
      artist: "Nani",
      price: 499,
      image: null,
      createdAt: Date.now(),
      ratings: [],
      downloads: 0,
      featured: true,
    },
  ];
};

export const ArtProvider = ({ children }) => {
  const [arts, setArts] = useState(() => {
    try {
      const raw = JSON.parse(localStorage.getItem(STORAGE_KEY));
      return sampleArtIfEmpty(raw);
    } catch {
      return sampleArtIfEmpty([]);
    }
  });

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(arts));
  }, [arts]);

  const addArt = (art) => {
    setArts((p) => [{ ...art, id: uuidv4(), createdAt: Date.now(), ratings: [], downloads: 0 }, ...p]);
  };

  const updateArt = (id, updates) => {
    setArts((p) => p.map((a) => (a.id === id ? { ...a, ...updates } : a)));
  };

  const deleteArt = (id) => setArts((p) => p.filter((a) => a.id !== id));

  const addRating = (id, ratingObj) => {
    setArts((p) => p.map((a) => (a.id === id ? { ...a, ratings: [...a.ratings, ratingObj] } : a)));
  };

  return (
    <ArtContext.Provider value={{ arts, addArt, updateArt, deleteArt, addRating }}>
      {children}
    </ArtContext.Provider>
  );
};

