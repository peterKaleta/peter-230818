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
      type: '',
    }
  }

  startEdit = () => {
    this.setState({ isEditing: true })
  }

  onUpdateNameQuery = (e) => {
    const query = e.target.value
    const { type } = this.state
    this.setState({ query })
    this.props.onUpdate(query, type)
  }

  onUpdateTypeQuery = (e) => {
    const type = e.target.value
    const { query } = this.state
    this.setState({ type })
    this.props.onUpdate(query, type)
  }


  render() {
    const { query, type } = this.state
    return (<div className={ styles.searchBarWrapper }>
      <FormControl
        type="text"
        value={query}
        placeholder="Search storage"
        onChange={this.onUpdateNameQuery}
      />
      <FormControl
        value={ type }
        className={ styles.typeQueryWrapper }
        componentClass="select"
        onChange={this.onUpdateTypeQuery }
        placeholder="All" >
          <option value="">All</option>
          <option value="pdf">pdf</option>
          <option value="txt">txt</option>
      </FormControl>
    </div>)
  }
}

export default SearchBar
