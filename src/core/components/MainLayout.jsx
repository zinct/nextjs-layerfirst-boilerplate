import useSWR from "swr";
import Link from "next/link";
import { useRouter } from "next/router";

import Header from "@/core/components/Header";
import Footer from "@/core/components/Footer";
import CustomInput from "./CustomInput";
import useData from "../hooks/useData";
import { useEffect } from "react";
import { useRef } from "react";
import { useContext } from "react";
import AuthContext from "../contexts/authContext";

const MainLayout = ({ children }) => {
  const { data: category } = useSWR("/v1/categories");
  const { data: inputQuery, inputData } = useData({ name: "", type: "" });
  const { user } = useContext(AuthContext);
  const mobileMenuRef = useRef();
  const router = useRouter();

  useEffect(() => {
    // if (category) {
    //   $(mobileMenuRef.current)
    //     .find("li")
    //     .each(function () {
    //       var $this = $(this);
    //       if ($this.find("ul").length) {
    //         $("<span/>", {
    //           class: "mmenu-btn",
    //         }).appendTo($this.children("a"));
    //       }
    //     });
    //   var $parent = $(".mmenu-btn").closest("li"),
    //     $targetUl = $parent.find("ul").eq(0);
    //   if (!$parent.hasClass("open")) {
    //     $targetUl.slideDown(300, function () {
    //       $parent.addClass("open");
    //     });
    //   } else {
    //     $targetUl.slideUp(300, function () {
    //       $parent.removeClass("open");
    //     });
    //   }
    // }
  }, [category]);

  function handleSearch() {
    if (inputQuery.type == "seller") {
      router.push({ pathname: "/merchant", query: inputQuery });
    } else {
      router.push({ pathname: "/product", query: inputQuery });
    }
  }

  return (
    <>
      <div className="page-wrapper" id="page-wrapper">
        <Header />
        {children}
        <Footer />
      </div>
      <div className="mobile-menu-container">
        <div className="mobile-menu-wrapper">
          <form className="search-wrapper mb-2" action="#">
            <CustomInput type="text" name="name" className="form-control mb-0" onChange={inputData} placeholder="Cari..." />
            <button className="btn icon-search text-white bg-transparent p-0" onClick={handleSearch} type="button" />
          </form>

          <nav className="mobile-nav">
            <ul className="mobile-menu" ref={mobileMenuRef}>
              <li>
                <a href="category.php">Categories</a>
              </li>
              {category ? category.map((row) => <MobileSubCategoryNav category={row} />) : ""}
            </ul>
          </nav>
        </div>
      </div>
      <div class="float-wa">
        <a href="https://api.whatsapp.com/send?phone=6281210799755">
          <i class="fab fa-whatsapp"></i>
          <span>
            Ada Pertanyaan?
            <br />
            Segera Chat Kami
          </span>
        </a>
      </div>
    </>
  );
};

const MobileSubCategoryNav = ({ category }) => {
  const btnRef = useRef();

  useEffect(() => {
    if (category.categories.length > 0)
      $(btnRef.current).on("click", function (e) {
        var $parent = $(this).closest("li"),
          $targetUl = $parent.find("ul").eq(0);

        if (!$parent.hasClass("open")) {
          $targetUl.slideDown(300, function () {
            $parent.addClass("open");
          });
        } else {
          $targetUl.slideUp(300, function () {
            $parent.removeClass("open");
          });
        }

        e.stopPropagation();
        e.preventDefault();
      });
  }, [category]);

  return (
    <li>
      <Link href={category.name == "travel" ? "travel" : `/product?category=${category.slug}`} passHref={true}>
        <a href="product-list.html">
          {category.name}
          {category.categories.length > 0 && <span ref={btnRef} class="mmenu-btn"></span>}
        </a>
      </Link>
      {category.categories.length > 0 && (
        <>
          <ul>
            {category.categories.map((r) => (
              <li>
                <Link href={`/product?category=${r.slug}`} passHref={true}>
                  <a href="product-list.html">{r.name}</a>
                </Link>
              </li>
            ))}
          </ul>
        </>
      )}
    </li>
  );
};

export default MainLayout;
