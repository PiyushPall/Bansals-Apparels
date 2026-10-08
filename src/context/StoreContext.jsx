import React, { createContext, useContext, useState, useEffect } from 'react';
import { FRESH_ARRIVALS } from '../data/storeData.js';

const StoreContext = createContext(undefined);

export const StoreProvider = ({ children }) => {
  // Pre-populate with 1-2 favorites for immediate showcase
  const [wishlist, setWishlist] = useState(() => {
    try {
      const saved = localStorage.getItem('bansals_wishlist');
      if (saved) return JSON.parse(saved);
      return FRESH_ARRIVALS.slice(0, 1);
    } catch {
      return FRESH_ARRIVALS.slice(0, 1);
    }
  });

  const [bag, setBag] = useState(() => {
    try {
      const saved = localStorage.getItem('bansals_inquiry_bag');
      if (saved) return JSON.parse(saved);
      return [];
    } catch {
      return [];
    }
  });

  const [searchOpen, setSearchOpen] = useState(false);
  const [wishlistDrawerOpen, setWishlistDrawerOpen] = useState(false);
  const [bagDrawerOpen, setBagDrawerOpen] = useState(false);
  const [storeInfoModalOpen, setStoreInfoModalOpen] = useState(false);

  useEffect(() => {
    try {
      localStorage.setItem('bansals_wishlist', JSON.stringify(wishlist));
    } catch {}
  }, [wishlist]);

  useEffect(() => {
    try {
      localStorage.setItem('bansals_inquiry_bag', JSON.stringify(bag));
    } catch {}
  }, [bag]);

  const addToWishlist = (item) => {
    setWishlist((prev) => (prev.some((p) => p.id === item.id) ? prev : [...prev, item]));
  };

  const removeFromWishlist = (id) => {
    setWishlist((prev) => prev.filter((p) => p.id !== id));
  };

  const isInWishlist = (id) => wishlist.some((p) => p.id === id);

  const addToBag = (item) => {
    setBag((prev) => (prev.some((p) => p.id === item.id) ? prev : [...prev, item]));
  };

  const removeFromBag = (id) => {
    setBag((prev) => prev.filter((p) => p.id !== id));
  };

  const isInBag = (id) => bag.some((p) => p.id === id);

  return (
    <StoreContext.Provider
      value={{
        wishlist,
        addToWishlist,
        removeFromWishlist,
        isInWishlist,
        bag,
        addToBag,
        removeFromBag,
        isInBag,
        searchOpen,
        setSearchOpen,
        wishlistDrawerOpen,
        setWishlistDrawerOpen,
        bagDrawerOpen,
        setBagDrawerOpen,
        storeInfoModalOpen,
        setStoreInfoModalOpen,
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
};
