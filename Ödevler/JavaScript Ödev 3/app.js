const menu = [
  {
    id: 1,
    title: "Tteokbokki",
    category: "Korea",
    price: 10.99,
    img: "./images/tteokbokki.jpg",
    desc: `Spicy rice cakes, serving with fish cake.`,
  },
  {
    id: 2,
    title: "Chicken Ramen",
    category: "Japan",
    price: 7.99,
    img: "./images/chickenRamen.jpg",
    desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg.`,
  },
  {
    id: 3,
    title: "Bibimbap",
    category: "Korea",
    price: 8.99,
    img: "./images/bibimbap.jpg",
    desc: `Boiling vegetables, serving with special hot sauce.`,
  },
  {
    id: 4,
    title: "Dan Dan Mian",
    category: "China",
    price: 5.99,
    img: "./images/danDanMian.jpg",
    desc: `Dan dan noodle, serving with green onion.`,
  },
  {
    id: 5,
    title: "Yangzhou Fried Rice",
    category: "China",
    price: 12.99,
    img: "./images/yangzhoufriedRice.jpg",
    desc: `Yangzhou style fried rice, serving with bean and pickle.`,
  },
  {
    id: 6,
    title: "Onigiri",
    category: "Japan",
    price: 9.99,
    img: "./images/onigiri.jpg",
    desc: `Rice Sandwich, serving with soy sauce.`,
  },
  {
    id: 7,
    title: "Jajangmyeon",
    category: "Korea",
    price: 15.99,
    img: "./images/jajangmyeon.jpg",
    desc: `Black bean sauce noodle, serving with green onion.`,
  },
  {
    id: 8,
    title: "Ma Yi Shang Shu",
    category: "China",
    price: 12.99,
    img: "./images/maYiShangShu.jpg",
    desc: `Hot pepper sauce noodle, serving with soy bean and onion.`,
  },
  {
    id: 9,
    title: "Doroyaki",
    category: "Japan",
    price: 3.99,
    img: "./images/doroyaki.jpg",
    desc: `Red bean paste dessert, serving with honey.`,
  }
];

const btnContainer = document.querySelector(`.btn-container`);
const section = document.querySelector(`.section-center`);

const categories = menu.reduce(
  (values, item) => {
    if (!values.includes(item.category)) {
      values.push(item.category);
    }
    return values;
  },
  ["All"]
);

function generateButtons(category) {
  let buttonDOM = document.createElement(`button`);
  buttonDOM.innerHTML = category;
  buttonDOM.setAttribute(`class`,`btn btn-outline-dark btn-item`);
  buttonDOM.setAttribute(`data-id`, category);
  btnContainer.appendChild(buttonDOM);
}

categories.forEach(generateButtons);
const filterBtns = document.querySelectorAll(".btn-item");

const filterMenu = () => { //filter menu
  filterBtns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const category = e.currentTarget.dataset.id;
      console.log(category);

      const menuCategory = menu.filter((menuItem) => {
        if (menuItem.category === category) {
          return menuItem;
        }
      });

      if (category === "All") {
        menuList(menu);
      } else {
        menuList(menuCategory);
      }
    });
  });
};

const menuList = (menuItems) => {
  let displayMenu = menuItems.map((item) => {
    return `<div class="menu-items col-lg-6 col-sm-12">
            <img src=${item.img} alt=${item.title} class="photo"/>
            <div class="menu-info">
              <div class="menu-title">
                <h4>${item.title}</h4>
                <h4 class="price">${item.price}</h4>
              </div>
              <div class="menu-text">${item.desc}</div>
            </div>
          </div>`;
  });
  displayMenu = displayMenu.join("");
  section.innerHTML = displayMenu;
};

menuList(menu);
filterMenu();