import Image from "next/image";
import logoSrc from "./logo.svg";
import Profile from "../porofile/profile"
import ArrowDownIcon from "./arrow-down-icon";
import { UiButton } from "../uikit/ui-button";

export default function Header() {
  return (
    <header className="bg-white flex h-24 items-center px-8 shadow-lg">
      <Image src={logoSrc} alt="logo" />
      <div className="w-px h-8 bg-slate-200 mx-6"></div>
      <UiButton className="w-44" size="lg" variant="primary">Играть</UiButton>
      <button className="ml-auto flex items-center gap-2 text-start text-teal-600">
       <Profile />
       <ArrowDownIcon />
      </button>
    </header>
  );
}
