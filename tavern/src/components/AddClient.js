function AddClient(props) {
    return (
        <form onSubmit={props.handleNewClientEntry}>
            <h6 className='mb-2 text-center'>Add new client</h6>
            <div className='input-group mb-1'>
                <div className='input-group-prepend' style={{ width: '25%' }}>
                    <span className='input-group-text'>Name</span>
                </div>
                <input type='text' name='name' required='required' className='form-control' />
            </div>
            <div className='input-group mb-1'>
                <div className='input-group-prepend' style={{ width: '25%' }}>
                    <span className='input-group-text'>Age</span>
                </div>
                <select className='form-select' name='age' required aria-label='Default select example'>
                    <option></option>
                    <option value='<18'> &lt;18 </option>
                    <option value='18-30'>18-30</option>
                    <option value='31-50'>31-50</option>
                    <option value='51-70'>51-70</option>
                    <option value='71>'>70+</option>
                </select>
                <input type='checkbox' name='pregnant' className='btn-check' id='btn-check-outlined' autoComplete='off' />
                <label className='btn btn-outline-primary' htmlFor='btn-check-outlined'>
                    Pregnant ?
                </label>
            </div>
            <div className='d-grid'>
                <button type='submit' className='btn btn-outline-success'>
                    Add client
                </button>
            </div>
        </form>
    );
}

export default AddClient;
