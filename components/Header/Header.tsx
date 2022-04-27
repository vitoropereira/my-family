import { MenuIcon } from "@/icons/MenuIcon";
import classNames from "classnames";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { FC, useEffect, useState } from "react";
import FullScreenMenu from "../FullScreenMenu/FullScreenMenu";
import style from "./Header.module.css";

export type Navigation = {
  id: number;
  title: string;
  path: string;
};

const navigation: Navigation[] = [
  { id: 1, title: "Sobre o projeto", path: "/" },
  { id: 2, title: "Árvore", path: "/tree" },
  { id: 3, title: "Famílias", path: "/families" },
  { id: 4, title: "Saiba Mais", path: "/faq" },
];

const Header: FC = () => {
  const router = useRouter();
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [selectedMenuItemId, setSelectedMenuItemId] = useState<number>(1);

  useEffect(() => {
    const selectedMenuItem = navigation.find((nav) => nav.path === router.pathname);
    if (selectedMenuItem) {
      setSelectedMenuItemId(selectedMenuItem.id);
    }
  }, [router.pathname]);
  console.log(router.pathname);
  const openMenu = () => {
    setMenuOpen(true);
  };
  const closeMenu = () => {
    setMenuOpen(false);
  };
  const { root } = router.query;
  const queryRootId = root ? (Array.isArray(root) ? root[0] : root) : undefined;

  return (
    <header className={style.navbar}>
      <div className={style.logoContainer}>
        <Image src="/favicon.ico" width={40} height={34} alt="Logo projeto árvore genealógica" />
        <span className={style.logoTitle}>VOP Tree</span>
      </div>
      <nav className={style.navigation}>
        {navigation.map(({ id, title, path }) => {
          let fullPath = path;
          if (queryRootId) {
            fullPath = `${fullPath}?root=${queryRootId}`;
          }
          return (
            <Link key={id} href={fullPath}>
              <a
                className={classNames(style.link, {
                  [style.selected]: id === selectedMenuItemId,
                })}
              >
                {title}
              </a>
            </Link>
          );
        })}
      </nav>
      <button className={style.menuButton} onClick={openMenu}>
        <MenuIcon className={style.menuIcon} />
      </button>
      <FullScreenMenu
        navigation={navigation}
        selectedMenuItemId={selectedMenuItemId}
        onCloseMenu={closeMenu}
        onMenuItemClick={(path: string) => {
          let fullPath = path;
          if (queryRootId) {
            fullPath = `${fullPath}?root=${queryRootId}`;
          }
          router.push(fullPath);
          closeMenu();
        }}
        isOpen={isMenuOpen}
      />
    </header>
  );
};

export default Header;
