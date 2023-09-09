export function Events(props) {
    const registrationUrl = props.register;
    return (
        <div className="eventsList">
            <div key={props.id} className='eventCard'>
                <img src={props.image} alt='eventPoster' className='eventPoster'></img>
                <div className='eventContent'>
                    <h2 className='eventName'>{props.name}</h2>
                    <div className='eventInfo'>
                        <h3>{props.details}</h3>
                    </div>
                </div>
            </div>
            <a href={registrationUrl} className='eventButton' target="_blank" rel="noopener noreferrer">Register</a>
        </div>
    )
};

export default Events;