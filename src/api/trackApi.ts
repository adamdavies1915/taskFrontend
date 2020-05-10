import axios from 'axios'
import { Track } from '../types/Track';

export async function fetchAllTracks() : Promise<Track[]> {
    
  const response = await axios(
      'http://localhost:3000/track/',
    );
    return response.data;
}