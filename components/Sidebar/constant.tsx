import {
  home,
  appointment,
  inbox,
  inventory,
  patients,
  phone_leads,
  pos,
  reputation,
  tools,
  cronitor,
} from "@/assets/SVGs";

interface Route {
  id: number;
  name: string;
  icon?: {
    src: string;
    height: number;
    width: number;
  };
  route?: string;
  children?: Route[];
}


export const routeList: Route[] = [
  {
    id: 1,
    name: "Home",
    icon: home,
    children: [
      { id: 11, name: "Dashboard", route: "/" },
      { id: 12, name: "Profiles", route: "/profiles" },
      // { id: 4, name: "SEO", route: "/seo" },
    ],
  },
  {
    id: 2,
    name: "Patients",
    icon: patients,
    children: [
      { id: 21, name: "All Patients", route: "/patients/all" },
      { id: 22, name: "On-site", route: "/patients/onsite" },
      { id: 23, name: "Off-site", route: "/patients/offsite" },
    ],
  },

  {
    id: 4,
    name: "Appointments",
    icon: appointment,
    // children: [],
    route: "/appoinments",
  },
  {
    id: 6,
    name: "Reputation",
    icon: reputation,
    children: [
      { id: 62, name: "Private Feedback", route: "/reputation/privatefeedback" },
    ],
  },
  {
    id: 7,
    name: "POS",
    icon: pos,
    children: [
      { id: 71, name: "Sales", route: "/pos/sales" },
      { id: 72, name: "Return", route: "/pos/return" },
      { id: 73, name: "History", route: "/pos/history" },
    ],
  },
  {
    id: 8,
    name: "Inventory",
    icon: inventory,
    children: [
      { id: 81, name: "Stock panel", route: "/inventory/stockpanel" },
      { id: 82, name: "Manage", route: "/inventory/manage" },
    ],
  },
  // {
  //   id: 9,
  //   name: "Cronitor panel",
  //   icon: cronitor,
  //   children: [
  //     { id: 1, name: "Stock panel", route: "/inventory/stockpanel" },
  //     { id: 2, name: "Manage", route: "/inventory/manage" },
  //   ],
  // },
  {
    id: 10,
    name: "Tools",
    icon: tools,
    children: [
      { id: 101, name: "Email Broadcast", route: "/tools/emailbroadcast" },
      { id: 102, name: "Website Content", route: "/tools/websitecontent" },
      // { id: 3, name: "Text Broadcast", route: "/tools/textbroadcast" },
      { id: 104, name: "Promo Codes", route: "/tools/promo-codes" },
      { id: 105, name: "Roles and Permissions", route: "/tools/roles-permissions" },
      { id:106, name: "User Management", route: "/tools/user-management" },
    ],
  },
];
