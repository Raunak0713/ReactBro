import profile from './assets/profile.jpeg'

export function Card(){
    return(
        <div className="card">
            <img src={profile}
            alt="profile pic"></img>
            <h2>Raunak</h2>
            <p>Btech 3rd Year</p>
        </div>
    );
}