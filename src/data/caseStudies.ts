export type CaseStudy = {
  id: number;
  before: string;
  after: string;
  category: string;
  title: string;
  beforeDescription: string;
  afterDescription: string;
  points: string[];
};

export const caseStudies: CaseStudy[] = [
  {
    id: 1,
    before: "/beforeafter/before1.png",
    after: "/beforeafter/after1.png",
    category: "Case Study 01",
    title: "Modern Kitchen Transformation",
    beforeDescription:
      "The kitchen showed its age: traditional wood cabinets, light tile flooring, and white freestanding appliances. Counter space was broken up and the room felt closed in. Overhead lighting left corners in shadow, and there was no clear focal point for cooking or entertaining.",
    afterDescription:
      "White shaker-style cabinetry and a large central island now define the space. Dark built-in appliances and rich flooring add contrast, while quartz counters and a clean backsplash keep the look bright. Under-cabinet and ceiling lighting make prep and cleanup a pleasure, and the layout supports both daily use and gatherings.",
    points: [
      "Custom cabinetry with soft-close hinges and premium finishes",
      "Quartz countertops and upgraded backsplash",
      "Large island with seating and integrated appliances",
      "Under-cabinet and overhead lighting for task and ambient light",
      "Unified dark flooring and modern hardware throughout",
    ],
  },
  {
    id: 2,
    before: "/beforeafter/before2.png",
    after: "/beforeafter/after2.png",
    category: "Case Study 02",
    title: "Open-Plan Living & Kitchen",
    beforeDescription:
      "Exposed studs, plastic sheeting, and a partially built staircase showed a space mid-renovation. A wall had been removed but the area was still disconnected—no finished flooring, no cabinetry, and no link between the kitchen zone and the rest of the home. Natural light didn’t reach the back of the space.",
    afterDescription:
      "One continuous room now connects kitchen, dining, and living. White cabinetry and a light blue island anchor the cooking area; stainless appliances and light wood flooring run through the space. The staircase is fully finished with matching treads and railings, so the flow from entry to upper level feels intentional and open.",
    points: [
      "Removed wall and opened sightlines for seamless flow",
      "Unified light wood flooring and cohesive color palette",
      "White cabinetry with blue island and integrated storage",
      "Finished staircase with matching treads and railings",
      "Stainless appliances and improved natural light",
    ],
  },
  {
    id: 3,
    before: "/beforeafter/before3.png",
    after: "/beforeafter/after3.png",
    category: "Case Study 03",
    title: "Luxury Chef's Kitchen",
    beforeDescription:
      "The area was raw and unfinished: exposed ceiling joists, cinder block walls, and utility-style lighting. Boxes and clutter suggested storage was an afterthought. The space felt like a basement or back-of-house zone with no connection to the rest of the home or to a real cooking and living experience.",
    afterDescription:
      "A bright, finished stairwell and hallway now greet you. Clean white door, light walls, and modern wooden stairs with simple balusters create a calm transition between levels. The lighting is soft and even, and every surface feels intentional—no exposed structure, no block walls—just a polished, welcoming path through the home.",
    points: [
      "Finished walls and ceiling; removed exposed structure",
      "Modern wooden staircase with updated balusters and rail",
      "Clean white door and light wall color for brightness",
      "Professional lighting and clear sightlines",
      "Elegant hardware and cohesive finishes",
    ],
  },
  {
    id: 4,
    before: "/beforeafter/before4.png",
    after: "/beforeafter/after4.png",
    category: "Case Study 04",
    title: "Classic to Contemporary",
    beforeDescription:
      "Brown lower cabinets, white uppers, and white appliances made the kitchen feel dated. Counter space was limited and the sink area felt tight. The layout didn’t support a smooth workflow, and the room read as dark and closed off despite the window.",
    afterDescription:
      "A full refresh: white cabinetry on uppers and lowers, black cooktop for contrast, and clean countertops. The sink zone is more generous and the layout supports prep, cooking, and cleanup in a logical flow. The space feels larger, brighter, and fully updated while staying practical for everyday use.",
    points: [
      "Full cabinet reface and new door fronts in white",
      "Stone counters and modern sink configuration",
      "Black cooktop and updated appliance package",
      "Improved layout for cooking and cleanup workflow",
      "Light finishes and balanced task lighting",
    ],
  },
  {
    id: 5,
    before: "/beforeafter/before5.png",
    after: "/beforeafter/after5.png",
    category: "Case Study 05",
    title: "Compact Kitchen Makeover",
    beforeDescription:
      "A small kitchen with brown lower cabinets, white appliances, and limited storage. The fridge dominated one wall and counter space was at a premium. The room felt tight and dated, with no pull-outs or smart storage to make the most of the footprint.",
    afterDescription:
      "White upper and lower cabinets and a black cooktop give the compact kitchen a clean, modern look. Counters are continuous and storage is boosted with pull-outs and efficient organizers. The light palette and updated fixtures make the small space feel open and easy to work in.",
    points: [
      "Space-efficient cabinetry with pull-outs and organizers",
      "Light white palette to maximize perceived space",
      "Black cooktop and white counters for contrast",
      "Updated lighting and fixtures",
      "Streamlined layout so every inch works harder",
    ],
  },
  {
    id: 6,
    before: "/beforeafter/before6.png",
    after: "/beforeafter/after6.png",
    category: "Case Study 06",
    title: "Staircase & Entry Refresh",
    beforeDescription:
      "Green walls, a traditional hanging light fixture, and patterned floor tile made the entry and stair feel stuck in the past. The stair itself was functional but visually disconnected from the rest of the home. The space didn’t set the right tone for the rest of the house.",
    afterDescription:
      "Light, neutral walls and new flooring create a calm welcome. The staircase is refinished with updated treads, balusters, and handrail so it feels part of the same story as the entry. Improved lighting and a cohesive palette tie the levels together and give the home a polished first impression.",
    points: [
      "Refinished stair treads and new balusters",
      "Matching handrail and coordinated hardware",
      "Neutral wall color and new flooring in entry",
      "Updated lighting for safety and ambiance",
      "Cohesive look with adjacent rooms",
    ],
  },
];

export function getCaseStudyById(id: number | string): CaseStudy | undefined {
  const n = typeof id === "string" ? parseInt(id, 10) : id;
  if (!Number.isFinite(n)) return undefined;
  return caseStudies.find((c) => c.id === n);
}
