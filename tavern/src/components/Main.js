import BeerCard from './BeerCard';
import AddClient from './AddClient';
import ClientsList from './ClientsList';

function Main(props) {
    return (
        <>
            <h1 className='text-center'>Moe's tavern</h1>
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
                            <ClientsList clients={props.clients.data} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Main;
