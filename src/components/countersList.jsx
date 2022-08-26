import React, {useState} from 'react';
import Counter from "./counter";
import { Items } from "../data/items";

const CountersList = () => {
    const [row, setRow] = useState(Items);

    const handleCartButton = (itemId) => {
        setRow(row.filter(item => item.id !== itemId));
    }

    return (
        <div className='container w-50 mt-2'>
            {
                row.map(item =>
                    <Counter key={item.id} {...item} handleCartButton={handleCartButton} />
                )
            }
        </div>
    );
};

export default CountersList;