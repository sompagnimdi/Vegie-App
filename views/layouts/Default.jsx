const React = require('react')

class Default extends React.Component {
  render () {
    return (
      <html>
        <head>
          <link rel='stylesheet' href='/css/app.css' />
          <title>Vegetables</title>
        </head>
        <body>
          <nav>
            <a href='/veggetables'>Go to Home Page For Vegetables</a>
            <a href='/veggetables/new'>Create a New Vegetable</a>
          </nav>
          <h1>
            {this.props.title}
          </h1>

          {this.props.children}
        </body>
      </html>
    )
  }
}

module.exports = Default
