import { ReactSearchAutocomplete } from "react-search-autocomplete";
import { useRouter } from "next/dist/client/router";
import Autocomplete from "react-autocomplete";
import Link from "next/link";
import useData from "../hooks/useData";
import CustomInput from "./CustomInput";
import ProfileBar from "@/features/profile/pages/ProfileBar";

import SuperFish from "./SuperFish";
import { useEffect } from "react";
import { useState } from "react";
import http from "../http";
import Skeleton from "react-loading-skeleton";
import { useDebounce } from "use-debounce";
import Portal from "../hoc/Portal";

const Header = () => {
  const { data: inputQuery, inputData, setData } = useData({ name: "", type: "product" });
  const router = useRouter();

  const [keyword, setKeyword] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isKeywordOpen, setIsKeywordOpen] = useState(false);
  const [isHitKeyword, setIsHitKeyword] = useState(false);
  const [textDebounce] = useDebounce(inputQuery.name, 500);

  useEffect(() => {
    $(".header-search-wrapper .form-control input").attr("placeholder", "Mau belanja apa hari ini?");
  }, []);

  useEffect(() => {
    if (!isHitKeyword) handleKeyword();
    setIsHitKeyword(false);
  }, [textDebounce]);

  useEffect(() => {
    if (isHitKeyword) handleSearch();
  }, [isHitKeyword]);

  function handleSearch() {
    setIsKeywordOpen(false);
    if (inputQuery.type == "seller") {
      router.push({ pathname: "/merchant", query: inputQuery });
    } else {
      router.push({ pathname: "/product", query: inputQuery });
    }
  }

  async function handleKeyword() {
    setIsHitKeyword(false);
    if (textDebounce !== "" || textDebounce !== inputQuery.name) {
      setIsKeywordOpen(true);
      setData({ ...inputQuery, name: textDebounce });
      setIsLoading(true);
      const { data: res } = await http.get(`/v1/products/keywords?name=${textDebounce}&type=${inputQuery.type}`);
      setIsLoading(false);

      setKeyword(res.result);
    } else {
      setIsLoading(false);
      setIsKeywordOpen(false);
    }
  }

  return (
    <header className="header">
      <div className="header-middle sticky-header">
        <div className="container">
          <div className="header-left header-custom col-lg-2 w-auto pl-0">
            <button className="mobile-menu-toggler text-primary mr-2" type="button">
              <i className="fas fa-bars" />
            </button>
            <Link href="/" passHref={true}>
              <a href="index.html" className="logo">
                <img src="/images/logo.png" alt="Logo" />
              </a>
            </Link>
          </div>
          {/* End .header-left */}
          <div className="header-bottom d-none d-lg-block mx-2">
            <div className="container">
              <nav className="main-nav w-100">
                <SuperFish />
              </nav>
            </div>
            {/* End .container */}
          </div>
          <div className="header-right w-lg-max topbar">
            <div className="header-icon header-search header-search-inline header-search-category w-lg-max text-right mt-0">
              <a href="#" className="search-toggle" role="button">
                <i className="fas fa-search text-white" />
              </a>
              <form
                method="post"
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSearch();
                }}
                action="#">
                <div className="header-search-wrapper d-flex justify-content-center">
                  <CustomInput type="text" className="form-control" name="name" value={inputQuery.name} onChange={inputData} placeholder="Mau Belanja Apa hari ini?" />
                  <div className={`autocomplete-container ${isKeywordOpen ? "d-block" : "d-none"}`}>
                    {!isLoading ? (
                      keyword.map((row) => (
                        <ul className="pb-0 mb-1" style={{ zIndex: 1000 }}>
                          <li
                            className="d-flex justify-content-between align-items-center"
                            onClick={() => {
                              setIsHitKeyword(true);
                              setData({ ...inputQuery, name: row.name });
                              setIsKeywordOpen(false);
                            }}>
                            <p>{row.name}</p>
                            <i className="fas fa-search" style={{ fontSize: "14px", color: "rgba(0,0,0,0.2)" }}></i>
                          </li>
                        </ul>
                      ))
                    ) : (
                      <>
                        <div className="px-3 my-3">
                          <Skeleton height={20} />
                        </div>
                        <div className="px-3 my-3">
                          <Skeleton height={20} />
                        </div>
                        <div className="px-3 my-3">
                          <Skeleton height={20} />
                        </div>
                      </>
                    )}
                  </div>
                  <div className="select-custom">
                    <CustomInput
                      id="cat"
                      name="type"
                      type="select"
                      onChange={inputData}
                      value={inputQuery.type}
                      items={[
                        {
                          id: "product",
                          name: "Produk",
                        },
                        {
                          id: "seller",
                          name: "Penjual",
                        },
                      ]}
                    />
                    <div
                      className={`clear-keyword justify-content-center align-items-center ${inputQuery.name == "" ? "d-none" : "d-flex"}`}
                      onClick={() => {
                        setData({ ...inputQuery, name: "" });
                        setIsKeywordOpen(false);
                      }}>
                      <i className="fas fa-times" style={{ color: "red", fontSize: 13 }}></i>
                    </div>

                    {isKeywordOpen && (
                      <Portal selector=".page-wrapper">
                        <div
                          className="autocomplete-overlay"
                          onClick={() => {
                            setIsKeywordOpen(false);
                          }}></div>
                      </Portal>
                    )}
                  </div>
                  <button className="btn icon-magnifier p-0" title="search" type="button" onClick={handleSearch} />
                </div>
              </form>
            </div>
            <ProfileBar />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
