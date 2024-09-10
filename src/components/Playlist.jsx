// Playlist Component
import React from 'react';
import PlayListItem from "./PlayListItem";

export default function Playlist({ songs }) {
  return (
    <div className="flex w-1/2 flex-col border-t p-6 sm:w-full md:border-l md:border-t-0">
      <h2 className="mb-4 text-lg font-semibold text-black">Playlist</h2>
      <div className="flex flex-col pr-4">
        {songs.map((song, index) => (
          <PlayListItem
            key={index}
            title={song.title}
            artist={song.artist}
            songLength={song.songLength}
            backgroundColor={song.backgroundColor}
          />
        ))}
      </div>
    </div>
  );
}
