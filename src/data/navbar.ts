export const menus: Array<{
  label: string;
  href?: string;
  newTab?: boolean;
  menus?: Array<{
    label: string;
    desc?: string;
    href: string;
  }>;
}> = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
  },
  {
    label: "Gallery",
  },
  {
    label: "Contact",
  },
];

export const button: { label: string; href?: string } = {
  label: "Daftar Sekarang",
};
