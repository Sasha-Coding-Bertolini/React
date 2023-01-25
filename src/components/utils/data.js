const coffee = {
  name: "coffee",
  imgUrl: "https://media.wincacademy.nl/coffee.jpeg",
  alt: "coffee mug",
  id: self.crypto.randomUUID(),
};

const tea = {
  name: "tea",
  imgUrl: "https://media.wincacademy.nl/tea.jpeg",
  alt: "tea mug",
  id: self.crypto.randomUUID(),
};

const cocaCola = {
  name: "Coca Cola",
  imgUrl:
    "https://static.ah.nl/dam/product/AHI_43545239393030353033?revLabel=3&rendition=800x800_JPG_Q90&fileType=binary",
  alt: "Coca Cola",
  id: self.crypto.randomUUID(),
};

const fanta = {
  name: "Fanta",
  imgUrl:
    "https://beheer.kippie.nl/thumbnail/18/8a/52/1633952713/Fanta(fles)_800x800.jpg",
  alt: "Fanta",
  id: self.crypto.randomUUID(),
};

const chaiLatte = {
  name: "Chai Latte",
  imgUrl:
    "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2022/02/Chai-Latte-main-1.jpg",
  alt: "Chai Latte",
  id: self.crypto.randomUUID(),
};

const chocolate = {
  name: "Hot Chocolate",
  imgUrl:
    "https://feelgoodfoodie.net/wp-content/uploads/2021/11/how-to-make-hot-chocolate-7.jpg",
  alt: "Hot Chocolate",
  id: self.crypto.randomUUID(),
};

export const availableDrinks = [
  coffee,
  tea,
  cocaCola,
  fanta,
  chaiLatte,
  chocolate,
];
