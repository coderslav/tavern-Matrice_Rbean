function ClientsList(props) {
    return (
        <ul className='list-group mt-5'>
            {props.clients.length > 0 ? (
                props.clients.map((client, index) => (
                    <li className='list-group-item' key={index}>
                        <div>
                            <b>{client.name}</b>
                        </div>
                        <small className='text-muted'>
                            {client.age} - {client.pregnant}
                        </small>
                    </li>
                ))
            ) : (
                <></>
            )}
        </ul>
    );
}

export default ClientsList;
