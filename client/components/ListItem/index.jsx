import React from 'react'
import PropTypes from 'prop-types'

class ListItem extends React.Component {

  constructor(props) {
    super(props);
  }

  static propTypes = {
    filename: PropTypes.string,
    onRemove: PropTypes.func,
  }

  render() {
    const { filename, onRemove} = this.props
    return (<div>
      { filename }
      <div onClick={ () => onRemove(filename) }>X</div>
    </div>)
  }
}

export default ListItem
