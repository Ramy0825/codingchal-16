// Task 2- Set Up the Project Structure
function fetchProductsThen() {
    fetch("https://www.course-api.com/javascript-store-products")
      .then(response => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then(data => {
        console.log("Fetched Products:", data);
        data.forEach(product => {
          console.log(product.name); 
        });
      })
      .catch(error => {
        console.log("An error occurred:", error);
      });
  };
  
  fetchProductsThen();

  // Task 3- Fetch Products 
  async function fetchProductsAsync() {
    try {
      const response = await fetch("https://www.course-api.com/javascript-store-products");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      displayProducts(data); // call display function to show products
    } catch (error) {
      handleError(error); // pass errors to the error gandle
    }
  };
  
  fetchProductsAsync(); // Call the function to test

  // Task 4- Display the products 
  function displayProducts(products) {
    const container = document.getElementById("product-container");
  
    products.slice(0, 5).forEach(product => {
      const productDiv = document.createElement("div");
      productDiv.classList.add("product");
  
      const productName = document.createElement("h2");
      productName.textContent = product.name;
  
      const productPrice = document.createElement("p");
      productPrice.textContent = `$${product.price}`;
  
      const productImage = document.createElement("img");
      productImage.src = product.imageUrl;
      productImage.alt = product.name;
  
      
      productDiv.appendChild(productName);
      productDiv.appendChild(productPrice);
      productDiv.appendChild(productImage);
  
      container.appendChild(productDiv);
    });
  };;

  // Task 5- Reusable Error Handle 
function handleError(error) {
    console.log("An error occurred:", error.message);
  };


  // Task 6: Call Your Fetch Functions
fetchProductsThen(); 
fetchProductsAsync(); ;
  