import React from "react";
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

const customPagination = (props) => {
  const {
    currentPage, 
    pages, 
    onPageClick, 
    onFirstPageClick, 
    onLastPageClick,
    onNextPageClick,
    onPreviousPageClick } = props;

  const paginationItems = [];
  let paginationStartPage = 1;
  let paginationEndPage = pages;

  if (pages > 10) {
    paginationEndPage = currentPage < 5 ? 10 : currentPage + 5;
    paginationStartPage = currentPage < 5 ? 1 : currentPage - 4;
    
    if (paginationEndPage >= pages) {
      paginationEndPage = pages;
      paginationStartPage = pages - 9;
    }
  }

  for (let index = paginationStartPage; index <= paginationEndPage; index++) {
    paginationItems.push((
      <PaginationItem key={index} active={currentPage === index}>
        <PaginationLink href="#" onClick={() => onPageClick(index)}>
          {index}
        </PaginationLink>
      </PaginationItem>
    ));
  }

  const pagination = paginationItems && paginationItems.length > 1 ?
    (<Pagination>
      <PaginationItem disabled={currentPage === paginationStartPage}>
        <PaginationLink first href="#" onClick={onFirstPageClick} />
      </PaginationItem>
      <PaginationItem disabled={currentPage === paginationStartPage}>
        <PaginationLink previous href="#" onClick={onPreviousPageClick} />
      </PaginationItem>
      {paginationItems}
      <PaginationItem disabled={currentPage === paginationEndPage}>
        <PaginationLink next href="#" onClick={onNextPageClick} />
      </PaginationItem>
      <PaginationItem disabled={currentPage === paginationEndPage}>
        <PaginationLink last href="#" onClick={onLastPageClick}  />
      </PaginationItem>
    </Pagination>)
    : null;

  return pagination;
}

export default customPagination;