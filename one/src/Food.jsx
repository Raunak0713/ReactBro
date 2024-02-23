export function Food(){
    const food1 = "apple";
    const food2 = "banana";
    return(
        <ul>
            <li>Orange</li>
            <li>{food1}</li> {/*Use the value of food1 variable */}
            <li>{food2.toUpperCase()}</li> {/*Use the function to capitalize food2 variable*/}
        </ul>
    );
}