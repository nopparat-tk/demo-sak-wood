import { useTransition } from "react";

import Menu2 from "../Menu2";
import Link from "next/link";
// import { Link, useRouter } from "@/i18n/navigation";
import MobileMenu from "../MobileMenu";
export default function Header4({
   scroll,
   handlePopup,
   handleMobileMenu,
   handleSidebar,
}) {
   const [isPending, startTransition] = useTransition();
   const handleLocaleChange = (locale) => {
      startTransition(() => {
         setLocale(locale);
      });
   };
   const items = [
      { value: "en", label: "ENG" },
      { value: "ru", label: "RUS" },
   ];
   return (
      <>
         <header className="main-header-two">
            <div
               className="section-shape-1"
               style={{
                  backgroundImage:
                     " url(assets/images/shapes/section-shape-1.png)",
                  opacity: "0.4",
               }}
            ></div>
            <nav className="main-menu main-menu-two">
               <div className="main-menu-two__wrapper">
                  <div className="main-menu-two__wrapper-inner">
                     <div className="main-menu-two__left">
                        <div className="main-menu-two__logo">
                           <Link href="/">
                              <img
                                 src="assets/images/resources/logo-1.svg"
                                 alt=""
                              />
                           </Link>
                        </div>
                     </div>
                     <div className="main-menu-two__main-menu-box">
                        <Link
                           href="#"
                           className="mobile-nav__toggler"
                           onClick={handleMobileMenu}
                        >
                           <i className="fa fa-bars"></i>
                        </Link>
                        <Menu2 />
                     </div>
                     <div className="main-menu-two__right">
                        <div className="main-menu-two__search-and-nav-sidebar-icon">
                           {/* <Link
                              href="#"
                              className="main-menu-two__search search-toggler"
                           >
                              <span
                                 className="icon-search-interface-symbol"
                                 onClick={handlePopup}
                              ></span>
                           </Link> */}
                           {/* <div className="main-menu-two__nav-sidebar-icon">
                              <Link
                                 className="navSidebar-button"
                                 href="#"
                                 onClick={handlePopup}
                              >
                                 <span className="icon-text"></span>
                              </Link>
                           </div> */}
                           <select
                              className="locale-selector"
                              // value={router.locale}
                              onChange={(e) =>
                                 handleLocaleChange(e.target.value)
                              }
                              disabled={isPending}
                           >
                              {items.map((item) => (
                                 <option key={item.value} value={item.value}>
                                    {item.label}
                                 </option>
                              ))}
                           </select>
                        </div>
                     </div>
                  </div>
               </div>
            </nav>
         </header>

         <div
            className={`stricky-header stricked-menu main-menu main-menu-two ${
               scroll ? "stricky-fixed" : ""
            }`}
         >
            <div className="sticky-header__content">
               <div
                  className="section-shape-1"
                  style={{
                     backgroundImage:
                        " url(assets/images/shapes/section-shape-1.png)",
                     opacity: "0.5",
                  }}
               ></div>
               <nav className="main-menu main-menu-two">
                  <div className="main-menu-two__wrapper">
                     <div className="main-menu-two__wrapper-inner">
                        <div className="main-menu-two__left">
                           <div className="main-menu-two__logo">
                              <Link href="/">
                                 <img
                                    src="assets/images/resources/logo-1.svg"
                                    alt=""
                                 />
                              </Link>
                           </div>
                        </div>
                        <div className="main-menu-two__main-menu-box">
                           <Link
                              href="#"
                              className="mobile-nav__toggler"
                              onClick={handleMobileMenu}
                           >
                              <i className="fa fa-bars"></i>
                           </Link>
                           <Menu2 />
                        </div>
                        <div className="main-menu-two__right">
                           <div className="main-menu-two__search-and-nav-sidebar-icon">
                              {/* <Link
                              href="#"
                              className="main-menu-two__search search-toggler"
                           >
                              <span
                                 className="icon-search-interface-symbol"
                                 onClick={handlePopup}
                              ></span>
                           </Link> */}
                              {/* <div className="main-menu-two__nav-sidebar-icon">
                              <Link
                                 className="navSidebar-button"
                                 href="#"
                                 onClick={handlePopup}
                              >
                                 <span className="icon-text"></span>
                              </Link>
                           </div> */}
                              <select
                                 className="locale-selector"
                                 // value={locale}
                                 onChange={(e) =>
                                    handleLocaleChange(e.target.value)
                                 }
                                 disabled={isPending}
                              >
                                 {items.map((item) => (
                                    <option key={item.value} value={item.value}>
                                       {item.label}
                                    </option>
                                 ))}
                              </select>
                           </div>
                           {/* <div className="main-menu-two__search-and-nav-sidebar-icon">
                              <Link
                                 href="#"
                                 className="main-menu-two__search search-toggler"
                                 onClick={handlePopup}
                              >
                                 <span className="icon-search-interface-symbol"></span>
                              </Link>
                              <div className="main-menu-two__nav-sidebar-icon">
                                 <Link
                                    className="navSidebar-button"
                                    href="#"
                                    onClick={handleSidebar}
                                 >
                                    <span className="icon-text"></span>
                                 </Link>
                              </div>
                           </div> */}
                        </div>
                     </div>
                  </div>
               </nav>
            </div>
            {/* /.sticky-header__content */}
         </div>
         {/* /.stricky-header */}
         <MobileMenu handleMobileMenu={handleMobileMenu} />
      </>
   );
}
