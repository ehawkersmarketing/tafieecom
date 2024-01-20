import React from "react";
import ProductCard from "../../components/product_card/product_card.jsx";
import Header from "../header/header.jsx";
import Footer from "../footer/footer.jsx";
import punchline from "../../assets/punchline.png";
import { ReactSVG } from "react-svg";
import "./home_page.css";
import CategoryCarousel from "../../pages/shop_page/component/categoryCarousel/categoryCarousel.jsx";
const Dashboard = () => {
  return (
    <>
      <Header />
      <div className="home-page">
        <div className="topDiv row">
          <div className="headingDiv col-5">
            <div className="headingMainText">
              <h1>उच्च खेती,</h1>
              <h1>उन्नत विकास</h1>
              <img className="punchImg" src={punchline} />
            </div>
            <div className="iconDiv">
              <a href="/" className="socialsLink">
                <i className="bi bi-instagram"></i>
              </a>
              <a href="/" className="socialsLink">
                <i className="bi bi-facebook"></i>
              </a>
              <a href="/" className="socialsLink">
                <i className="bi bi-linkedin"></i>
              </a>
              <a href="/" className="socialsLink">
                <i className="bi bi-twitter"></i>
              </a>
            </div>
            <div className="shopBTN">
              <button>Shop Now</button>
            </div>
          </div>
          <div className="headingimage col-7"></div>
        </div>
        <div className="categoryDiv ">
          <div className="product-category">
            <div className="product-category-text">
              <div className="category-text">
                <div className="tafi-product-text1">
                  <span>Product</span>
                </div>
                <div className="tafi-product-text2">
                  <span>Categories</span>
                </div>
              </div>
            </div>
            <div className="category-region">
              <div className="category-carousel">
                <div className="left-arrow">
                  <i class="bi bi-arrow-left"></i>
                </div>
                <CategoryCarousel />
                <div className="right-arrow">
                  <i class="bi bi-arrow-right"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="featured-product">
          <div className="product-category-text">
            <div className="category-text">
              <div className="tafi-product-text1">
                <span>Featured</span>
              </div>
              <div className="tafi-product-text2">
                <span>Products</span>
              </div>
            </div>
          </div>
          <div className="category-region">
            <div className="category-carousel">
              <div className="left-arrow">
                <i class="bi bi-arrow-left"></i>
              </div>
              <CategoryCarousel />
              <div className="right-arrow">
                <i class="bi bi-arrow-right"></i>
              </div>
            </div>
          </div>
        </div>
        <div className="div3">
          <div className="div3Heading">
            <div>
              <h1>EMPOWER</h1>
            </div>
            <div className="div3SubHead">
              <h4>YOUR</h4>
              <h4 style={{ color: "#44A98B" }}>FARMING</h4>
              <h4>VENTURES</h4>
            </div>
          </div>
          <div className="servicesDiv">
            <div className="service100">
              <div className="singleServiceDiv">
                <div className="serviceCircle">
                  <div className="tick-icon">
                    <i className="bi bi-patch-check-fill serviceIcon"></i>
                  </div>
                </div>
                <h5>Exceptional Product Quality</h5>
              </div>
            </div>
            <div className="service100">
              <div className="singleServiceDiv">
                <div className="serviceCircle">
                  <i className="bi bi-key-fill serviceIcon"></i>
                </div>
                <h5>Ease of Access</h5>
              </div>
            </div>
            <div className="service100">
              <div className="singleServiceDiv">
                <div className="serviceCircle">
                  <i className="bi bi-headset serviceIcon"></i>
                </div>
                <h5>Expert Advice & Support</h5>
              </div>
            </div>
            <div className="service100">
              <div className="singleServiceDiv">
                <div className="serviceCircle">
                  <i className="bi bi-wallet2 serviceIcon"></i>
                </div>
                <h5>Excellent Cost Efficiency</h5>
              </div>
            </div>
          </div>
        </div>
        <div className="div4 row ">
          <div className="soilDiv col-5">
            <div className="soilTestInfo">
              <div className="soilHeading">
                <h1>FREE</h1>
                <h5 className="soilSubHead1">SOIL TESTING</h5>
                <h5 className="soilSubHead2">
                  (Know Your Soil, Grow Better Crops!)
                </h5>
              </div>
              <div className="soliDescription">
                <p>
                  Discover the decret to successfull farming, sign up for free
                  soil testing.
                </p>
              </div>
              <div className="registerSoilBTN">
                <button>
                  Register Now<i class="bi bi-chevron-right rigthIcon"></i>
                </button>
              </div>
            </div>
          </div>
          <div className="franDiv col-7">
            <div className="franchiseInfo">
              <div className="franchHeading">
                <h1>70+</h1>
                <h3>FRANCHISES OVER INDIA</h3>
                <div className="franchSubHead">
                  <h6>Ready to take your farming journey to the </h6>
                  <h6 className="franchSubHead3">Next Level?</h6>
                </div>
              </div>
            </div>
            <div className="franInfoDiv2">
              <p>
                <strong>Join the Krishak Vatika</strong> family today and
                harvest the success tomorrow!
              </p>
              <div className="registerSoilBTN">
                <button>Know More</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Dashboard;
