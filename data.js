function openRightMenu() {
  document.getElementById("rightMenu").style.display = "block";
}

function closeRightMenu() {
  document.getElementById("rightMenu").style.display = "none";
}
let products = {
  data: [
    {
      productName: "Harry Potter Book Set",
      category: "Bookset",
      price: "Rs.1550/-",
      image: "images/bs1.webp",
    },
    {
      productName: "Kaikeyi",
      category: "Fantasy",
      price: "Rs.300/-",
      image: "images/fantasy1.webp",
    },
    {
      productName: "Elon Musk ",
      category: "Biography",
      price: "Rs.150/-",
      image: "images/bio1.jpg",
    },
    {
      productName: "Rich Dad Poor Dad",
      category: "Non-Fiction",
      price: "Rs.200/-",
      image: "images/nf1.png",
    },
    {
      productName: "Steve Jobs",
      category: "Biography",
      price: "Rs.220/-",
      image: "images/bio2.jpg",
    },
    {
      productName: "The woven kingdom",
      category: "Fantasy",
      price: "Rs.200/-",
      image: "images/fantasy2.webp",
    },
    {
      productName: "Thorne of Glass Book Set",
      category: "Bookset",
      price: "Rs.2050/-",
      image: "images/bs2.webp",
    },
    {
      productName: "Ego is the enemy",
      category: "Non-Fiction",
      price: "Rs.150/-",
      image: "images/nf2.png",
    },
    {
      productName: "the silent patient",
      category: "Mystery",
      price: "Rs.250/-",
      image: "images/m1.jpeg",
    },
    {
      productName: "Shadow and bone Book Set",
      category: "Bookset",
      price: "Rs.650/-",
      image: "images/bs3.webp",
    },
    {
      productName: "The guest list",
      category: "Mystery",
      price: "Rs.250/-",
      image: "images/m2.jpeg",
    },
    {
      productName: "The invisible life of Addie Larue",
      category: "Fantasy",
      price: "Rs.290/-",
      image: "images/fantasy3.webp",
    },
    {
      productName: "I am malala",
      category: "Biography",
      price: "Rs.200/-",
      image: "images/bio3.jpg",
    },
    {
      productName: "think like a monk",
      category: "Non-Fiction",
      price: "Rs.350/-",
      image: "images/nf3.jpeg",
    },
    {
      productName: "Sharp objects",
      category: "Mystery",
      price: "Rs.150/-",
      image: "images/m3.jpg",
    },
    {
      productName: "Twilight Saga",
      category: "Bookset",
      price: "Rs.900/-",
      image: "images/bs4.webp",
    },
    {
      productName: "The subtle art of not giving f*ck",
      category: "Non-Fiction",
      price: "Rs.150/-",
      image: "images/nf4.jpeg",
    },
    {
      productName: "Behind closed doors",
      category: "Mystery",
      price: "Rs.400/-",
      image: "images/m4.jpg",
    },
    {
      productName: "legendborn",
      category: "Fantasy",
      price: "Rs.350/-",
      image: "images/fantasy4.webp",
    },
    {
      productName: "game of thrones",
      category: "Bookset",
      price: "Rs.1000/-",
      image: "images/bs5.webp",
    },
    {
      productName: "Michelle obama",
      category: "Biography",
      price: "Rs.270/-",
      image: "images/bio4.jpg",
    },
    {
      productName: "SIX OF CROWS",
      category: "Fantasy",
      price: "Rs.450/-",
      image: "images/fantasy7.webp",
    },
    {
      productName: "a good girls guide to murder",
      category: "Mystery",
      price: "Rs.400/-",
      image: "images/m6.jpeg",
    },
    {
      productName: "the secret",
      category: "Non-Fiction",
      price: "Rs.200/-",
      image: "images/nf6.jpeg",
    },
  ],
};

let cartItems = [];
let cartValue = 0;

for (let i of products.data) {
  let card = document.createElement("div");
  card.classList.add("card", i.category, "hide");
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");

  let image = document.createElement("img");
  image.setAttribute("src", i.image);
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);

  let container = document.createElement("div");
  container.classList.add("container");

  let name = document.createElement("h5");
  name.classList.add("product-name");
  name.innerText = i.productName.toUpperCase();
  container.appendChild(name);

  let price = document.createElement("h6");
  price.innerText = i.price;
  container.appendChild(price);

  let addToCartButton = document.createElement("button");
  addToCartButton.innerText = "Add to Cart";
  addToCartButton.classList.add("add-to-cart-btn");

  addToCartButton.addEventListener("click", function () {
    cartItems.push(i);
    cartValue += parseFloat(i.price.replace("Rs.", "").replace("/-", ""));
    document.getElementById("cartValue").innerText = cartValue;
    console.log(`Added ${i.productName} to cart!`);
    displayCartItems();
  });

  container.appendChild(addToCartButton);
  card.appendChild(container);
  document.getElementById("products").appendChild(card);
}

function displayCartItems() {
  let cartItemsList = document.getElementById("cartItemsList");
  cartItemsList.innerHTML = "";

  cartItems.forEach((item) => {
    let listItem = document.createElement("li");
    listItem.innerText = `${item.productName} - ${item.price}`;
    cartItemsList.appendChild(listItem);
  });
}

function removeItem(index) {
  if (index >= 0 && index < cartItems.length) {
    let removedItem = cartItems.splice(index, 1)[0];
    cartValue -= parseFloat(
      removedItem.price.replace("Rs.", "").replace("/-", "")
    );
    document.getElementById("cartValue").innerText = cartValue;
    console.log(`Removed ${removedItem.productName} from cart!`);
    displayCartItems();
  }
}

function displayCartItems() {
  let cartItemsList = document.getElementById("cartItemsList");
  cartItemsList.innerHTML = "";

  cartItems.forEach((item, index) => {
    let listItem = document.createElement("li");
    listItem.innerHTML = `${item.productName} - ${item.price} <button onclick="removeItem(${index})">Remove</button>`;
    cartItemsList.appendChild(listItem);
  });
}

function filterProduct(value) {
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  let elements = document.querySelectorAll(".card");
  elements.forEach((element) => {
    if (value == "all") {
      element.classList.remove("hide");
    } else {
      if (element.classList.contains(value)) {
        element.classList.remove("hide");
      } else {
        element.classList.add("hide");
      }
    }
  });
}

document.getElementById("search").addEventListener("click", () => {
  let searchInput = document.getElementById("search-input").value;
  let elements = document.querySelectorAll(".product-name");
  let cards = document.querySelectorAll(".card");

  elements.forEach((element, index) => {
    if (element.innerText.includes(searchInput.toUpperCase())) {
      cards[index].classList.remove("hide");
    } else {
      cards[index].classList.add("hide");
    }
  });
});

window.onload = () => {
  filterProduct("all");
};
