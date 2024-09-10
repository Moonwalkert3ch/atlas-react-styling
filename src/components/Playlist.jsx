import React from 'react';
import PlayListItem from "./PlayListItem";

export default function Playlist() {
  // Hard-coded song data
  const songs = [
    { title: "Painted in Blue", artist: "Soul Canvas", songLength: "5:55" },
    { title: "Tidal Drift", artist: "Echoes of the Sea", songLength: "8:02" },
    { title: "Fading Shadows", artist: "The Emberlight", songLength: "3:01" },
    { title: "Cosmic Drift", artist: "Solar Flare", songLength: "5:01" },
    { title: "Urban Serenade", artist: "Midnight Groove", songLength: "4:54" },
    { title: "Whispers in the Wind", artist: "Rust & Ruin", songLength: "6:13" },
    { title: "Electric Fever", artist: "Neon Jungle", songLength: "8:41" },
    { title: "Edge of the Abyss", artist: "Steel Horizon", songLength: "2:27" },
    { title: "Golden Haze", artist: "Velvet Waves", songLength: "3:15" },
    { title: "Shatter the Silence", artist: "Thunderclap Echo", songLength: "8:22" }
  ];

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
          />
        ))}
      </div>
    </div>
  );
}
