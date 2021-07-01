import React from 'react';


const card = ({ id, name, email }) => {
    return (
        <div className='tc bg-light-green dib br3 ma3 pa3 grow bw2 shadow-5 h-auto w-auto'>
            <img src={`https://robohash.org/${id}`} alt='robots' width='280' height='250' />



            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>

        </div>
    );
}

export default card;
