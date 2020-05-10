import React from "react";
import {TracksTable} from '../components/TracksTable'

function TracksPage() {

    return (
        <div className="App container py-3">
            <h1>Tracks</h1>
           <TracksTable/>
        </div>
    );
}

export default TracksPage;