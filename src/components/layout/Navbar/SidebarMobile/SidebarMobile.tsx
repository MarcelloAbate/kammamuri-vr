import React, { Dispatch, Fragment, SetStateAction } from "react";
import { Dialog, Transition } from "@headlessui/react";
import s from "./SidebarMobile.module.css";
import navList from "../../../../config/nav.json";
import NavItem from "../NavItem";

interface SidebarMobileProps {
  isSidebarOpen: boolean;
  setIsSidebarOpen: Dispatch<SetStateAction<boolean>>;
}

const SidebarMobile: React.FC<SidebarMobileProps> = ({ isSidebarOpen, setIsSidebarOpen }) => {
  return (
    <>
      <Transition.Root show={isSidebarOpen} as={Fragment}>
        <Dialog as="div" className={s.root} onClose={setIsSidebarOpen}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className={s.overlay} />
          </Transition.Child>
          <Transition.Child
            as={Fragment}
            enter="transition ease-in-out duration-300 transform"
            enterFrom="-translate-x-full"
            enterTo="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leaveFrom="translate-x-0"
            leaveTo="-translate-x-full"
          >
            <div className={s["content-wrapper"]}>
              <div className={s.header}>
                <div>
                  <a href="/">
                    <img className={s.logo} src="logo.png" alt="Logo" />
                  </a>
                </div>
              </div>
              <nav>
                <ul className={s.nav}>
                  {navList.map((nav) => (
                    <span key={nav.title} onClick={() => setIsSidebarOpen(false)}>
                      <NavItem title={nav.title} href={nav.href} className="text-primary-600" />
                    </span>
                  ))}
                </ul>
              </nav>
            </div>
          </Transition.Child>
          <div className="flex-shrink-0 w-14">{/* Force sidebar to shrink to fit close icon */}</div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default SidebarMobile;
