import React from 'react';
import Cards from './Cards';


const CardList = ({ robots }) => {
    return (
        <>
            {
                robots.map((user, i) => {
                    return (
                        <Cards
                            id={robots[i].id}
                            name={robots[i].name}
                            email={robots[i].email}
                        />
                    );
                })
            }
        </>
    );
}

export default CardList;