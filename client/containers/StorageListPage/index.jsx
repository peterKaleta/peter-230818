import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Dropzone from 'react-dropzone'
import * as storeActions from '../../actions/storage'

class StorageListPage extends React.Component {
  static propTypes = {
    loading: PropTypes.bool,
    fetchStorageList: PropTypes.func,
  }

  componentDidMount() {
    this.props.fetchStorageList()
  }

  render() {
    return (
      <Fragment>
        { this.props.loading }
      <Dropzone />
      </Fragment>
    )
  }
}

const mapStateToProps = state => ({
  loading: state.get('storage.loading'),
  files: state.get('storage.files'),
})

const mapDispatchToProps = {
  fetchStorageList: storeActions.fetchStorageList,
}

export default connect(mapStateToProps, mapDispatchToProps)(StorageListPage)
