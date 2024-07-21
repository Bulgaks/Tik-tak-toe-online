import Image from "next/image";
import clsx from "clsx";
import avatarSrc from "./avatar.png";

export default function Profile({ className }) {
  return (
    <div
      className={clsx(
        className,
        "ml-auto flex items-center gap-2 text-start text-teal-600",
      )}
    >
      <Image src={avatarSrc} alt="avatar" width={48} height={48} />
      <div>
        <div className="text-lg leading-tight">Paromovevg</div>
        <div className="text-slate-400 text-xs leading-tight">
          Рейтинг: 1230
        </div>
      </div>
    </div>
  );
}
