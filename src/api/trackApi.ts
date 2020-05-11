import axios from "axios";
import { Track } from "../types/Track";

export async function fetchAllTracks(): Promise<Track[]> {
  const response = await axios("http://localhost:3000/track/");
  return response.data;
}

export async function fetchTracksForArtist(artist: string): Promise<Track[]> {
  const response = await axios(`http://localhost:3000/track?artist=${artist}`);
  return response.data;
}
