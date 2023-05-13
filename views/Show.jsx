const React = require('react')
class Show extends React.Component {
    
    render() {
        console.log(this.props)
        return (
            
        <div>
            <h1>Gotta Catch 'Em All</h1>
            <h2>{this.props.pokemon.name}</h2>
            <a href="/pokemon">Back</a>
            <img src={`http://img.pokemondb.net/artwork/${this.props.pokemon.name}.jpg`} />
        </div>
        )
    }
}
module.exports = Show