import Image from "next/image";

export function Social() {
  const social = [
    {
      name: "GitHub",
      url: "https://github.com/abhnerAraujo",
      icon: "/svg/github.svg",
      profile: "abhnerAraujo",
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/abhner-ara%C3%BAjo-069402b6/",
      icon: "/svg/linkedin.svg",
      profile: "Abhner Araújo",
    },
  ];
  return (
    <div className="flex gap-4">
      {social.map((s) => (
        <a key={s.name} href={s.url} target="_blank" rel="noopener noreferrer">
          <Image
            title={s.profile}
            src={s.icon}
            className="size-8"
            alt={s.name}
            width={0}
            height={0}
          />
        </a>
      ))}
    </div>
  );
}
