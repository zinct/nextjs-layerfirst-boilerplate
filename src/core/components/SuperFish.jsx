import useSWR from "swr";
import Link from "next/link";
import { useEffect } from "react";
import Skeleton from "react-loading-skeleton";

const SuperFish = () => {
  const { data: categories } = useSWR("/v1/categories");

  useEffect(() => {
    if (categories) $(".menu").superfish();
  }, [categories]);

  return (
    <ul className="menu">
      <li>
        <a href="#" className="header-category">
          {categories ? "Kategori" : <Skeleton width={64} height={15} />}
        </a>
        {categories ? (
          <ul>
            {categories.map((row, i) => (
              <li key={i}>
                <Link href={row.isCustom == "1" ? row.url : `/product?category=${row.slug}`} passHref={true}>
                  <a href="#">{row.slug}</a>
                </Link>
                {row.categories.length > 0 ? (
                  <ul>
                    {row.categories.map((r, i2) => (
                      <li key={i2}>
                        <Link href={`/product?category=${r.slug}`}>
                          <a href="#">{r.name}</a>
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : (
                  ""
                )}
              </li>
            ))}
          </ul>
        ) : (
          ""
        )}
      </li>
    </ul>
  );
};

export default SuperFish;
