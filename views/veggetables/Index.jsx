const React = require('react')
const Default = require('../layouts/Default.jsx')

class Index extends React.Component {
  render () {
    const { logs } = this.props
    return (
      <Default title='Veggetables Index Page'>
        <ul>
          {
                        veggetables.map((veggetable) => {
                          const { name, color, isReadyToEat, _id } = veggetable
                          return (
                            <li key={_id}>
                              <a href={`/veggetables/${_id}`}>
                                {name}
                              </a> is {color}

                              <br />
                              {
                                        isReadyToEat
                                          ? 'It\'s ready to eat'
                                          : 'It\'s not ready to eat'
                                    }
                              <br />
                              <form method='POST' action={`/veggetables/${_id}?_method=DELETE`}>
                                <input type='submit' value={`Delete ${color} ${name}`} />
                              </form>
                            </li>
                          )
                        })
                    }
        </ul>
      </Default>
    )
  }
}

module.exports = Index
