import React from 'react';
import preloader from "../../../assets/images/preloader.svg";

let Preloader = (props) => {
    return <div style={{ height: '200px' }}>
        <img src={preloader} />
    </div>
}

export default Preloader;