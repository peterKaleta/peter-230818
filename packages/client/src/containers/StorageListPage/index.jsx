import React from 'react'
import PropTypes from 'prop-types'
import ImmutablePropTypes from 'react-immutable-proptypes'
import { connect } from 'react-redux'
import Dropzone from 'react-dropzone'
import { throttle } from 'lodash'
import * as storeActions from '../../actions/storage'
import ListItem from '../../components/ListItem'
import Searchbar from '../../components/Searchbar'
import * as styles from './styles.scss'

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

  renderListItems = () => this.props.files.map(item =>
    <ListItem key={ item.id }
      onChangeName={ this.props.updateStorageItem }
      onRemove={ this.props.removeStorageItem }
      item={ item }
    />)

  renderNoItemsLabel = () => <div className={ styles.storageListInfo }>Your storage is empty</div>

  render() {
    return (
      <div>
        <Dropzone
          multiple={ false }
          className={ styles.dropZone }
          onDrop={ this.props.uploadStorageItem }
          >
            <p className={ styles.dropZoneLabel }>Click to upload a file</p>
        </Dropzone>
        <Searchbar onUpdate={ throttle(q => this.props.fetchStorageList(q), 800) } />
        { this.props.files.size ? this.renderListItems() : this.renderNoItemsLabel() }
      </div>
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
