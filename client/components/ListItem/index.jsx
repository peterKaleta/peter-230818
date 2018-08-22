import React from 'react'
import PropTypes from 'prop-types'
import { Button, FormControl } from 'react-bootstrap'

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
      ? <div className="list-item-edit">
            <FormControl
              type="text"
              value={tempName}
              placeholder="Item Name"
              onChange={this.onTempNameInputUpdate}
            />
          <Button onClick={ this.onTempNameSubmit } bsStyle="info">Save</Button>
        </div>
      : <div className="list-item-label" onClick={ this.startEdit }>{ filename }</div>
  }

  render() {
    const { filename, onRemove } = this.props
    return (<div className="list-item">
      { this.renderLabel() }
      <Button onClick={ () => onRemove(filename) } bsStyle="danger">X</Button>
    </div>)
  }
}

export default ListItem
