import { useState } from 'react';
import '../styles/App.css';
import Main from './Main';

function App() {
    const [beers, setBeers] = useState([
        { name: 'Duff', stock: 40, price: 4, img: 'duff.png' },
        { name: 'Duff Original', stock: 20, price: 5, img: 'duff_original.png' },
        { name: 'Duff Premium', stock: 20, price: 7, img: 'duff_premium.png' },
    ]);
    const [clients, setClients] = useState([]);

    const handleNewClientEntry = (event) => {
        event.preventDefault();
        const formData = Object.fromEntries(new FormData(event.currentTarget).entries());
        setClients([...clients, { name: formData.name, age: formData.age, pregnant: formData.pregnant ? 'is pregnant' : 'is not pregnant' }]);
        event.currentTarget.reset();
    };

    return <Main beers={{ data: beers, setData: setBeers }} clients={{ data: clients, setData: setClients }} handleNewClientEntry={handleNewClientEntry} />;
}

export default App;
