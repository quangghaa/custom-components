import { Customer } from "./types";

export const fakeDataUrl =
  "https://randomuser.me/api/?results=20&inc=name,gender,email,nat,picture&noinfo";
export const ContainerHeight = 700;

export const data: Customer[] = [
  {
    name: "Figma Tokyo",
    trade: "Wood",
    totalWorkhours: 583,
    subcontractors: [
      { name: "Atlanta lumberyard", totalWorkhours: 168 },
      { name: "Wood crafters", totalWorkhours: 72 },
      { name: "Tom & Ford Brothers", totalWorkhours: 52 },
    ],
  },
  {
    name: "Facebook Atlanta",
    trade: "Wood",
    totalWorkhours: 703,
    subcontractors: [
      { name: "Atlanta lumberyard", totalWorkhours: 168 },
      { name: "Wood crafters", totalWorkhours: 72 },
      { name: "Tom & Ford Brothers", totalWorkhours: 52 },
    ],
  },
  {
    name: "Framer Headquaters",
    trade: "Wood",
    totalWorkhours: 496,
    subcontractors: [
      { name: "Atlanta lumberyard", totalWorkhours: 168 },
      { name: "Wood crafters", totalWorkhours: 72 },
      { name: "Tom & Ford Brothers", totalWorkhours: 52 },
    ],
  },
  {
    name: "Intercom Hong Kong",
    trade: "Wood",
    totalWorkhours: 213,
    subcontractors: [
      { name: "Atlanta lumberyard", totalWorkhours: 168 },
      { name: "Wood crafters", totalWorkhours: 72 },
      { name: "Tom & Ford Brothers", totalWorkhours: 52 },
    ],
  },
  {
    name: "Twitter HQ",
    trade: "Wood",
    totalWorkhours: 321,
    subcontractors: [
      { name: "Atlanta lumberyard", totalWorkhours: 168 },
      { name: "Wood crafters", totalWorkhours: 72 },
      { name: "Tom & Ford Brothers", totalWorkhours: 52 },
    ],
  },
];
