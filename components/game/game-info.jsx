import Profile from "../porofile/profile";
import clsx from "clsx";
import { CrossIcon } from "./icons/cross-icon";

export function GameInfo({ className }) {
  return (
    <div
      className={clsx(className, "bg-white py-4 px-8 rounded-2xl shadow-ml flex justify-between")}
    >
      <div className="flex gap-3 items-center">
        <div className="relative">
          <Profile className="w-[180px]" />
          <div className="bg-white w-5 h-5 rounded-full shadow absolute -left-1 -top-1 p-1">
            <CrossIcon/>
          </div>
        </div>
        <div className="h-6 w-px bg-slate-200" />
        <div className="text-slate-900 text-lg font-semibold"> 01:08</div>
      </div>
      <div className="flex gap-3 items-center">
        <div className="text-orange-600 text-lg font-semibold"> 00:08</div>
        <div className="h-6 w-px bg-slate-200" />
        <div className="relative">
          <Profile className="w-[180px]" />
          <div className="bg-white w-5 h-5 rounded-full shadow absolute -left-1 -top-1 p-1">
            <CrossIcon/>
          </div>
        </div>
      </div>
    </div>
  );
}
