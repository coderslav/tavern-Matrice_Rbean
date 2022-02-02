function BeerCard(props) {
    return (
        <div className='row g-0'>
            <div className='col-md-4'>
                <img src={'./images/' + props.data.img} className='img-fluid rounded-start' alt='duff' />
            </div>
            <div className='col-md-8'>
                <div className='card-body'>
                    <h5 className='card-title'>{props.data.name}</h5>
                    <p className='card-text'>{props.data.price}$</p>
                    <p className='card-text'>
                        <small className='text-muted'>{props.data.stock}L</small>
                    </p>
                </div>
            </div>
        </div>
    );
}

export default BeerCard;
