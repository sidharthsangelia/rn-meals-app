import Category from '../models/category';
import Meal from '../models/meal';

export const CATEGORIES = [
  new Category('c1', 'Italian', '#f5428d'),
  new Category('c2', 'Quick & Easy', '#f54242'),
  new Category('c3', 'Hamburgers', '#f5a442'),
  new Category('c4', 'German', '#f5d142'),
  new Category('c5', 'Light & Lovely', '#368dff'),
  new Category('c6', 'Exotic', '#41d95d'),
  new Category('c7', 'Breakfast', '#9eecff'),
  new Category('c8', 'Asian', '#b9ffb0'),
  new Category('c9', 'French', '#ffc7ff'),
  new Category('c10', 'Summer', '#47fced')
];

export const MEALS = [
  new Meal(
    'm1',
    ['c1', 'c2'],
    'Spaghetti with Tomato Sauce',
    'affordable',
    'simple',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/2/20/Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg/800px-Spaghetti_Bolognese_mit_Parmesan_oder_Grana_Padano.jpg',
    20,
    [
      '4 Tomatoes',
      '1 Tablespoon of Olive Oil',
      '1 Onion',
      '250g Spaghetti',
      'Spices',
      'Cheese (optional)'
    ],
    [
      'Cut the tomatoes and the onion into small pieces.',
      'Boil some water - add salt to it once it boils.',
      'Put the spaghetti into the boiling water - they should be done in about 10 to 12 minutes.',
      'In the meantime, heaten up some olive oil and add the cut onion.',
      'After 2 minutes, add the tomato pieces, salt, pepper and your other spices.',
      'The sauce will be done once the spaghetti are.',
      'Feel free to add some cheese on top of the finished dish.'
    ],
    false,
    true,
    true,
    true
  ),

  new Meal(
    'm2',
    ['c2'],
    'Toast Hawaii',
    'affordable',
    'simple',
    'https://cdn.pixabay.com/photo/2018/07/11/21/51/toast-3532016_1280.jpg',
    10,
    [
      '1 Slice White Bread',
      '1 Slice Ham',
      '1 Slice Pineapple',
      '1-2 Slices of Cheese',
      'Butter'
    ],
    [
      'Butter one side of the white bread',
      'Layer ham, the pineapple and cheese on the white bread',
      'Bake the toast for round about 10 minutes in the oven at 200°C'
    ],
    false,
    false,
    false,
    false
  ),

  new Meal(
    'm3',
    ['c3'],
    'Classic Hamburger',
    'pricey',
    'simple',
    'https://cdn.pixabay.com/photo/2014/10/23/18/05/burger-500054_1280.jpg',
    45,
    [
      '300g Cattle Hack',
      '1 Tomato',
      '1 Cucumber',
      '1 Onion',
      'Ketchup',
      '2 Burger Buns'
    ],
    [
      'Form 2 patties',
      'Fry the patties for c. 4 minutes on each side',
      'Quickly fry the buns for c. 1 minute on each side',
      'Bruch buns with ketchup',
      'Serve burger with tomato, cucumber and onion'
    ],
    false,
    false,
    false,
    true
  ),

  new Meal(
    'm4',
    ['c4'],
    'Wiener Schnitzel',
    'luxurious',
    'challenging',
    'https://cdn.pixabay.com/photo/2018/03/31/19/29/schnitzel-3279045_1280.jpg',
    60,
    [
      '8 Veal Cutlets',
      '4 Eggs',
      '200g Bread Crumbs',
      '100g Flour',
      '300ml Butter',
      '100g Vegetable Oil',
      'Salt',
      'Lemon Slices'
    ],
    [
      'Tenderize the veal to about 2–4mm, and salt on both sides.',
      'On a flat plate, stir the eggs briefly with a fork.',
      'Lightly coat the cutlets in flour then dip into the egg, and finally, coat in breadcrumbs.',
      'Heat the butter and oil in a large pan (allow the fat to get very hot) and fry the schnitzels until golden brown on both sides.',
      'Make sure to toss the pan regularly so that the schnitzels are surrounded by oil and the crumbing becomes ‘fluffy’.',
      'Remove, and drain on kitchen paper. Fry the parsley in the remaining oil and drain.',
      'Place the schnitzels on awarmed plate and serve garnishedwith parsley and slices of lemon.'
    ],
    false,
    false,
    false,
    false
  ),

  new Meal(
    'm5',
    ['c2', 'c5', 'c10'],
    'Salad with Smoked Salmon',
    'luxurious',
    'simple',
    'https://cdn.pixabay.com/photo/2016/10/25/13/29/smoked-salmon-salad-1768890_1280.jpg',
    15,
    [
      'Arugula',
      "Lamb's Lettuce",
      'Parsley',
      'Fennel',
      '200g Smoked Salmon',
      'Mustard',
      'Balsamic Vinegar',
      'Olive Oil',
      'Salt and Pepper'
    ],
    [
      'Wash and cut salad and herbs',
      'Dice the salmon',
      'Process mustard, vinegar and olive oil into a dessing',
      'Prepare the salad',
      'Add salmon cubes and dressing'
    ],
    true,
    false,
    true,
    true
  ),

  new Meal(
    'm6',
    ['c6', 'c10'],
    'Delicious Orange Mousse',
    'affordable',
    'hard',
    'https://cdn.pixabay.com/photo/2017/05/01/05/18/pastry-2274750_1280.jpg',
    240,
    [
      '4 Sheets of Gelatine',
      '150ml Orange Juice',
      '80g Sugar',
      '300g Yoghurt',
      '200g Cream',
      'Orange Peel'
    ],
    [
      'Dissolve gelatine in pot',
      'Add orange juice and sugar',
      'Take pot off the stove',
      'Add 2 tablespoons of yoghurt',
      'Stir gelatin under remaining yoghurt',
      'Cool everything down in the refrigerator',
      'Whip the cream and lift it under die orange mass',
      'Cool down again for at least 4 hours',
      'Serve with orange peel'
    ],
    true,
    false,
    true,
    false
  ),

  new Meal(
    'm7',
    ['c7'],
    'Pancakes',
    'affordable',
    'simple',
    'https://cdn.pixabay.com/photo/2018/07/10/21/23/pancake-3529653_1280.jpg',
    20,
    [
      '1 1/2 Cups all-purpose Flour',
      '3 1/2 Teaspoons Baking Powder',
      '1 Teaspoon Salt',
      '1 Tablespoon White Sugar',
      '1 1/4 cups Milk',
      '1 Egg',
      '3 Tablespoons Butter, melted'
    ],
    [
      'In a large bowl, sift together the flour, baking powder, salt and sugar.',
      'Make a well in the center and pour in the milk, egg and melted butter; mix until smooth.',
      'Heat a lightly oiled griddle or frying pan over medium high heat.',
      'Pour or scoop the batter onto the griddle, using approximately 1/4 cup for each pancake. Brown on both sides and serve hot.'
    ],
    true,
    false,
    true,
    false
  ),

  new Meal(
    'm8',
    ['c8'],
    'Creamy Indian Chicken Curry',
    'pricey',
    'challenging',
    'https://cdn.pixabay.com/photo/2018/06/18/16/05/indian-food-3482749_1280.jpg',
    35,
    [
      '4 Chicken Breasts',
      '1 Onion',
      '2 Cloves of Garlic',
      '1 Piece of Ginger',
      '4 Tablespoons Almonds',
      '1 Teaspoon Cayenne Pepper',
      '500ml Coconut Milk'
    ],
    [
      'Slice and fry the chicken breast',
      'Process onion, garlic and ginger into paste and sauté everything',
      'Add spices and stir fry',
      'Add chicken breast + 250ml of water and cook everything for 10 minutes',
      'Add coconut milk',
      'Serve with rice'
    ],
    true,
    false,
    false,
    true
  ),

  new Meal(
    'm9',
    ['c9'],
    'Chocolate Souffle',
    'affordable',
    'hard',
    'https://cdn.pixabay.com/photo/2014/08/07/21/07/souffle-412785_1280.jpg',
    45,
    [
      '1 Teaspoon melted Butter',
      '2 Tablespoons white Sugar',
      '2 Ounces 70% dark Chocolate, broken into pieces',
      '1 Tablespoon Butter',
      '1 Tablespoon all-purpose Flour',
      '4 1/3 tablespoons cold Milk',
      '1 Pinch Salt',
      '1 Pinch Cayenne Pepper',
      '1 Large Egg Yolk',
      '2 Large Egg Whites',
      '1 Pinch Cream of Tartar',
      '1 Tablespoon white Sugar'
    ],
    [
      'Preheat oven to 190°C. Line a rimmed baking sheet with parchment paper.',
      'Brush bottom and sides of 2 ramekins lightly with 1 teaspoon melted butter; cover bottom and sides right up to the rim.',
      'Add 1 tablespoon white sugar to ramekins. Rotate ramekins until sugar coats all surfaces.',
      'Place chocolate pieces in a metal mixing bowl.',
      'Place bowl over a pan of about 3 cups hot water over low heat.',
      'Melt 1 tablespoon butter in a skillet over medium heat. Sprinkle in flour. Whisk until flour is incorporated into butter and mixture thickens.',
      'Whisk in cold milk until mixture becomes smooth and thickens. Transfer mixture to bowl with melted chocolate.',
      'Add salt and cayenne pepper. Mix together thoroughly. Add egg yolk and mix to combine.',
      'Leave bowl above the hot (not simmering) water to keep chocolate warm while you whip the egg whites.',
      'Place 2 egg whites in a mixing bowl; add cream of tartar. Whisk until mixture begins to thicken and a drizzle from the whisk stays on the surface about 1 second before disappearing into the mix.',
      'Add 1/3 of sugar and whisk in. Whisk in a bit more sugar about 15 seconds.',
      'whisk in the rest of the sugar. Continue whisking until mixture is about as thick as shaving cream and holds soft peaks, 3 to 5 minutes.',
      'Transfer a little less than half of egg whites to chocolate.',
      'Mix until egg whites are thoroughly incorporated into the chocolate.',
      'Add the rest of the egg whites; gently fold into the chocolate with a spatula, lifting from the bottom and folding over.',
      'Stop mixing after the egg white disappears. Divide mixture between 2 prepared ramekins. Place ramekins on prepared baking sheet.',
      'Bake in preheated oven until scuffles are puffed and have risen above the top of the rims, 12 to 15 minutes.'
    ],
    true,
    false,
    true,
    false
  ),
  new Meal(
    'm10',
    ['c2', 'c5', 'c10'],
    'Asparagus Salad with Cherry Tomatoes',
    'luxurious',
    'simple',
    'https://cdn.pixabay.com/photo/2018/04/09/18/26/asparagus-3304997_1280.jpg',
    30,
    [
      'White and Green Asparagus',
      '30g Pine Nuts',
      '300g Cherry Tomatoes',
      'Salad',
      'Salt, Pepper and Olive Oil'
    ],
    [
      'Wash, peel and cut the asparagus',
      'Cook in salted water',
      'Salt and pepper the asparagus',
      'Roast the pine nuts',
      'Halve the tomatoes',
      'Mix with asparagus, salad and dressing',
      'Serve with Baguette'
    ],
    true,
    true,
    true,
    true
  ),

    // ----- New Meals for Category c2 (Quick & Easy) -----
  new Meal(
    'm16',
    ['c2'],
    'Grilled Cheese Sandwich',
    'affordable',
    'simple',
    'https://media.istockphoto.com/id/2046217346/photo/indian-plain-sandwich-with-vegetable-and-sauce-in-plate-india-closeup.webp?a=1&b=1&s=612x612&w=0&k=20&c=h1IElcBz0IfqNOe9Ol-7ATB6KE3DK8cqNhOZjstok_k=',
    10,
    [
      'Bread slices',
      'Cheddar cheese',
      'Butter'
    ],
    [
      'Butter one side of each bread slice.',
      'Place cheese between unbuttered sides.',
      'Grill on skillet until golden and cheese melts.'
    ],
    true,
    true,
    true,
    true
  ),
  new Meal(
    'm17',
    ['c2'],
    'Avocado Toast',
    'affordable',
    'simple',
    'https://images.unsplash.com/photo-1585768425229-d3a88ff63ebb?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YXZhY2FkbyUyMHRvYXN0fGVufDB8fDB8fHww',
    8,
    [
      'Bread slices',
      'Ripe avocado',
      'Salt',
      'Pepper',
      'Lemon juice'
    ],
    [
      'Toast the bread.',
      'Mash avocado with salt, pepper, and lemon juice.',
      'Spread on toast and serve.'
    ],
    true,
    true,
    true,
    true
  ),
  new Meal(
    'm18',
    ['c2'],
    'Omelette',
    'affordable',
    'simple',
    'https://plus.unsplash.com/premium_photo-1667807521536-bc35c8d8b64b?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8T21lbGV0dGV8ZW58MHx8MHx8fDA%3D',
    7,
    [
      'Eggs',
      'Salt',
      'Pepper',
      'Butter',
      'Cheese (optional)'
    ],
    [
      'Beat eggs with salt and pepper.',
      'Heat butter in pan and pour eggs.',
      'Cook until set, add cheese if desired, fold and serve.'
    ],
    true,
    true,
    true,
    true
  ),
  new Meal(
    'm19',
    ['c2'],
    'Chicken Wrap',
    'pricey',
    'simple',
    'https://plus.unsplash.com/premium_photo-1679287668420-80c27ea4fb31?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y2hpY2tlbiUyMHdyYXB8ZW58MHx8MHx8fDA%3D',
    15,
    [
      'Tortilla wraps',
      'Cooked chicken strips',
      'Lettuce',
      'Tomatoes',
      'Mayonnaise'
    ],
    [
      'Warm tortillas.',
      'Layer lettuce, tomato, and chicken.',
      'Drizzle with mayonnaise and roll up.'
    ],
    false,
    true,
    true,
    false
  ),
  new Meal(
    'm20',
    ['c2'],
    'Fruit Smoothie',
    'affordable',
    'simple',
    'https://images.unsplash.com/photo-1589733955941-5eeaf752f6dd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8RnJ1aXQlMjBTbW9vdGhpZXxlbnwwfHwwfHx8MA%3D%3D',
    5,
    [
      'Banana',
      'Berries',
      'Yogurt',
      'Honey'
    ],
    [
      'Blend banana, berries, yogurt, and honey until smooth.',
      'Serve chilled.'
    ],
    true,
    true,
    true,
    true
  ),

  // ----- New Meals for Category c3 (Hamburgers) -----
  new Meal(
    'm21',
    ['c3'],
    'Classic Burger',
    'affordable',
    'simple',
    'https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246_1280.jpg',
    20,
    [
      'Beef patties',
      'Burger buns',
      'Lettuce',
      'Tomato',
      'Cheddar cheese',
      'Ketchup'
    ],
    [
      'Grill beef patties until cooked.',
      'Toast buns lightly.',
      'Assemble burger with lettuce, tomato, cheese, and ketchup.'
    ],
    false,
    true,
    false,
    false
  ),
  new Meal(
    'm22',
    ['c3'],
    'Chicken Burger',
    'pricey',
    'simple',
    'https://media.istockphoto.com/id/1203580318/photo/vegan-meatless-plant-based-protein-chicken-strip-burger-on-a-whole-wheat-bun-with-lettuce.webp?a=1&b=1&s=612x612&w=0&k=20&c=Mbu79b068FJ4AHQb6BZDLeB1Lz9Hcc0h_EP8dXv5J5Q=',
    25,
    [
      'Chicken breast',
      'Burger buns',
      'Lettuce',
      'Mayonnaise',
      'Pickles'
    ],
    [
      'Grill chicken breast until cooked through.',
      'Toast buns and spread mayonnaise.',
      'Assemble with lettuce, pickles, and chicken.'
    ],
    false,
    true,
    true,
    false
  ),
  new Meal(
    'm23',
    ['c3'],
    'Veggie Burger',
    'affordable',
    'simple',
    'https://cdn.pixabay.com/photo/2016/03/05/19/02/hamburger-1238246_1280.jpg',
    20,
    [
      'Veggie patty',
      'Burger buns',
      'Lettuce',
      'Tomato',
      'Mustard'
    ],
    [
      'Cook veggie patty on skillet.',
      'Toast buns and assemble with veggies and mustard.'
    ],
    true,
    true,
    true,
    true
  ),
  new Meal(
    'm24',
    ['c3'],
    'Double Bacon Cheeseburger',
    'luxurious',
    'hard',
    'https://media.istockphoto.com/id/471927383/photo/the-pretzel-burger.webp?a=1&b=1&s=612x612&w=0&k=20&c=JifP91X6ldnZFJnTqteUajk0wC72sJofBFB4YzlZNps=',
    35,
    [
      'Beef patties',
      'Burger buns',
      'Cheddar cheese',
      'Bacon',
      'Lettuce',
      'Tomato',
      'BBQ sauce'
    ],
    [
      'Cook bacon until crispy.',
      'Grill beef patties, melt cheese on top.',
      'Assemble with bacon, veggies, and BBQ sauce.'
    ],
    false,
    false,
    false,
    false
  ),
  new Meal(
    'm25',
    ['c3'],
    'Spicy Jalapeño Burger',
    'pricey',
    'challenging',
    'https://images.unsplash.com/photo-1582900125020-4d314f8a5de8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8SmFsYXBlJUMzJUIxbyUyMEJ1cmdlcnxlbnwwfHwwfHx8MA%3D%3D',
    30,
    [
      'Beef patties',
      'Burger buns',
      'Pepper jack cheese',
      'Jalapeños',
      'Chipotle mayo'
    ],
    [
      'Grill patties, melt cheese.',
      'Assemble with jalapeños and chipotle mayo.'
    ],
    false,
    false,
    false,
    false
  ),


  
];