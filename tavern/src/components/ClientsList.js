function ClientsList(props) {
    return (
        <ul className='list-group mt-5'>
            {props.clients.length > 0 ? (
                props.clients.map((client, index) => (
                    <li className='list-group-item' key={index}>
                        <div>
                            <b>
                                {client.name} {client.bill}$
                            </b>
                        </div>
                        <small className='text-muted'>
                            {client.age} - {client.pregnant}
                        </small>
                        {client.age === '<18' || client.pregnant === 'is pregnant' ? (
                            <></>
                        ) : (
                            <div className='btn-group d-block btn-group-sm' role='group' aria-label='Basic mixed styles example'>
                                <button type='button' name='Duff' value={client.id} onClick={props.buyBeerHandler} className='btn btn-success'>
                                    Duff
                                </button>
                                <button type='button' name='Duff Original' value={client.id} onClick={props.buyBeerHandler} className='btn btn-warning'>
                                    Duff Original
                                </button>
                                <button type='button' name='Duff Premium' value={client.id} onClick={props.buyBeerHandler} className='btn btn-danger rounded-end'>
                                    Duff Premium
                                </button>
                                <button type='button' value={client.id} onClick={props.handleProfit} className='btn btn-primary ms-3 rounded-1'>
                                    Pay
                                </button>
                            </div>
                        )}
                    </li>
                ))
            ) : (
                <></>
            )}
        </ul>
    );
}

export default ClientsList;
