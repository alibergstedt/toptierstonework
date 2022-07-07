import React from "react";

export const jumpToPage = (itemElement: string) => {
    const yOffset = -90; 
    const element = document.getElementById(itemElement);
    const y = element && element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    if (y)
    window.scrollTo({top: y, behavior: 'smooth'});
};