import React from "react";
import ButtonCart from "./ButtonCart";

const Counter = ({ id, title, disabled, value, handleCartButton, onIncrement, onDecrement }) => {
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
                    onClick={() => onIncrement(id)}
                >
                    +
                </button>
                <button
                    className='btn btn-primary btn-sm rounded-end'
                    style={{height: '38px', width: '38px', fontSize: '20px'}}
                    disabled={formatDisabled()}
                    onClick={() => onDecrement(id)}
                >
                    -
                </button>
            </div>
            <ButtonCart id={id} handleCartButton={handleCartButton} />
        </div>
    );
};

export default Counter;
