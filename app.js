/*   
    Student name: Omar Saeed Ali Ahmed Negm
    Section: 4
    Student no.: 83 
*/
const products = [
    {
        id: 1,
        name: "CRRJU Stainless Steel Watch",
        price: 220,
        image: "images/products/71G3W5z0F2L._AC_SX679_.jpg",
        info:"UNIQUE ELEGANT DESIGN: Silver Pointer;1/10 Second,Second and Minute Chronographs;Classic Calendar"
    },
    {
        id: 2,
        name: "GOLDEN HOUR Mens Watch",
        price: 140,
        image: "images/products/71Meq7sFVqL._AC_SY535_.jpg",
        info:"Material: The strap is made of mesh stainless steel band, comfortable and soft and breathable. Mineral glasses, 304 steel case, stainless steel mesh band, Suit for all kinds of occasions."

    },
    {
        id: 3,
        name: "Bulova Men's Icon High Precision Quartz Chronograph Watch",
        price: 170,
        image: "images/products/81dI08mZslL._AC_SY741_.jpg",
        info:"Featuring Precisionist, the worlds most advanced chronograph with a continuously sweeping second hand. Celebrated for its blend of technology and design innovation, features statement-making case shapes and the incorporation of innovative materials."
    },
    {
        id: 4,
        name: "Aeac SmartWatch",
        price: 100,
        image: "images/products/61VFHFIf77L._AC_SX679_.jpg",
        info: "This smart watch is equipped with speaker and bluetooth connectivity, you can directly make or receive calls with your family and friends via the smartwatch, also it supports multiple smart reminders, including incoming calls, text, SNS messages (Facebook, WhatsApp, Twitter, etc), daily reminder, etc, extremely convenient for your life and you will never miss any important information."
    },
    {
        id: 5,
        name: "Timex Metropolitan S Smartwatch",
        price: 200,
        image: "images/products/7175YjUMF+L._AC_SX679_.jpg",
        info: "24/7 Activity tracking (steps, distance, calories & sleep); On-wrist optical heart rate with HR zone training; onboard GPS; Multiple workout modes"
    },
    {
        id: 6,
        name: "Amazfit Bip 5 SmartWatch",
        price: 270,
        image: "images/products/61ueYKWLNqL._AC_SL1500_.jpg",
        info:"TRACK STEPS, DISTANCE, CALORIES: Automatically detects and records all your activities and fitness data, from walking, running, treadmill, rowing and more with 120 sports modes."
    },
];

// products.forEach()
const searchBox = document.querySelector(".navRight");
const searchInput = document.querySelector(".search-input");
const searchButton = document.querySelector("#search-icon");
const srch_bar = document.getElementsByClassName('search-input')
const srch_btn = document.getElementById('search-icon')
/**const searchBox = document.querySelector("#search-box");
const searchInput = document.querySelector(".search-input");
const searchButton = document.querySelector("#search-icon");
 */

searchButton.addEventListener("click", () => {
    if (searchInput.value === "") return;
    searchProducts();
});

searchInput.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
        if (searchInput.value === "") return;   //do nothing
        searchProducts();
    }
});

searchProducts = () => {
    searchBox.classList.add("active-search");
    const searchValue = searchInput.value.toLowerCase();
    const filteredProducts = products.filter((product) => {
        return product.name.toLowerCase().includes(searchValue);
    });
    searchInput.value = "";

    const searchResultsDiv = document.createElement("div");
    searchResultsDiv.classList.add("search-results");
    searchBox.appendChild(searchResultsDiv);

    if (filteredProducts.length === 0) {
        searchResultsDiv.innerHTML = "<p>No products found</p>";
        return;
    }

    filteredProducts.forEach((product) => {
        const productDiv = document.createElement("div");
        productDiv.classList.add("search-result");
        productDiv.innerHTML = `
        <img src="${product.image}" alt="${product.name}" />
        <h3>${product.name}</h3>
        <p>$${product.price}</p>
        `;
        searchResultsDiv.appendChild(productDiv);
    });
};

//For slider functionality:
const wrapper = document.querySelector(".sliderWrapper");

const menuItems = document.querySelectorAll(".menuItem");

menuItems.forEach((menuItem, index) => {
    menuItem.addEventListener("click", () => {
        wrapper.style.transform = `translateX(-${index * 100}vw)`;
        const selectedItem = document.querySelector(".selectedItem");
        selectedItem.classList.remove("selectedItem");
        menuItem.classList.add("selectedItem");
    });
});

// document.addEventListener("click", (e) => {//That if you click on any place other than search box, clear results shown
//     const inInsideSearchBox = searchBox.contains(e.target);
//     if (!inInsideSearchBox) {
//         clearSearchResults();
//     }
// });

const ham_btn = document.getElementById('hamburger-icon')
const nav = document.getElementById('menu')
const c = document.getElementById('cnt')

const contacts = ['Phone: 12345678','Email: example@gmail.com']
function show_contact(){
    alert(`${contacts[0]}\n${contacts[1]}`)
}

// const nav = document.getElementById('menu')

function navToggle() {
    nav.classList.toggle('hidden')
  document.body.classList.toggle('no-scroll');
}
function srchToggle(){
    srch_bar.style.disp = "flex";
}
ham_btn.addEventListener('click', navToggle)
srch_btn.addEventListener('click', srchToggle)
c.addEventListener('click',show_contact)
