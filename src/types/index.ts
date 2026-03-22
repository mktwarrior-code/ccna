export type NavItem = {
  id: string;
  label: string;
  labelEn: string;
  href: string;
  children?: NavItem[];
};

export type BusinessArea = {
  id: string;
  title: string;
  titleEn: string;
  icon: string;
  description: string;
  subAreas: {
    title: string;
    content: string;
  }[];
};

export type TraditionalGame = {
  id: string;
  name: string;
  nameEn: string;
  country: string;
  region: string;
  description: string;
  image?: string;
};

export type OrgUnit = {
  id: string;
  name: string;
  nameEn?: string;
  children?: OrgUnit[];
};
