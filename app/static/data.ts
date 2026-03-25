export const members = [
    {
        img: "/assets/user-cover-1.png",
        name: "Julian Jameson",
        profession: "Profession",
    },
    {
        img: "/assets/user-cover-2.png",
        name: "Julian Jameson",
        profession: "Profession",
    },
    {
        img: "/assets/user-cover-3.png",
        name: "Julian Jameson",
        profession: "Profession",
    },
    {
        img: "/assets/user-cover-4.png",
        name: "Julian Jameson",
        profession: "Profession",
    },
];

export const socialIcons = [
    { icon: "/assets/facebook.svg", alt: "Facebook" },
    { icon: "/assets/instagram.svg", alt: "Instagram" },
    { icon: "/assets/twitter.svg", alt: "Twitter" },
];

export const packages = [
    {
        icon: "/assets/012-blackboards.svg",
        title: "Certified Teacher",
        description: "The gradual accumulation of information about",
    },
    {
        icon: "/assets/013-telescope-1.svg",
        title: "Expert instruction",
        description: "The gradual accumulation of information about",
    }
];

export type Member = typeof members[number];
export type SocialIcon = typeof socialIcons[number];
export type Package = typeof packages[number];