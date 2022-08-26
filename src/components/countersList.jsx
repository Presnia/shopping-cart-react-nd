import React from 'react';
import Counter from "./counter";
import ButtonRefresh from "./ButtonRefresh";

const CountersList = ({ initialState, counters, setCounters }) => {

    const handleCartButton = (itemId) => {
        setCounters(counters.filter(item => item.id !== itemId));
    }
    const handleReset = () => {
        const newCounters = [...counters];
        newCounters.map(i => i.value = 0)
        setCounters(newCounters);
    }

    const handleRefresh = () => {
        setCounters(initialState);
    }

    const handleIncrement = (id) => {
        const elementIndex = counters.findIndex(item => item.id === id);
        const newCounters = [...counters];
        newCounters[elementIndex].value++;
        setCounters(newCounters);
    }
    const handleDecrement = (id) => {
        const elementIndex = counters.findIndex(item => item.id === id);
        const newCounters = [...counters];
        newCounters[elementIndex].value--;
        setCounters(newCounters);
    }

    return (
        <div className='w-50 mt-2 m-auto'>
            {
                counters.map(item =>
                    <Counter
                        key={item.id}
                        value={item.value}
                        {...item}
                        handleCartButton={handleCartButton}
                        onIncrement={handleIncrement}
                        onDecrement={handleDecrement}
                    />
                )
            }
            <div className='d-flex flex-row-reverse mt-3'>
                <ButtonRefresh handleRefresh={handleRefresh} />
                <button className="btn btn-primary btn-sm me-1 p-3" onClick={handleReset}>
                    Reset
                </button>
            </div>
        </div>
    );
};

export default CountersList;