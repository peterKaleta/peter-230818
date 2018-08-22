import React from 'react'
import PropTypes from 'prop-types'

class ListItem extends React.Component {
  static propTypes = {
    filename: PropTypes.string,
    onRemove: PropTypes.func,
    onChangeName: PropTypes.func,
  }

  constructor(props) {
    super(props)
    const { filename: initialFilename } = props
    this.state = {
      isEditing: false,
      tempName: initialFilename,
    }
  }

  startEdit = () => {
    this.setState({ isEditing: true })
  }

  onTempNameInputUpdate = (e) => {
    this.setState({ tempName: e.target.value })
  }

  onTempNameSubmit = () => {
    this.setState({ isEditing: false })
    this.props.onChangeName(this.props.filename, this.state.tempName)
  }

  renderLabel() {
    const { isEditing, tempName } = this.state
    const { filename } = this.props
    return isEditing
      ? <div>
          <input value={ tempName } onChange={ this.onTempNameInputUpdate }/>
          <button onClick={ this.onTempNameSubmit }>Save</button>
        </div>
      : <div onClick={ this.startEdit }>{ filename }</div>
  }

  render() {
    const { filename, onRemove } = this.props
    return (<div>
      { this.renderLabel() }
      <div onClick={ () => onRemove(filename) }>X</div>
    </div>)
  }
}

export default ListItem
