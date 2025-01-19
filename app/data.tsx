import { Contact } from "./utils/types";

export const contacts: Contact[] = [
  {
    id: 1,
    name: "Bill Taylor",
    lastContacted: "2 months",
    available: "5pm-11pm",
    image: require("@/assets/images/apples/red-1.png"),
    timezone: "PST",
  },
  {
    id: 2,
    name: "Grace Zhang",
    lastContacted: "1 year",
    available: "6pm-12am",
    image: require("@/assets/images/apples/red-2.png"),
    timezone: "EST",
  },
  {
    id: 3,
    name: "Misha Reyes",
    lastContacted: "4 days",
    available: "5pm-11pm",
    image: require("@/assets/images/apples/green-2.png"),
    timezone: "PST",
  },
  {
    id: 4,
    name: "Myah Rice",
    lastContacted: "3 weeks",
    available: "12pm-2pm",
    image: require("@/assets/images/apples/yellow-3.png"),
    timezone: "MST",
  },
  {
    id: 5,
    name: "Von Dutch",
    lastContacted: "1 month",
    available: "3pm-5pm",
    image: require("@/assets/images/apples/yellow-2.png"),
    timezone: "PST",
  },
];

export const profile = {
  name: "Erin Chong",
  image: require("@/assets/images/apples/red-2.png"),
  available: "11am-5pm",
  timezone: "PST",
};

export default { contacts, profile };
