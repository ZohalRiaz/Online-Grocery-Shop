// TEMPORARY: sample data shaped exactly like the Django API answers.
// Edit freely (names, prices, stock). Delete this file when the real backend is connected.

export const CATEGORIES = [
  { id: 1, name: "Fruits & Vegetables", slug: "fruits-vegetables" },
  { id: 2, name: "Dairy & Eggs", slug: "dairy-eggs" },
  { id: 3, name: "Bakery", slug: "bakery" },
  { id: 4, name: "Snacks", slug: "snacks" },
  { id: 5, name: "Beverages", slug: "beverages" },
  { id: 6, name: "Household", slug: "household" },
  { id: 7, name: "Personal Care", slug: "personal-care" },
];

// [category id, name, emoji, price, unit, stock, description]
// Stock 0 shows "Out of stock"; a small stock shows a low number on the product page.
const ROWS = [
  [1, "Apple", "🍎", "1.50", "per lb", 50, "Fresh and juicy apples, rich in nutrients and perfect for a healthy lifestyle."],
  [1, "Banana", "🍌", "1.20", "per lb", 60, "Sweet, ripe bananas. A quick snack that keeps you going."],
  [1, "Orange", "🍊", "1.80", "per lb", 45, "Bright, juicy oranges packed with vitamin C."],
  [1, "Strawberries", "🍓", "3.50", "1 pint", 30, "Sweet red strawberries, great for breakfast or dessert."],
  [1, "Grapes", "🍇", "3.20", "per lb", 28, "Seedless grapes, crisp and sweet."],
  [1, "Watermelon", "🍉", "4.50", "each", 0, "A big, refreshing watermelon for hot days."],
  [1, "Tomato", "🍅", "2.10", "per lb", 40, "Vine-ripened tomatoes for salads, sauces and sandwiches."],
  [1, "Carrot", "🥕", "1.30", "per lb", 55, "Crunchy carrots, good raw or cooked."],
  [1, "Potato", "🥔", "0.99", "per lb", 80, "All-purpose potatoes for boiling, baking and frying."],
  [1, "Broccoli", "🥦", "2.40", "per head", 25, "Fresh green broccoli, steam it or stir-fry it."],
  [1, "Cucumber", "🥒", "0.90", "each", 35, "Cool, crisp cucumbers."],
  [1, "Onion", "🧅", "1.10", "per lb", 70, "Yellow onions, the base of almost every dish."],
  [2, "Milk", "🥛", "2.00", "1 L", 40, "Fresh whole milk."],
  [2, "Eggs", "🥚", "2.50", "dozen", 36, "Farm eggs, a dozen per carton."],
  [2, "Cheddar Cheese", "🧀", "4.20", "200 g", 22, "Mature cheddar with a sharp, rich flavour."],
  [2, "Butter", "🧈", "3.60", "250 g", 30, "Creamy salted butter."],
  [2, "Plain Yogurt", "🥣", "1.90", "500 g", 26, "Thick, plain yogurt with live cultures."],
  [3, "Bread", "🍞", "2.00", "loaf", 0, "Soft sandwich loaf, baked fresh every morning."],
  [3, "Croissant", "🥐", "1.40", "each", 24, "Buttery, flaky croissant."],
  [3, "Bagels", "🥯", "3.00", "pack of 4", 18, "Chewy bagels, perfect toasted."],
  [4, "Potato Chips", "🥔", "2.20", "150 g", 45, "Lightly salted, extra crunchy."],
  [4, "Chocolate Bar", "🍫", "1.60", "100 g", 60, "Smooth milk chocolate."],
  [4, "Cookies", "🍪", "2.80", "pack", 38, "Chocolate chip cookies, soft in the middle."],
  [4, "Popcorn", "🍿", "1.75", "100 g", 33, "Ready-to-eat buttery popcorn."],
  [4, "Mixed Nuts", "🥜", "5.50", "250 g", 3, "Roasted almonds, cashews and peanuts."],
  [5, "Orange Juice", "🧃", "3.30", "1 L", 32, "100% squeezed orange juice, no added sugar."],
  [5, "Bottled Water", "💧", "0.80", "1.5 L", 120, "Natural spring water."],
  [5, "Green Tea", "🍵", "3.90", "20 bags", 27, "Light and refreshing green tea bags."],
  [5, "Ground Coffee", "☕", "6.50", "250 g", 18, "Medium roast ground coffee."],
  [5, "Cola", "🥤", "1.50", "500 ml", 70, "Chilled cola."],
  [6, "Dish Soap", "🧴", "2.60", "500 ml", 30, "Cuts through grease, gentle on hands."],
  [6, "Paper Towels", "🧻", "4.80", "2 rolls", 25, "Strong, absorbent paper towels."],
  [6, "Laundry Detergent", "🫧", "8.90", "2 L", 15, "Fresh scent, works in cold water."],
  [7, "Toothpaste", "🪥", "2.40", "100 ml", 40, "Fluoride toothpaste for daily use."],
  [7, "Shampoo", "🧼", "4.50", "400 ml", 28, "Gentle shampoo for all hair types."],
  [7, "Hand Soap", "🧼", "1.90", "250 ml", 35, "Moisturising liquid hand soap."],
];

export const PRODUCTS = ROWS.map(([categoryId, name, emoji, price, unit, stock, description], index) => {
  const category = CATEGORIES.find((item) => item.id === categoryId);
  return {
    id: index + 1,
    name,
    description,
    price,
    unit,
    stock,
    emoji,
    image_url: "", // paste any picture link here to see how real photos look
    is_active: true,
    sold_count: (index * 7) % 23,
    category: category.id,
    category_name: category.name,
    category_slug: category.slug,
  };
});
