import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import ImmutablePropTypes from 'react-immutable-proptypes'
import { connect } from 'react-redux'
import Dropzone from 'react-dropzone'
import * as storeActions from '../../actions/storage'

class StorageListPage extends React.Component {
  static propTypes = {
    loading: PropTypes.bool,
    files: ImmutablePropTypes.list,
    fetchStorageList: PropTypes.func,
  }

  static defaultProps = {
    loading: true,
    files: [],
  }

  componentDidMount() {
    this.props.fetchStorageList()
  }

  renderListItem = (item, i) => <div key={ i }>{ item.filename }</div>

  render() {
    return (
      <Fragment>
      { this.props.files.map(this.renderListItem)}
      <Dropzone />
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
}

export default connect(mapStateToProps, mapDispatchToProps)(StorageListPage)
