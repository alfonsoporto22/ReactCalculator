import { useEffect, useState, useRef } from 'react';
import './History.css';

function History({results}) {

    const liArray = results.map(
        element => <li>{element}</li>
    )
    return (
        <ul>
            {liArray}
        </ul>
    );

}

export default History;