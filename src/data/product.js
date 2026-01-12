import smartStorage from "./smart-storage.json";
import artiq from "./artiq.json";

export const products = [
  {
    image: "/assets/smart-storage.png",
    alt: "Smart Storage",
    title: "Smart Storage",
    desc: "Elegant, practical, and versatile — a smart storage solution for your modern space.",
    link: "smart-storage",
    collection: smartStorage,
  },
  {
    image: "/assets/smart-home-appliance.png",
    alt: "Smart Home Appliance",
    title: "Smart Home Appliance",
    desc: "Innovative appliances for a connected lifestyle.",
    collection: []
  },
  {
    image: "/assets/gadget-accessories.png",
    alt: "Gadget Accessories",
    title: "Gadget Accessories",
    desc: "Elevate your gadget experience with next-level accessories",
    collection: []
  },
  {
    image: "/assets/arti-q.png",
    alt: "Arti-Q Powerbank",
    title: "Arti-Q Powerbank",
    desc: "Portable power for your nonstop lifestyle.",
    collection: artiq
  },
];
