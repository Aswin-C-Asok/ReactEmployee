import { Component } from "react";
import ReactPaginate from "react-paginate";
import './style.css'
import * as CONSTANTS from '../../constants/paginationConstants'

class Pagination extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pageCount: Math.ceil(this.props.employeeCount / this.props.pageLimit)
    }
  }
  handlePageClick = (data) => {
    let selected = data.selected;
    let start = Math.ceil(selected * this.props.pageLimit);
    let end = start + this.props.pageLimit;
    this.props.paginationList(start, end);
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