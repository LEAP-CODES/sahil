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
    link: "/service-details",
    active: "",
    sub_menus: [
      { link: "/service-details", title: " Enzyme Based Green chemicals" },
      { link: "/service-details", title: "Performance coating solutions" }, 
      { link: "/service-details", title: "Stone care and Floor Restoration" },
      { link: "/service-details", title: "Food Industry Cleaning Tools" },
      // { link: "/food_industry", title: "Food industry Cleaning Tools" },
      { link: "/service-details", title: "Janitorials"},
      { link: "/service-details", title: "Machines"},
      { link: "/service-details", title: "Microfibers"},
      { link: "/service-details", title: "Professional Hygeine and Health solution"},
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
