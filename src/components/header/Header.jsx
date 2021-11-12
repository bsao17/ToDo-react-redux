import React from 'react';

function Header(props) {
    return (
        <div className={"w-100"}>
            <div className={"card card-body mt-5 w-75 m-auto rounded-pill"}>
                <h1 className={"text-center"}>Apprendre à utiliser Redux et React-redux par l'exemple</h1>
            </div>
            <button className={"btn btn-success w-25 d-block m-auto mt-5"}>Show comments</button>
        </div>
    )
}


export default Header;