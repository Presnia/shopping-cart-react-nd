import React, { useState } from "react";
import ButtonCart from "./buttonCart";

const Counter = ({ id, title, disabled, handleCartButton }) => {
    const [value, setValue] = useState(0);

    const formatValue = () => {
        return value === 0 ? "empty" : value;
    };

    const formatDisabled = () => {
        return value === 0 ? disabled = true : disabled = false;
    }

    const getBadgeClasses = () => {
        let classes = "badge m-2 ";
        classes += value === 0 ? "bg-warning" : "bg-primary";
        return classes;
    };

    const handleIncrement = () => {
        setValue((prevState) => prevState + 1);
    };
    const handleDecrement = () => {
        setValue((prevState) => prevState - 1);
    };

    return (
        <div
            className='d-flex justify-content-between align-items-center my-1'
            style={{height: '40px'}}
        >
            <span className='w-75'>{title}</span>
            <span className={getBadgeClasses()}>{formatValue()}</span>
            <div className='d-flex bg-primary rounded'>
                <button
                    className='btn btn-primary btn-sm rounded-start'
                    style={{height: '38px', width: '38px', fontSize: '20px'}}
                    onClick={handleIncrement}
                >
                    +
                </button>
                <button
                    className='btn btn-primary btn-sm rounded-end'
                    style={{height: '38px', width: '38px', fontSize: '20px'}}
                    disabled={formatDisabled()}
                    onClick={handleDecrement}
                >
                    -
                </button>
            </div>
            <ButtonCart id={id} handleCartButton={handleCartButton} />
        </div>
    );
};

export default Counter;
