import styles from "./Banner.module.css";

function Banner() {
  return (
    <main className={`banner container ${styles.Banner}`}>
      <div className="bannerContent">
        <h1>YOUR <br></br>FEET DESERVE<br></br> THE BEST</h1>
        <p>YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.</p>
        <div className="Button">
          <button className="shopBtn">Shop Now</button>
          <button className="categoryBtn">Category</button>
        </div>
        <div className="shopping">
          <p>Also Available On</p>
          <div className="ecomLogo">
            <img src="/Images/flipkart.png" alt="flipkart-logo" />
            <img src="/Images/amazon.png" alt="amazon-logo" />
          </div>
        </div>
      </div>
      <div className="bannerImage">
        <img src="Images/shoe_image.png" alt="shoe_image" />
      </div>
    </main>
  );
}

export default Banner;
