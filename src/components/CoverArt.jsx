import React from "react";
import coverArt from '../assets/placeholder.svg';

export function CoverArt() {
    return (
      <div className="flex flex-col items-center">
        <img src={coverArt} alt="Cover Art" className="w-48 h-48 object-cover" />
        <p className="mt-4 text-red-500">This is a red text under the cover art</p>
      </div>
    );
  }