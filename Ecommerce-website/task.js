const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "CLOGS",
    price: 119,
    colors: [
      {
        code: "blue",
        img: "./img/CROCS11.png",
      },
      {
        code: "BW",
        img: "./img/CROCS11BW.png",
      },
    ],
  },
  {
    id: 2,
    title: "LITERIDE",
    price: 149,
    colors: [
      {
        code: "lightblue",
        img: "./img/crocslite.png",
      },
      {
        code: "blue",
        img: "./img/crocslite.png",
      },
    ],
  },
  {
    id: 3,
    title: "SOCKS",
    price: 79,
    colors: [
      {
        code: "black",
        img: "./img/socks1.png",
      },
      {
        code: "grey",
        img: "./img/socks22.png",
      },
    ],
  },
  {
    id: 4,
    title: "PLATFORMS",
    price: 129,
    colors: [
      {
        code: "lightblue",
        img: "./img/platform1.png",
      },
      {
        code: "off white",
        img: "./img/platform22.png",
      },
    ],
  },
  {
    id: 5,
    title: "Classic",
    price: 199,
    colors: [
      {
        code: "violet",
        img: "./img/crocsclass.png",
      },
      {
        code: "black",
        img: "./img/crocsclass2.png",
      },
    ],
  },
];

let choosenProduct = products[0];

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "$" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});