import Pagination from "@/components/common/pagination/Pagination";
import { Select, FlexLayout } from "@/styles/common.styled";
function Paginate({ total, limit, page, setPage, onChange }) {
  return (
    <FlexLayout>
      {/* pagination */}
      <Pagination total={total} limit={limit} page={page} setPage={setPage} />

      {/* page select option */}
      <Select name="pageLimit" id="pageLimit" value={limit} onChange={onChange}>
        <option value="10">10</option>
        <option value="20">20</option>
      </Select>
    </FlexLayout>
  );
}
export default Paginate;
