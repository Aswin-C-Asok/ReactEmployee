import { Component } from "react";
import ReactPaginate from "react-paginate";
import './style.css'
import * as CONSTANTS from '../../constants/paginationConstants'

class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageCount: Math.ceil(this.props.employeeCount / this.props.rowLimit)
    }
  }
  handlePageClick = (data) => {
    let selected = data.selected;
    let offset = Math.ceil(selected * this.props.rowLimit);
    let limit = offset + this.props.rowLimit;
    this.props.paginationList(offset, limit);
  };
  render() {
    return (
      <div className={CONSTANTS.PAGINATION_CLASS}>
        <ReactPaginate
          previousLabel={CONSTANTS.PREVIOUS_LABEL}
          nextLabel={CONSTANTS.NEXT_LABEL}
          pageCount={this.state.pageCount}
          onPageChange={this.handlePageClick}
          containerClassName={CONSTANTS.CONTAINER_CLASS}
        />
      </div>
    )
  }
}
export default Pagination;