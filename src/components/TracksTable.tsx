import React, { useState, useEffect } from "react";
import { Table } from "reactstrap";
import { Track } from "../types/Track";
import { fetchAllTracks } from "../api/trackApi";

export function TracksTable() {
    const [tracks, setTracks] = useState([] as Track[]);
    
    useEffect(() => {
        async function fetchData() {
          const tracks = await fetchAllTracks();
          setTracks(tracks);
        }
        fetchData();
      }, []);

    return (
        <div>
            <Table>
                <thead>
                    <tr>
                    <th>ID</th>
                    <th>Artist</th>
                    <th>Title</th>
                    </tr>
                </thead>
                <tbody>
                {tracks.map((track, index) => {
                    return <tr key={index}>
                        <td>{track.id}</td>
                        <td>{track.artist}</td>
                        <td>{track.title}</td>
                        </tr>
                })}
                </tbody>
            </Table>
        </div>
    );
}