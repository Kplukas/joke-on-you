function Reveal(joke){
    if (joke.type === 'single'){
        return (
            <div>
                <p className="part">{joke.joke}</p>
            </div>
        )
    } else if (joke.type === 'twopart'){
        return (
            <div>
                <p className="part">{joke.setup}</p>
                <p className="twopart">{joke.delivery}</p>
            </div>
        )
    }
}
export default Reveal;