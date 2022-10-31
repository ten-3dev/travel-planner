import React from "react";
import Pagination from "react-js-pagination";

const Paging = ({page, count, setPage}) => {

  return (
    <Pagination
      activePage={page} // 현재 페이지
      itemsCountPerPage={6} //  한 페이지당 보여줄 리스트 아이템의 개수
      totalItemsCount={count} // 총 아이템의 개수
      prevPageText={"<"}
      nextPageText={">"}
      onChange={setPage} // 페이지가 바뀔 때 핸들링해줄 함수
    />
  );
};

export default Paging;