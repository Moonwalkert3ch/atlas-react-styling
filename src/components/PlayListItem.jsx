import React from "react";

export default function PlayListItem({ title, artist, songLength }) {
  return (
    <div className="flex flex-col justify-center p-4 relative">
      <div className="flex flex-col">
        <p className="text-sm font-medium text-slate-500">{title}</p>
        <p className="text-sm font-medium text-black">{artist}</p>
      </div>
      <p className="text-sm font-medium text-black">{songLength}</p>
    </div>
  );
}
