import React from 'react'
import PropTypes from 'prop-types'

class SearchBar extends React.Component {

  static propTypes = {
    onUpdateQuery: PropTypes.func,
  }

  constructor(props) {
    super(props)
    const { filename: initialFilename } = props
    this.state = {
      query: '',
    }
  }

  startEdit = () => {
    this.setState({ isEditing: true })
  }
  onUpdateQuery = (e) => {
    const query = e.target.value;
    this.setState({ query })
    this.props.onUpdate(query)
  }

  render() {
    const { query } = this.state
    return (<div>
      <input value={ query } onChange={ this.onUpdateQuery }/>
    </div>)
  }
}

export default SearchBar
