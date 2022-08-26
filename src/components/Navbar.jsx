import React from 'react';

const Navbar = () => {
    return (
        <nav
            className='navbar px-5 w-50 m-auto text-secondary'
            style={{backgroundColor: '#efefef', borderRadius: '20px'}}
        >
            <h3>Navbar</h3>
            <div
                className='navbar-cart d-flex p-3 mb-10'
                style={{position: 'relative'}}
            >
                <h3 className='text-primary'>Cart</h3>
                <span
                    className='nav-counter w-25 d-flex'
                    style={{
                        width: '150px',
                        height: '22px',
                        color: 'white',
                        position: 'absolute',
                        top: '0',
                        right: '0',
                        backgroundColor: 'red',
                        borderRadius: '50%',
                        justifyContent: 'center'
                    }}
                >
                        <span className='fw-semibold'>0</span>
                    </span>
            </div>
        </nav>
    )
};

export default Navbar;