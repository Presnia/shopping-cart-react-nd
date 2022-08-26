import React from 'react';
import Counter from "./counter";
import { Items } from "../data/items";

const CountersList = () => {
    return (
        <div>
            {
                Items.map(item =>
                    <Counter key={item.id} {...item} />
                )
            }
        </div>
    );
};

export default CountersList;