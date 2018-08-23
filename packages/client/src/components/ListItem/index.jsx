import React from 'react'
import PropTypes from 'prop-types'
import { Button, FormControl } from 'react-bootstrap'
import * as styles from './styles.scss'

class ListItem extends React.Component {
  static propTypes = {
    item: PropTypes.object,
    onRemove: PropTypes.func,
    onChangeName: PropTypes.func,
  }

  constructor(props) {
    super(props)
    const { item: { filename: initialFilename } } = props
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
    this.props.onChangeName(this.props.item, this.state.tempName)
  }

  renderLabel() {
    const { isEditing, tempName } = this.state
    const { item } = this.props
    return isEditing
      ? <div className={ styles.listItemEdit }>
            <FormControl
              type="text"
              value={tempName}
              placeholder="Item Name"
              onChange={this.onTempNameInputUpdate}
            />
          <Button onClick={ this.onTempNameSubmit } bsStyle="info">Save</Button>
        </div>
      : <div className={ styles.listItemLabel } onClick={ this.startEdit }>{ item.filename }</div>
  }

  render() {
    const { item, onRemove } = this.props
    return (<div className={ styles.listItem }>
      { this.renderLabel() }
      <Button onClick={ () => onRemove(item) } bsStyle="danger">X</Button>
    </div>)
  }
}

export default ListItem
