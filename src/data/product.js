import smartStorage from "./smart-storage.json";
import artiq from "./artiq-powerbank.json";
import gadget from "./gadget-accessories.json";

export const products = [
  {
    image: "/assets/smart-storage.png",
    alt: "Smart Storage",
    title: "Smart Storage",
    desc: "Elegant, practical, and versatile — a smart storage solution for your modern space",
    link: "smart-storage",
    collection: smartStorage,
  },
  {
    image: "/assets/smart-home-appliance.png",
    alt: "Smart Home Appliance",
    title: "Smart Home Appliance",
    desc: "Innovative appliances for a connected lifestyle",
    collection: []
  },
  {
    image: "/assets/gadget-accessories.png",
    alt: "Gadget Accessories",
    title: "Gadget Accessories",
    desc: "Explore our Gadget Accessories made from plastic and sea waste",
    collection: gadget
  },
  {
    image: "/assets/arti-q.png",
    alt: "ArtiQ Powerbank",
    title: "ArtiQ Powerbank",
    desc: "Explore our Powerbank made from recycled material such plastic and sea waste",
    collection: artiq
  },
];
