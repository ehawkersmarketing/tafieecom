import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import PosterCardBackground from '../../../../assets/poster_card_background.svg';
import { useNavigate } from 'react-router-dom';

const ShopPageCarouselCard = ({ items }) => {
    const navigate = useNavigate();
    return (
        <div>
            <div >
                <OwlCarousel items={1}
                    className="owl-theme"
                    loop
                    dots={false}
                    autoplayTimeout={2000}
                    autoplayHoverPause={true}
                    autoplay={false} >{items?.map((item, index) => {
                        return (
                        <div className="shop-page-card">
                            {/* <div className="poster-card-background">
                                <img src={PosterCardBackground} height={500} />
                            </div> */}
                            <div className="shop-page-card-content row">
                               
                                <div className="view-more col-6">
                                    <div className="poster-text">
                                        <span className="fertilizer-text">{item.category.category}</span>
                                        <span className="description-text">{item.description}</span>
                                        <div className="signin" onClick={() => navigate(`/product/${item._id}`)}>View More</div>
                                    </div>
                                    
                                </div>
                                <div className="product-content col-6">
                                    <div className="text-fields d-flex">
                                        <div className=''>
                                            <h3 className='category-name'>{item.category.category}</h3>
                                            <h1 className='product-name'>{item.title}</h1>
                                            <div className="ratingAndReview">
                                                <ul class="rating">
                                                    {Array.apply(null, { length: 5 }).map(
                                                        (e, i) => (
                                                            <li>
                                                                <i class={i >= item?.rating ? `bi bi-star` : `bi bi-star-fill`} id="review-icon"></i>
                                                            </li>
                                                        )
                                                    )}
                                                </ul>
                                                <span className='review'>{item.reviews} Reviews</span>
                                            </div>
                                            <div className="price">
                                                Rs.{item.price}/-
                                            </div>
                                            <button className='cart-btn'>Add to Cart</button>
                                        </div>
                                        <div className="poster-card">
                                            <img src={item.image} alt="" />
                                        </div>
                                    </div>
                                    
                                </div>
                            </div>
                            
                        </div>
                        )
                    })}
                </OwlCarousel>
            </div>
        </div >
    );
}

export default ShopPageCarouselCard;