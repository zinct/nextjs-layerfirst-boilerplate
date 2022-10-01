import { useEffect, useState } from "react";
import httpService from "@/core/http";

export default function usePagination(getKey, query) {
  const [data, setData] = useState([]);
  const [hasMore, setHasMore] = useState(true);
  const [pageNumber, setPageNumber] = useState(1);
  const [firstState, setFirstState] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, [query, pageNumber]);

  useEffect(() => {
    setPageNumber(1);
    setData([]);
  }, [query]);

  async function fetchData(refresh = false) {
    if (refresh) setData([]);
    if (firstState) setFirstState(false);
    if (isLoading && !firstState) return;

    setIsLoading(true);
    const { data: res } = await httpService.get(getKey, {
      params: { ...query, page: pageNumber },
    });
    setIsLoading(false);

    if (pageNumber >= res?.data?.pagination?.total_pages) setHasMore(false);
    else
      res?.data?.pagination?.total_pages ? setHasMore(true) : setHasMore(false);

    if (res.success) {
      setData((prev) => {
        return [...prev, ...(res?.data?.list ?? [])];
      });
    } else setData([]);
  }

  return { data, fetchData, setPageNumber, isLoading, hasMore };
}
