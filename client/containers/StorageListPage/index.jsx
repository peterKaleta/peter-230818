import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import ImmutablePropTypes from 'react-immutable-proptypes'
import { connect } from 'react-redux'
import Dropzone from 'react-dropzone'
import { throttle } from 'lodash'
import * as storeActions from '../../actions/storage'
import ListItem from '../../components/ListItem'
import Searchbar from '../../components/Searchbar'

class StorageListPage extends React.Component {
  static propTypes = {
    loading: PropTypes.bool,
    files: ImmutablePropTypes.list,
    fetchStorageList: PropTypes.func,
    removeStorageItem: PropTypes.func,
    uploadStorageItem: PropTypes.func,
    updateStorageItem: PropTypes.func,
  }

  static defaultProps = {
    loading: true,
    files: [],
  }

  componentDidMount() {
    this.props.fetchStorageList()
  }

  renderListItems = () => this.props.files.map((item, i) =>
    <ListItem key={ i }
      onChangeName={ this.props.updateStorageItem }
      onRemove={ this.props.removeStorageItem }
      { ...item }
    />)

  render() {
    return (
      <Fragment>
        <Dropzone multiple="false" className="drop-zone" onDrop={ this.props.uploadStorageItem }>
          <p className="drop-zone-label">Click to upload a file</p>
        </Dropzone>
        <Searchbar onUpdate={ throttle(q => this.props.fetchStorageList(q), 800) } />
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
  updateStorageItem: storeActions.updateStorageItem,
}

export default connect(mapStateToProps, mapDispatchToProps)(StorageListPage)
