import Image from "next/image";
import "./styles.scss";

export function Social({ type }: { type: "full" | "simple" }) {
  const social = [
    {
      name: "GitHub",
      url: "https://github.com/abhnerAraujo",
      icon: "/svg/github.svg",
      profile: "abhnerAraujo",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/abhneraraujo/",
      icon: "/svg/linkedin.svg",
      profile: "Abhner Araújo",
    },
  ];
  return (
    <div
      className={(type === "full" ? "flex-col" : "flex-rol") + " flex gap-4"}
    >
      {social.map((s) => (
        <div key={s.name}>
          <a
            className="flex flex-row gap-4 items-center w-fit"
            href={s.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              title={s.profile}
              src={s.icon}
              className="size-8"
              alt={s.name}
              width={0}
              height={0}
            />
            {type === "full" && <span>{s.profile}</span>}
          </a>
        </div>
      ))}
    </div>
  );
}
