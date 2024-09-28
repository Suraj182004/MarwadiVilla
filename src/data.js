import House1 from "./assets/img/houses/house1.png";
import House2 from "./assets/img/houses/house2.png";
import House3 from "./assets/img/houses/house3.png";
import House4 from "./assets/img/houses/house4.png";
import House5 from "./assets/img/houses/house5.png";
import House6 from "./assets/img/houses/house6.png";
import House7 from "./assets/img/houses/house7.png";
import House8 from "./assets/img/houses/house8.png";
import House9 from "./assets/img/houses/house9.png";
import House10 from "./assets/img/houses/house10.png";
import House11 from "./assets/img/houses/house11.png";
import House12 from "./assets/img/houses/house12.png";

import House1Lg from "./assets/img/houses/house1lg.png";
import House2Lg from "./assets/img/houses/house2lg.png";
import House3Lg from "./assets/img/houses/house3lg.png";
import House4Lg from "./assets/img/houses/house4lg.png";
import House5Lg from "./assets/img/houses/house5lg.png";
import House6Lg from "./assets/img/houses/house6lg.png";
import House7Lg from "./assets/img/houses/house7lg.png";
import House8Lg from "./assets/img/houses/house8lg.png";
import House9Lg from "./assets/img/houses/house9lg.png";
import House10Lg from "./assets/img/houses/house10lg.png";
import House11Lg from "./assets/img/houses/house11lg.png";
import House12Lg from "./assets/img/houses/house12lg.png";

import Apartment1 from "./assets/img/apartments/a1.png";
import Apartment2 from "./assets/img/apartments/a2.png";
import Apartment3 from "./assets/img/apartments/a3.png";
import Apartment4 from "./assets/img/apartments/a4.png";
import Apartment5 from "./assets/img/apartments/a5.png";
import Apartment6 from "./assets/img/apartments/a6.png";

import Apartment1Lg from "./assets/img/apartments/a1lg.png";
import Apartment2Lg from "./assets/img/apartments/a2lg.png";
import Apartment3Lg from "./assets/img/apartments/a3lg.png";
import Apartment4Lg from "./assets/img/apartments/a4lg.png";
import Apartment5Lg from "./assets/img/apartments/a5lg.png";
import Apartment6Lg from "./assets/img/apartments/a6lg.png";

import Agent1 from "./assets/img/agents/agent1.png";
import Agent2 from "./assets/img/agents/agent2.png";
import Agent3 from "./assets/img/agents/agent3.png";
import Agent4 from "./assets/img/agents/agent4.png";
import Agent5 from "./assets/img/agents/agent5.png";
import Agent6 from "./assets/img/agents/agent6.png";
import Agent7 from "./assets/img/agents/agent7.png";
import Agent8 from "./assets/img/agents/agent8.png";
import Agent9 from "./assets/img/agents/agent9.png";
import Agent10 from "./assets/img/agents/agent10.png";
import Agent11 from "./assets/img/agents/agent11.png";
import Agent12 from "./assets/img/agents/agent12.png";
// data.js
export const addHouse = (newHouse) => {
  housesData.push(newHouse);
}

export const housesData = [
  {
    id: 1,
    type: "House",
    name: "House 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur.",
    image: House1,
    imageLg: House1Lg,
    country: "Maharashtra",
    city: "Mumbai",
    address: "123 Marine Drive, Mumbai, Maharashtra 400002",
    bedrooms: "6",
    bathrooms: "3",
    surface: "4200 sq ft",
    year: "2024",
    price: "35000",
    date: "5",
    agent: {
      image: Agent1,
      name: "Rohan Mehta",
      phone: "0123 456 78910",
    },
  },
  {
    id: 2,
    type: "House",
    name: "House 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur.",
    image: House2,
    imageLg: House2Lg,
    country: "Delhi",
    city: "New Delhi",
    address: "456 Connaught Place, New Delhi, Delhi 110001",
    bedrooms: "6",
    bathrooms: "3",
    surface: "4200 sq ft",
    year: "2024",
    price: "28000",
    date: "10",
    agent: {
      image: Agent2,
      name: "Aditi Sharma",
      phone: "0123 456 78910",
    },
  },
  {
    id: 3,
    type: "House",
    name: "House 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur.",
    image: House3,
    imageLg: House3Lg,
    country: "Karnataka",
    city: "Bengaluru",
    address: "789 Brigade Road, Bengaluru, Karnataka 560001",
    bedrooms: "6",
    bathrooms: "3",
    surface: "4200 sq ft",
    year: "2024",
    price: "32000",
    date: "5",
    agent: {
      image: Agent3,
      name: "Suresh Nair",
      phone: "0123 456 78910",
    },
  },
  {
    id: 4,
    type: "House",
    name: "House 4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur.",
    image: House4,
    imageLg: House4Lg,
    country: "Tamil Nadu",
    city: "Chennai",
    address: "159 Marina Beach Road, Chennai, Tamil Nadu 600001",
    bedrooms: "6",
    bathrooms: "3",
    surface: "4200 sq ft",
    year: "2024",
    price: "38000",
    date: "15",
    agent: {
      image: Agent4,
      name: "Deepa Reddy",
      phone: "0123 456 78910",
    },
  },
  {
    id: 5,
    type: "House",
    name: "House 5",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur.",
    image: House5,
    imageLg: House5Lg,
    country: "Telangana",
    city: "Hyderabad",
    address: "321 Banjara Hills, Hyderabad, Telangana 500034",
    bedrooms: "5",
    bathrooms: "3",
    surface: "4200 sq ft",
    year: "2024",
    price: "25000",
    date: "20",
    agent: {
      image: Agent5,
      name: "Vikram Joshi",
      phone: "0123 456 78910",
    },
  },
  {
    id: 6,
    type: "House",
    name: "House 6",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur.",
    image: House6,
    imageLg: House6Lg,
    country: "Maharashtra",
    city: "Pune",
    address: "654 Koregaon Park, Pune, Maharashtra 411001",
    bedrooms: "6",
    bathrooms: "3",
    surface: "6200 sq ft",
    year: "2024",
    price: "22000",
    date: "5",
    agent: {
      image: Agent6,
      name: "Nisha Pillai",
      phone: "0123 456 78910",
    },
  },
  {
    id: 7,
    type: "House",
    name: "House 7",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur.",
    image: House7,
    imageLg: House7Lg,
    country: "Maharashtra",
    city: "Mumbai",
    address: "789 Carter Road, Mumbai, Maharashtra 400050",
    bedrooms: "5",
    bathrooms: "4",
    surface: "3800 sq ft",
    year: "2023",
    price: "42000",
    date: "8",
    agent: {
      image: Agent7,
      name: "Alok Singh",
      phone: "0123 456 78911",
    },
  },
  {
    id: 8,
    type: "House",
    name: "House 8",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur.",
    image: House8,
    imageLg: House8Lg,
    country: "Delhi",
    city: "New Delhi",
    address: "987 Vasant Kunj, New Delhi, Delhi 110070",
    bedrooms: "7",
    bathrooms: "5",
    surface: "5300 sq ft",
    year: "2022",
    price: "37000",
    date: "14",
    agent: {
      image: Agent8,
      name: "Simran Kapoor",
      phone: "0123 456 78912",
    },
  },
  {
    id: 9,
    type: "House",
    name: "House 9",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur.",
    image: House9,
    imageLg: House9Lg,
    country: "Karnataka",
    city: "Bengaluru",
    address: "456 MG Road, Bengaluru, Karnataka 560001",
    bedrooms: "4",
    bathrooms: "3",
    surface: "3800 sq ft",
    year: "2019",
    price: "32000",
    date: "5",
    agent: {
      image: Agent9,
      name: "Ravi Shankar",
      phone: "0123 456 78913",
    },
  },
  {
    id: 10,
    type: "House",
    name: "House 10",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur.",
    image: House10,
    imageLg: House10Lg,
    country: "Tamil Nadu",
    city: "Chennai",
    address: "321 Anna Salai, Chennai, Tamil Nadu 600002",
    bedrooms: "5",
    bathrooms: "3",
    surface: "4200 sq ft",
    year: "2020",
    price: "25000",
    date: "15",
    agent: {
      image: Agent10,
      name: "Lakshmi Menon",
      phone: "0123 456 78914",
    },
  },
  {
    id: 11,
    type: "House",
    name: "House 11",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur.",
    image: House11,
    imageLg: House11Lg,
    country: "Telangana",
    city: "Hyderabad",
    address: "147 Hi-Tech City, Hyderabad, Telangana 500081",
    bedrooms: "5",
    bathrooms: "3",
    surface: "5200 sq ft",
    year: "2023",
    price: "35000",
    date: "22",
    agent: {
      image: Agent11,
      name: "Sanjay Kumar",
      phone: "0123 456 78915",
    },
  },
  {
    id: 12,
    type: "House",
    name: "House 12",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur.",
    image: House12,
    imageLg: House12Lg,
    country: "Maharashtra",
    city: "Pune",
    address: "258 Shivaji Nagar, Pune, Maharashtra 411005",
    bedrooms: "4",
    bathrooms: "2",
    surface: "4300 sq ft",
    year: "2023",
    price: "26000",
    date: "11",
    agent: {
      image: Agent12,
      name: "Rina Deshmukh",
      phone: "0123 456 78916",
    },
  },
];

export const apartmentsData = [
  {
    id: 1,
    type: "Apartment",
    name: "Apartment 1",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur.",
    image: Apartment1,
    imageLg: Apartment1Lg,
    country: "Delhi",
    city: "New Delhi",
    address: "159 Hauz Khas, New Delhi, Delhi 110016",
    bedrooms: "3",
    bathrooms: "2",
    surface: "1200 sq ft",
    year: "2022",
    price: "20000",
    date: "4",
    agent: {
      image: Agent1,
      name: "Rohan Mehta",
      phone: "0123 456 78910",
    },
  },
  {
    id: 2,
    type: "Apartment",
    name: "Apartment 2",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur.",
    image: Apartment2,
    imageLg: Apartment2Lg,
    country: "Maharashtra",
    city: "Mumbai",
    address: "263 Worli Sea Face, Mumbai, Maharashtra 400025",
    bedrooms: "2",
    bathrooms: "1",
    surface: "1100 sq ft",
    year: "2022",
    price: "15000",
    date: "3",
    agent: {
      image: Agent2,
      name: "Aditi Sharma",
      phone: "0123 456 78910",
    },
  },
  {
    id: 3,
    type: "Apartment",
    name: "Apartment 3",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur.",
    image: Apartment3,
    imageLg: Apartment3Lg,
    country: "Tamil Nadu",
    city: "Chennai",
    address: "874 T Nagar, Chennai, Tamil Nadu 600017",
    bedrooms: "3",
    bathrooms: "2",
    surface: "1300 sq ft",
    year: "2023",
    price: "17000",
    date: "6",
    agent: {
      image: Agent3,
      name: "Suresh Nair",
      phone: "0123 456 78910",
    },
  },
  {
    id: 4,
    type: "Apartment",
    name: "Apartment 4",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur.",
    image: Apartment4,
    imageLg: Apartment4Lg,
    country: "Telangana",
    city: "Hyderabad",
    address: "321 Jubilee Hills, Hyderabad, Telangana 500033",
    bedrooms: "2",
    bathrooms: "2",
    surface: "900 sq ft",
    year: "2021",
    price: "14000",
    date: "7",
    agent: {
      image: Agent4,
      name: "Deepa Reddy",
      phone: "0123 456 78910",
    },
  },
  {
    id: 5,
    type: "Apartment",
    name: "Apartment 5",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur.",
    image: Apartment5,
    imageLg: Apartment5Lg,
    country: "Karnataka",
    city: "Bengaluru",
    address: "123 Indiranagar, Bengaluru, Karnataka 560038",
    bedrooms: "3",
    bathrooms: "2",
    surface: "1400 sq ft",
    year: "2020",
    price: "18000",
    date: "5",
    agent: {
      image: Agent5,
      name: "Vikram Joshi",
      phone: "0123 456 78910",
    },
  },
  {
    id: 6,
    type: "Apartment",
    name: "Apartment 6",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet, illoat. Repudiandae ratione impedit delectus consectetur.",
    image: Apartment6,
    imageLg: Apartment6Lg,
    country: "Maharashtra",
    city: "Pune",
    address: "654 Kalyani Nagar, Pune, Maharashtra 411006",
    bedrooms: "2",
    bathrooms: "1",
    surface: "1000 sq ft",
    year: "2021",
    price: "16000",
    date: "4",
    agent: {
      image: Agent6,
      name: "Nisha Pillai",
      phone: "0123 456 78910",
    },
  },
];
