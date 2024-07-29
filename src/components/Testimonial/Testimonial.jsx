/* eslint-disable react/jsx-key */

import Slider from "react-slick";
import Img2 from "../../assets/biryani2.png";
import Img3 from "../../assets/hot.png";




const testimonialData = [
  {
    id: 1,
    img: "Img2 ",
    name: "Badam Halwa",
    text: "Badam Halwa or Badam ka halwa is a rich classic Indian Dessert recipe made with almonds flour, milk and sugar with generous amount of ghee in Instant pot Pressure cooker",
   
   },
  {
    id: 2,
    img: "Img2 ",
    name: "Shrikhand",
    text: "Shrikhand is a rich, creamy, delicious, and easy-to-make Indian dessert made from thick yogurt, sugar, and flavored with saffron and cardamom.",
    
  },
  {
    id: 3,
    img: "Img",
    name: "Rasmalai ",
    text: "Quick and easy way to prepare the popular Indian dessert Rasmalai using Haldiram's Rasgulla, without the hassle of preparing rasgullas from scratch. Enjoy a perfect and creamy sweet every time with this foolproof recipe.",
    
  },
];

const Testimonial = () => {
  var settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    cssEase: "linear",
    pauseOnHover: true,
    pauseOnFocus: true,
  };
  return (
    <>
      <div data-aos="fade-up" data-aos-duration="300" className="py-10">
        <div className="container">
          <div className="text-center mb-20 max-w-[400px] mx-auto">
            <p className="text-sm bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
              What our customers say
            </p>
            <h1 className="text-3xl font-bold">Testimonial</h1>
            <p className="text-xs text-gray-400">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Perspiciatis delectus architecto error nesciunt,
            </p>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="300"
            className="grid grid-cols-1 max-w-[600px] mx-auto gap-6"
          >
            <Slider {...settings}>
              {testimonialData.map((data) => {
                return (
                
                 
                  <div className="my-6">
                    <div
                      key={data.id}
                      className="flex flex-col justify-center items-center gap-4 text-center   shadow-lg p-4 mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative"
                    >
                      <img
                        className="rounded-full block mx-auto"
                        src={data.img}
                        alt=""/>
                      <p className="text-gray-500 text-sm">{data.text}</p>
                      <h1 className="text-xl font-bold">{data.name}</h1>
                      <p className="text-black/20 text-9xl font-serif absolute top-0 right-0">
                      
                      </p>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;

