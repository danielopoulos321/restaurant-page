function createMenuItem(name, ingredients){
    const menuItem = document.createElement('div');
    menuItem.classList.add('menuItem');

    const itemName = document.createElement('h2');
    itemName.textContent = name;
    const itemIngredients = document.createElement('p');
    itemIngredients.textContent = ingredients;

    menuItem.appendChild(itemName);
    menuItem.appendChild(itemIngredients);

    return menuItem;
}


function menuLoad() {
    const content = document.getElementById('content');

    const container = document.createElement('div');
    container.classList.add('container');
    container.classList.add('menu');

    const menuItemsData = [
        { name: 'Margherita', ingredients: 'Tomato sauce, Cheese, Basil Leaves' },
        { name: 'Pepperoni', ingredients: 'Tomato sauce, Cheese, Pepperoni' },
        { name: 'Vegetarian', ingredients: 'Tomato sauce, Cheese, Various Veggies' },
    ];

    menuItemsData.forEach(menuItemData => {
        const menuItem = createMenuItem(menuItemData.name, menuItemData.ingredients);
        container.appendChild(menuItem);
    });

    content.appendChild(container);
}

export default menuLoad;