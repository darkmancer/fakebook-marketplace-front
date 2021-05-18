export const Category = [
  {
    Title: "Home & Garden",
    icon: null,
    Menu: [
      {
        type: "Tool",
      },
      {
        type: "Furniture",
      },
      {
        type: "HouseHold",
      },
      {
        type: "Garden",
      },
      {
        type: "Appliances",
      },
    ],
  },
  {
    Title: "Entertainment",
    icon: null,
    Menu: [
      {
        type: "Video Games",
      },
      {
        type: "Books,Movie & Music",
      },
    ],
  },
  {
    Title: "Clothing & Accessories",
    icon: null,
    Menu: [
      {
        type: "Bag & Luggage",
      },
      {
        type: "Women's Clothing & Shoes",
      },
      {
        type: "Men's Clothing & Shoes",
      },
      {
        type: "Jewelry & Accessories",
      },
    ],
  },

  {
    Title: "Family",
    icon: null,
    Menu: [
      {
        type: "Health & Beauty",
      },
      {
        type: "Pet Supplies",
      },
      {
        type: "Baby & Kids",
      },
      {
        type: "Toy & Games",
      },
    ],
  },

  {
    Title: "Electronics",
    icon: null,
    Menu: [
      {
        type: "Electronics & Computers",
      },
      {
        type: "Moblie Phones",
      },
    ],
  },
  {
    Title: "Hobbies",
    icon: null,
    Menu: [
      {
        type: "Bicycles",
      },
      {
        type: "Arts & Crafts",
      },
      {
        type: "Sports & Outdoors",
      },
      {
        type: "Auto Parts",
      },
      {
        type: "Musical & Intruments",
      },
      {
        type: "Antiques & Collectibles",
      },
    ],
  },
];
export const condition = [
  { condition: "New" },
  { condition: "Used - Like New" },
  { condition: "Used - Good" },
  { condition: "Used - Fair" },
];
export const vehicleType = [
  {
    type: "Car/Type",
  },
  {
    type: "MotorCycle",
  },
  {
    type: "PowerSport",
  },
  {
    type: "RV/Camper",
  },
  {
    type: "Trailer",
  },
  {
    type: "Boat",
  },
  {
    type: "Commercial/Industrial",
  },
  {
    type: "Other",
  },
];
var curYear = new Date().getFullYear();
let date = [];
let i;
for (i = curYear; i >= curYear - 30; i--) {
  date.push(i);
}
export const year = date;
