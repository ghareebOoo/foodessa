import { StaticImageData } from "next/image"
import { ReactElement } from "react";



export type HEADERLINKS = {
    label: string;
    herf: string;
    icon: ReactElement;
}

export type Categories = {
    name: string;
    image: string | StaticImageData;
}

export type Price = {
    H?: number;
    F?: number;
    S?: number;
    M?: number;
    L?: number;
    XL?: number;
}




export type Foods = {
    _id: string;
    name: string;
    image: string | StaticImageData;
    price: Price;
    description: string;
    category: string;
    sizes: string[];
    date: number;
    popular: boolean;
}

export type FOOTERLINKS = {
  
    titleOne: string;
    linksOne: string[];
    titleTwo: string;
    linksTwo: string[];
}

type Links = {
    label: string;
    value: string;
}

export type FOOTERCONTACTINFO = {
  title: string;
  links: Links[],
};

type Socials = {
    icon: ReactElement
}

export type OURSOCIALS = {
  title: string;
  links: Socials[]
};