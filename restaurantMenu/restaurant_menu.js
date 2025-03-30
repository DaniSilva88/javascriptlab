const breakfastMenu = ['Pancakes', 'Eggs Benedict', 'Oatmeal', 'Frittata'];
const breakfastMenuWithPrices = ['Pancakes - $12', 'Eggs Benedict - $22.99', 'Oatmeal - $21.99', 'Frittata - $15'];

const mainCourseMenu = ['Steak', 'Pasta', 'Burger', 'Salmon'];
const mainCourseMenuWithPrices = ['Steak - $35', 'Pasta - $32', 'Burger - $30', 'Salmon - $40'];

const dessertMenu = ['Cake', 'Ice Cream', 'Pudding', 'Fruit Salad'];
const dessertMenuWithPrices = ['Cake - $5', 'Ice Cream - $4', 'Pudding - $4', 'Fruit Salad - $3'];

const breakfastMenuItemsHTML = breakfastMenuWithPrices.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');
document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;

let mainCourseItem = '';
mainCourseMenuWithPrices.forEach((item, index) => {
mainCourseItem += `<p>Item ${index + 1}: ${item}</p>`;});
document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;

let dessertItem = '';
for (let i = 0; i < dessertMenuWithPrices.length; i++) {
    dessertItem += `<p>Item ${i + 1}: ${dessertMenuWithPrices[i]}</p>`;}
document.getElementById('dessertMenuItems').innerHTML = dessertItem;