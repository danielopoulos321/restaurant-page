function createMenuItem(name, ingredients){
    const menuItem = document.createElement('div');
    menuItem.classList.add('menuItem');
    menuItem.classList.add('column');

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
        { name: 'Quattro Formaggi', ingredients: 'Tomato sauce, Mozzarella, Parmesan, Gorgonzola, Buffala' },
        { name: 'Vegetarian', ingredients: 'Tomato sauce, Cheese, Various Veggies' },
        { name: 'Capricciosa', ingredients: 'Tomato sauce, Mozzarella, Mushroom, Baked Ham, Artichoke' },
        { name: 'Neapolitan', ingredients: 'Tomato sauce, Cheese, Pomodoro' },
        { name: 'Caprese', ingredients: 'Tomato sauce, Mozzarella, Caprese Salad, Basilo Leaves' },
    ];

    menuItemsData.forEach(menuItemData => {
        const menuItem = createMenuItem(menuItemData.name, menuItemData.ingredients);
        container.appendChild(menuItem);
    });

    content.appendChild(container);
}

export default menuLoad;