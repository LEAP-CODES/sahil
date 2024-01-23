import HomeIcon from "@/src/svg/home-icon";

const menu_data = [
  {
    id: 1,
    mega_menu: false,
    has_dropdown: false,
    home_icon: <HomeIcon />,
    title: "Home",
    link: "/",
    active: "",
  },
  {
    id: 2,
    mega_menu: false,
    has_dropdown: false,
    title: "Company",
    link: "/about",
    active: "",
  },   
  {
    id: 3,
    mega_menu: false,
    has_dropdown: true,
    title: "Products",
    link: "/service",
    active: "",
    sub_menus: [
      { link: "/Green-chemicals", title: " Enzyme Based Green chemicals" },
      { link: "/Performance-coating-solutions", title: "Performance coating solutions" }, 
      { link: "/Stone-care", title: "Stone care and Floor Restoration" },
      { link: "/Food-Industry-Cleaning-Tools", title: "Food Industry Cleaning Tools" },
      // { link: "/food_industry", title: "Food industry Cleaning Tools" },
      { link: "janitorials", title: "Janitorials"},
      { link: "Machines", title: "Machines"},
      { link: "Microfibers", title: "Microfibers"},
      { link: "Professional-Hygeine", title: "Professional Hygeine and Health solution"},
    ],
  },
  // {
  //   id: 4,
  //   mega_menu: false,
  //   has_dropdown: false,
  //   title: "Sustainibility",
  //   link: "/blog",
  //   active: "",
  // },
  {
    id: 4,
    mega_menu: false,
    has_dropdown: false,
    title: "Contact",
    link: "/contact",
    active: "",
  },
  

];
export default menu_data;
