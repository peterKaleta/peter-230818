import React from 'react'
import PropTypes from 'prop-types'
import { FormControl } from 'react-bootstrap'
import * as styles from './styles.scss'

class SearchBar extends React.Component {
  static propTypes = {
    onUpdateQuery: PropTypes.func,
    onUpdate: PropTypes.func,
  }

  constructor(props) {
    super(props)
    this.state = {
      query: '',
    }
  }

  startEdit = () => {
    this.setState({ isEditing: true })
  }

  onUpdateQuery = (e) => {
    const query = e.target.value
    this.setState({ query })
    this.props.onUpdate(query)
  }

  render() {
    const { query } = this.state
    return (<div className={ styles.searchBarWrapper }>
      <FormControl
        type="text"
        value={query}
        placeholder="Search storage"
        onChange={this.onUpdateQuery}
      />
    </div>)
  }
}

export default SearchBar
