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
    const [profit, setProfit] = useState(0);

    const handleNewClientEntry = (event) => {
        event.preventDefault();
        const formData = Object.fromEntries(new FormData(event.currentTarget).entries());
        setClients([...clients, { id: clients.length > 0 ? Math.max(...clients.map((client) => client.id)) + 1 : 1, name: formData.name, age: formData.age, pregnant: formData.pregnant ? 'is pregnant' : 'is not pregnant', bill: 0 }]);
        event.currentTarget.reset();
    };
    const handleProfit = (event) => {
        let clientId = parseInt(event.currentTarget.value);
        setProfit(profit + clients[clients.findIndex((client) => client.id === clientId)].bill);
        setClients(clients.filter((client) => client.id !== clientId));
    };

    return <Main profit={profit} beers={{ data: beers, setData: setBeers }} clients={{ data: clients, setData: setClients }} handleNewClientEntry={handleNewClientEntry} handleProfit={handleProfit} />;
}

export default App;
