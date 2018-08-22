import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import ImmutablePropTypes from 'react-immutable-proptypes'
import { connect } from 'react-redux'
import Dropzone from 'react-dropzone'
import * as storeActions from '../../actions/storage'

const ListItem = ({ filename, onRemove }) =>
  <div>
    { filename }
    <div onClick={ () => onRemove(filename) }>X</div>
  </div>

ListItem.propTypes = {
  filename: PropTypes.string,
  onRemove: PropTypes.func,
}

class StorageListPage extends React.Component {
  static propTypes = {
    loading: PropTypes.bool,
    files: ImmutablePropTypes.list,
    fetchStorageList: PropTypes.func,
    removeStorageItem: PropTypes.func,
    uploadStorageItem: PropTypes.func,

  }

  static defaultProps = {
    loading: true,
    files: [],
  }

  componentDidMount() {
    this.props.fetchStorageList()
  }

  renderListItems = () => this.props.files.map((item, i) =>
    <ListItem key={ i } onRemove={ this.props.removeStorageItem } { ...item }/>)

  render() {
    return (
      <Fragment>
        <Dropzone onDrop={ this.props.uploadStorageItem }/>
        { this.renderListItems() }
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  loading: state.getIn(['storage', 'loading']),
  files: state.getIn(['storage', 'files']),
})

const mapDispatchToProps = {
  fetchStorageList: storeActions.fetchStorageList,
  removeStorageItem: storeActions.removeStorageItem,
  uploadStorageItem: storeActions.uploadStorageItem,
}

export default connect(mapStateToProps, mapDispatchToProps)(StorageListPage)
