import React from 'react';
import { Link } from 'react-router';



// Stateless functional component

export default () => {
    return (
        <div className="boxed-view">
            <div className="boxed-view__box">
                <h1>Page not Found</h1>
                <p>Hmmm, we're unable to find that page.</p>
                <Link to={`/`} className="button button--link">Head Home</Link>

            </div>
        </div>
    )
}