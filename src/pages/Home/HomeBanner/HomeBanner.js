import React from 'react';
import img1 from '../../../assets/Banner/laptop-banner.jpg';
import img2 from '../../../assets/Banner/iphone.jpg';
import img3 from '../../../assets/Banner/car.jpg';
import HomeCarousel from './HomeCarousel';

const bannerItem = [
    {
        image: img1,
        title: "Brand new Laptop For You",
        info: "The best laptop is out there, and our laptop reviews dig deep into what’s new from the world’s biggest seller company to help you find it. From each new iteration of the Apple MacBook and Microsoft Surface to what’s coming up from likes of Dell, HP, Lenovo, and more.",
        id: 1,
        prev: 3,
        next: 2
    },
    {
        image: img2,
        title: "Some Aesthetic IPhone makes your life more easiar",
        info: "The iPhone is an ideal phone to use if you own other Apple products, such as Mac computers, iPads and iPods. With Apple's free iCloud service, the iPhone shares data, music, photos and contacts with all your other Apple products. It's an added convenience that takes the hassle out of transferring data between products.",
        id: 2,
        prev: 1,
        next: 3
    },
    {
        image: img3,
        title: "Keep Your Jorney A Little Bit Interesting",
        info: "Expand the map by pedaling farther than you can. So that you may explore the roads, trails, and gravel outside of your usual routes, Thule is designed to rack 'em up.",
        id: 3,
        prev: 2,
        next: 1
    }
]

const HomeBanner = () => {
    return (
        <div className="carousel">
            {
                bannerItem.map(slide => <HomeCarousel
                    key={slide.id}
                    slide={slide}
                ></HomeCarousel>)
            }
        </div>
    );
};

export default HomeBanner;