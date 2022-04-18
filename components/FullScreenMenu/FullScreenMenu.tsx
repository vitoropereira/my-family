import { CloseIcon } from "@/icons/CloseIcon";
import classNames from "classnames";
import { useRouter } from "next/router";
import { FC } from "react";
import { Navigation } from "../Header/Header";
import style from "./FullScreenMenu.module.css";

type FullScreenMenuProps = {
  isOpen: boolean;
  navigation: Navigation[];
  onMenuItemClick: (path: string) => void;
  onCloseMenu: () => void;
  selectedMenuItemId: number;
};

const FullScreenMenu: FC<FullScreenMenuProps> = ({
  isOpen,
  navigation,
  selectedMenuItemId,
  onCloseMenu,
  onMenuItemClick,
}) => {
  const router = useRouter();
  return (
    <div
      className={classNames(style.menuContainer, {
        [style.closedMenu]: !isOpen,
      })}
    >
      <button onClick={onCloseMenu}>
        <CloseIcon className={style.closeIcon} />
      </button>
      <nav className={style.menu}>
        {navigation.map(({ id, title, path }) => (
          <button
            key={id}
            onClick={() => onMenuItemClick(path)}
            className={classNames(style.link, {
              [style.selected]: selectedMenuItemId === id,
            })}
          >
            {title}
          </button>
        ))}
      </nav>
    </div>
  );
};

export default FullScreenMenu;
