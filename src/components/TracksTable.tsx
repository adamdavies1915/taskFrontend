import React, { useState, useEffect, ChangeEvent} from "react";
import { Table, Form, FormGroup, Label, Input } from "reactstrap";
import { Track } from "../types/Track";
import { fetchAllTracks, fetchTracksForArtist } from "../api/trackApi";

export function TracksTable() {
  const [tracks, setTracks] = useState<Array<Track>>([]);

  useEffect(() => {
    async function fetchData() {
      const tracks = await fetchAllTracks();
      setTracks(tracks);
    }
    fetchData();
  }, []);

  const onArtistFieldChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const tracks = await fetchTracksForArtist(event.target.value);
    setTracks(tracks);
  }

  return (
    <div>
      <Form>
        <FormGroup>
          <Label for="artist">Artist</Label>
          <Input
            type="text"
            name="artist"
            id="artistFilter"
            placeholder="Filter by artist"
            onChange={onArtistFieldChange}
          />
        </FormGroup>
      </Form>
      <Table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Artist</th>
            <th>Title</th>
          </tr>
        </thead>
        <tbody>
          {tracks.map((track) => {
            return (
              <tr key={track.id}>
                <td>{track.id}</td>
                <td>{track.artist}</td>
                <td>{track.title}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
}
