import React from "react";

export default function PlayListItem() {
  const title = "Electric Fever";
  const artist = "Neon Jungle";
  const songLength = "8:41";
  const genre = "IKD";

  return (
    <div className="flex flex-col justify-center p-4 relative">
      <div className="flex flex-col">
        <p className="text-sm font-medium text-slate-500">{title}</p>
        <p className="text-sm font-medium text-black">{artist}</p>
      </div>
      <p className="absolute right-0 top-1/2 transform -translate-y-1/2 text-sm font-medium text-slate-500">{songLength}</p>
    </div>
  );
}
