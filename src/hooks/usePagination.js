import { useMemo } from "react";

//don't know how to export this so that argument is passed correctly, for now hook is in the component itself, !!!!revisit later
export const allPages = (totalPages) => {
  useMemo(() => {
    const pagesArray = [];

    for (let i = 0; i < totalPages; i++) {
      pagesArray.push(i + 1);
    }
    return pagesArray;
  }, [totalPages]);
};
