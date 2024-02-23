import profile from './assets/profile.jpeg'

export function Card(){
    return(
        <div className="card">
            <img 
                src={profile}
                alt="profile pic" 
                className='cardImage'
            />
            <h2 className='cardTitle'>Raunak</h2>
            <p className='cardText'>Btech 3rd Year</p>
        </div>
    );
}