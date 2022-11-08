const React = require('react')

class Show extends React.Component {
  render () {
    const { name, color, isReadyToEat, _id } = this.props.veggetable
    const capName = name[0].toUpperCase() + name.substring(1)
    return (
      <>
        <h1> {capName} Show Page </h1>
        <nav>
          <a href='/veggetables'>Back To Veggetables Home</a>
          <a href={`/veggetables/${_id}/edit`}>{`Edit the ${capName}`}</a>
        </nav>
        <p>{capName} is {color} and {isReadyToEat ? 'it\'s ready to eat' : 'it\'s not ready to eat'}</p>
      </>
    )
  }
}

module.exports = Show

