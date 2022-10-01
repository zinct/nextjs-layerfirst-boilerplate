import { SWRConfig } from "swr";
import http from "@/core/http";
import objectHelper from "../helpers/objectHelper";

export async function fetcher(resource, params = {}, options = {}) {
  const newParams = objectHelper.removeEmptyObj(params);
  const { data: res } = await http.get(resource, { ...options, params: newParams });

  return res;
}

function fetcherMiddleware(useSWRNext) {
  return (key, fetcher, config) => {
    const swr = useSWRNext(key, fetcher, config);

    // After execute swr here...
    return Object.assign({}, swr, {
      data: swr.data?.result || swr.data,
      message: swr.data?.message || swr.data,
    });
  };
}

const SwrCustomConfig = ({ children }) => {
  return <SWRConfig value={{ fetcher, use: [fetcherMiddleware], revalidateIfStale: false, revalidateOnFocus: false }}>{children}</SWRConfig>;
};

export default SwrCustomConfig;
