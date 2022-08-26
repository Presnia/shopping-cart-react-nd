import React, {useState} from 'react';
import CountersList from "./components/countersList";
import Navbar from "./components/Navbar";
import { Items } from "./data/items";

const App = () => {
    const initialState = Items;
    const [counters, setCounters] = useState(initialState);

    const countersValues = () => {
        const values = counters.map(i => i.value)
        let x = 0;
        return values.map(num => x += num).reverse()[0];
    }
    return (
        <div className='container'>
            <Navbar sum={countersValues} />
            <CountersList
                initialState={initialState}
                counters={counters}
                setCounters={setCounters}
            />
        </div>
    );
};

export default App;