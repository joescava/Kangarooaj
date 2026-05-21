import { useContext } from "react";
import { RegionContext } from "../context/regionContext";

export function useRegion() {
  const value = useContext(RegionContext);

  if (!value) {
    throw new Error("useRegion must be used inside RegionProvider");
  }

  return value;
}
