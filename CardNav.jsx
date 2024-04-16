import React from 'react';

const CardNav = () => {
    return (
        <div class="container m-3">
            <nav className="navbar bg-body-tertiary">
                <div className="container-fluid">
                    <b><a className="navbar-brand">PRODUCT</a></b>
                    <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-info" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </div>

        
    );
};

export default CardNav;
