import React from 'react';
import RingLoader from "react-spinners/RingLoader";

class Loader extends React.Component
{
    render()
    {
        return (
            <div className="loading">
                <i className="loading-load">
                    <RingLoader
                        size={70}
                        color={"#123abc"}
                        loading={true}
                    />
                </i>
                <h1>Carregando contatos...</h1>
            </div>
        );
    }
}

export default Loader;