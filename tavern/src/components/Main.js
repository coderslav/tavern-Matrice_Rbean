import BeerCard from './BeerCard';
import AddClient from './AddClient';
import ClientsList from './ClientsList';

function Main(props) {
    const buyBeerHandler = (event) => {
        let clientIndex = props.clients.data.findIndex((client) => client.id === parseInt(event.currentTarget.value));
        let beerIndex = props.beers.data.findIndex((beer) => beer.name === event.currentTarget.name);
        let clientsCopy = props.clients.data.map((client) => {
            return { ...client };
        });
        let beersCopy = props.beers.data.map((beer) => {
            return { ...beer };
        });
        clientsCopy[clientIndex].bill += beersCopy[beerIndex].price;
        beersCopy[beerIndex].stock -= 0.5;
        props.clients.setData(clientsCopy);
        props.beers.setData(beersCopy);
    };
    return (
        <>
            <h1 className='text-center'>Moe's tavern: {props.profit}$</h1>
            <div className='row p-2'>
                <div className='col-sm-6'>
                    <div className='card'>
                        <div className='card-body'>
                            <h5 className='card-title text-center mb-5'>
                                <b>Beers</b>
                            </h5>
                            <div className='card mb-3'>
                                {props.beers.data.map((beer, index) => (
                                    <BeerCard data={beer} key={index} />
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-sm-6'>
                    <div className='card'>
                        <div className='card-body'>
                            <h5 className='card-title text-center mb-5'>
                                <b>Clients</b>
                            </h5>
                            <AddClient handleNewClientEntry={props.handleNewClientEntry} />
                            <ClientsList clients={props.clients.data} buyBeerHandler={buyBeerHandler} handleProfit={props.handleProfit} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Main;
