import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="amazon prime ad"
        />

        <div className="home__row">
          <Product 
           id="123321341"
           title="The lean startup: How Constant Innovation Creates Succesful Businesses - paperback" price={29.99}
           image="https://images-na.ssl-images-amazon.com/images/I/81-QB7nDh4L.jpg" rating={5}
           />
          
          <Product 
            id="49538094"
            title="Kenwood kMix Stand Mixer for Baking, Stylish Kitchen Mixer with K-beater, Dough hook and whisk, 5 liter Glass Bowl"
            price={239.00}
            rating={4}
            image="https://www.kenwoodworld.com/WebImage/Global/Product%20images/Kmix%20products/KMX754RD/KMX754RD_Picasso-KM-Glass-Bowl-BMK_V2_800x600.png"
          />
        </div>

        <div className="home__row">
            <Product
             id="490380"
             title="Samsung Galaxy Watch 5 44mm Bluetooth Smartwatch"
             price={309.99}
             rating={4}
             image="https://m.media-amazon.com/images/I/61s1Na3W61L._AC_SX679_.jpg"
            />

            <Product
             id="23445930"
             title="Amazon Echo (3rd generation | Smart speaker with Alexa, Charcoal Fabric"
             price="98.99"
             rating={5}
             image="https://i.ebayimg.com/images/g/KJMAAOSwhwBZ4yQq/s-l640.jpg" 
            />

            <Product
             id="3254354345"
             title="New Apple Ipad Pro (12.9-inch, Wi-Fi, 123GB) - Silver (4th Generation)"
             price={598.99}
             rating={4}
             image="https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/refurb-ipad-pro-12-wifi-silver-2020?wid=2000&hei=2000&fmt=jpeg&qlt=90&.v=1626721066000"
            />
        </div>

        <div className="home__row">
            <Product
            id="490380"
            title="Samsung LC49RG90SSUXEN 49' Curved LED Gaming Monitor"
            price={199.99}
            rating={3}
            image="https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6360/6360752_sd.jpg"
             />
            </div>
      </div>
    </div>
  );
}

export default Home;
