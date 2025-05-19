export interface NavItem {
  path: string;
  label: string;
}

export interface Address {
  street: string;
  neighborhood: string;
  city: string;
  state: string;
  zipCode: string;
}

export interface SocialLinks {
  instagram: string;
  linkedin: string;
  facebook: string;
}

export interface CompanyInfo {
  name: string;
  phone: string;
  email: string;
  address: Address;
  social: SocialLinks;
}