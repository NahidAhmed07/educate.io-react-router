
const getDB = () => {
  const exists = localStorage.getItem('courseCart');
  let cart = {};
  if (exists) {
    cart = JSON.parse(exists);
  } else {
    cart = {};
  }
  return cart;
}

const addToDataBase = id => {
  
  let cart = getDB();

  if (cart[id]) {
    cart[id] += 1;
  } else {
    cart[id] = 1 ;
  }
  setToDB(cart);
}
const setToDB = cart => {
  localStorage.setItem("courseCart", JSON.stringify(cart));
}

const removeFromDB = id => {
  let cart = getDB();
  if (cart[id]) {
    delete cart[id];
  }
  setToDB(cart);
}

const clearDB = () => {
  localStorage.removeItem('courseCart')
}

export { getDB, removeFromDB, clearDB, addToDataBase };