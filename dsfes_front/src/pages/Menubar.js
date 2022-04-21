import React, { useCallback, useState, useEffect } from "react";
import "../css/reset.css";
import styles from "../css/Menubar.module.css";
import googleADs from "../img/GoogleADs.png";
import { Link, NavLink, Outlet } from "react-router-dom";
import FesLogo from "../img/FesLogo.svg";
import HeaderTitle from "../components/HeaderTitle";
import { useLocation } from "react-router-dom";

const Menubar = () => {
  // 스크롤 시, 메뉴 상태
  const [show, setShow] = useState(false);
  // 메뉴 열림,닫힘 상태
  const [menuActive, setMenuActive] = useState(false);
  const MenuStateHandle = useCallback((e) => {
    setMenuActive(!menuActive);
  });
  useEffect(
    (e) => {
      if (menuActive) {
        console.log("열렸습니다.");
      } else {
        console.log("닫혔습니다.");
      }
    },
    [menuActive]
  );
  //페이지 이동 시, 메뉴 바 닫기
  const menuClose = useCallback((e) => {
    setMenuActive(false);
  });
  // 스크롤 시, 메뉴 색 변경
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 50) {
        setShow(true);
      } else {
        setShow(false);
      }
    });
    return () => {
      window.removeEventListener("scroll", () => { });
    };
  }, []);

  //태영: Home제외하고 나머지 Header영역 뜨게 하기
  const [home, setHome] = useState(true);
  const [title, setTitle] = useState("");
  const location = useLocation();

  const links = {
    "/Notice": ["총학생회에서", <br />, "알려드립니다 📢"],
    "/TimeTable": "TIME TABLE",
    "/Event": "EVENT",
    "/Map": ["MAP", <br />, "한눈에 보는 근화제"],
    "/Board": ["덕우들의 새로고침", <br />, "어떠셨나요?"],
  };

  useEffect(() => {
    if (location.pathname === "/") {
      setHome(true);
    } else {
      setHome(false);
      setTitle(links[location.pathname]);
    }
  }, [location.pathname]);

  return (
    <div className={styles.frame}>
      <div className={styles.menubar}>
        <div className={styles.menuSpaceBox} />
        <div className={show ? styles.HeaderBlack : styles.Header}>
          <div className={styles.HeaderTop}>
            <Link to="/">
              <img src={FesLogo} />
            </Link>
            <div
              className={
                menuActive
                  ? styles.hamburger + " " + styles.active
                  : styles.hamburger
              }
              onClick={MenuStateHandle}
            >
              <span className={styles.bar}></span>
              <span className={styles.bar}></span>
              <span className={styles.bar}></span>
            </div>
          </div>
          <div className={styles.HeaderBottom}>
            <ul className={menuActive ? styles.NavMenuActive : styles.NavMenu}>
              <NavLink
                to="/Notice"
                className={({ isActive }) =>
                  isActive ? styles.navActive : styles.nav
                }
                onClick={menuClose}
              >
                <li className={styles.NavItem}>NOTICE</li>
              </NavLink>
              <NavLink
                to="/TimeTable"
                className={({ isActive }) =>
                  isActive ? styles.navActive : styles.nav
                }
                onClick={menuClose}
              >
                <li className={styles.NavItem}>TIME TABLE</li>
              </NavLink>
              <NavLink
                to="/Event"
                className={({ isActive }) =>
                  isActive ? styles.navActive : styles.nav
                }
                onClick={menuClose}
              >
                <li className={styles.NavItem}>EVENT</li>
              </NavLink>
              <NavLink
                to="/Board"
                className={({ isActive }) =>
                  isActive ? styles.navActive : styles.nav
                }
                onClick={menuClose}
              >
                <li className={styles.NavItem}>GUEST BOOK</li>
              </NavLink>
              <NavLink
                to="/Map"
                className={({ isActive }) =>
                  isActive ? styles.navActive : styles.nav
                }
                onClick={menuClose}
              >
                <li className={styles.NavItem}>MAP</li>
              </NavLink>
            </ul>
          </div>
        </div>

        {home === true ? "" : <HeaderTitle title={title} />}

        <div className={styles.Content}>
          <Outlet />
        </div>
        <div className={styles.AdBanner}>
          <img src={googleADs} />
        </div>
        <div className={styles.FooterMenu}>
          <p className={styles.F_Head}>2022 덕성여자대학교 근화제 [새로고침]</p>
          <div className={styles.FooterContent1}>
            <p className={styles.F_Header}>개발</p>
            <div className={styles.F_Content}>
              <p className={styles.name}>멋쟁이 사자처럼 덕성여자대학교</p>
              <p>Front-end</p>
              <p className={styles.name}>강태영 권은빈 김수정 허은</p>
              <p>Back-end</p>
              <p className={styles.name}>남서현 유다영 홍인혜</p>
            </div>
          </div>
          <div className={styles.FooterContent2}>
            <p className={styles.F_Header}>디자인</p>
            <div className={styles.F_Content}>
              <p>UI/UX</p>
              <p className={styles.name}>정지영</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Menubar;
