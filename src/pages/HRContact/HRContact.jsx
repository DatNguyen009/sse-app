import React from "react";
import Slider from "react-slick";
import "./index.css";
import "../../../node_modules/slick-carousel/slick/slick.css";
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import nhi from "../../assets/img/member/nhi.JPG";
import hoa from "../../assets/img/member/hoa.JPG";
import huyen from "../../assets/img/member/huyen.JPG";
import minhanh from "../../assets/img/member/minhanh.JPG";
import thaonguyen from "../../assets/img/member/thaonguyen.JPG";
import thaovy from "../../assets/img/member/thaovy.JPG";
import tram from "../../assets/img/member/tram.JPG";
import tuan from "../../assets/img/member/tuan.JPG";
import vy from "../../assets/img/member/vy.JPG";


export default function HRContact() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
        {
          breakpoint: 1000,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 424,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 375,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
          }
        }
      ]
  };

  
  return (
    <div>
      <div className="container-fluid">
        <div className="sseHR--contact">
          <div className="sseContact"></div>
          <div className="sseHR">
            <div className="crown">
              <i className="fa fa-crown"></i>
            </div>

            <div
              className="sseHR__Boss"
              style={{display: "flex",justifyContent: "center"}}
            >
              <div className="item" style={{maxWidth: "9rem"}}>
                <img
                  style={{width: "100%"}}
                  src={thaovy}
                  alt=""
                />
                <p className="text-center">Thảo Vy - Chủ nhiệm CLB</p>
              </div>
            </div>
            <div className="queen">
              <i className="fas fa-chess-queen"></i>
              <i className="fas fa-chess-queen"></i>
            </div>
            <div
              className="sseHR__ViceBoss"
              style={{display: "flex",justifyContent: "center"}}
            >
              <div className="item" style={{maxWidth: "9rem"}}>
                <img
                  style={{width: "100%"}}
                  src={minhanh}
                  alt=""
                />
                <p className="text-center">Minh Anh - P.Chủ nhiệm</p>
              </div>
              <div className="item" style={{maxWidth: "9rem"}}>
                <img style={{width: "100%"}} src="./Avatar-6.png" alt="" />
                <p className="text-center">Hải Yến - P.Chủ nhiệm</p>
              </div>
            </div>
            <div className="member">
              <i className="fas fa-user"></i>
              <i className="fas fa-user"></i>
              <i className="fas fa-user"></i>
              <i className="fas fa-user"></i>
              <i className="fas fa-user"></i>
            </div>
            <div className="sseHR__leader">
                <Slider {...settings}>
                  
                    <div className="item" style={{maxWidth: "9rem"}}>
                        <img src={huyen} alt="" style={{width: "67%"}}/>
                        <p style={{width: "100%",  textAlign: 'center'}}>Huỳnh Huyền - Thành viên</p>
                    </div>
                    <div className="item" style={{maxWidth: "9rem"}}>
                        <img src={tuan} alt="" style={{width: "67%"}}/>
                        <p style={{width: "100%",  textAlign: 'center'}}>Anh Tuấn - Thành viên</p>
                    </div>
                    <div className="item" style={{maxWidth: "9rem"}}>
                        <img src={vy} alt="" style={{width: "67%"}}/>
                        <p style={{width: "100%",  textAlign: 'center'}}>Thùy Vy - Cựu trưởng ban HR</p>
                    </div>
                    <div className="item" style={{maxWidth: "9rem"}}>
                        <img src={hoa} alt="" style={{width: "67%"}}/>
                        <p style={{width: "100%",  textAlign: 'center'}}>Đình Hòa - Trưởng ban R&D</p>
                    </div>
                    <div className="item" style={{maxWidth: "9rem"}}>
                        <img src={tram} alt="" style={{width: "67%"}}/>
                        <p style={{width: "100%",  textAlign: 'center'}}>Ngọc Trâm - Cựu chủ nhiệm</p>
                    </div>
                    <div className="item" style={{maxWidth: "9rem"}}>
                        <img src='' alt="" style={{width: "67%"}}/>
                        <p style={{width: "100%",  textAlign: 'center'}}>Thảo Vy</p>
                    </div>
                    <div className="item" style={{maxWidth: "9rem"}}>
                        <img src="" alt="" style={{width: "67%"}}/>
                        <p style={{width: "100%",  textAlign: 'center'}}>Hạnh</p>
                    </div>
                    <div className="item" style={{maxWidth: "9rem"}}>
                        <img src={nhi} alt="" style={{width: "67%"}}/>
                        <p style={{width: "100%",  textAlign: 'center'}}>Phương Nhi - Trưởng ban HR</p>
                    </div>
                    <div className="item" style={{maxWidth: "9rem"}}>
                        <img src={thaonguyen} alt="" style={{width: "67%"}}/>
                        <p style={{width: "100%", textAlign: 'center'}}>Thảo Nguyên - Trưởng ban IT</p>
                    </div>
                   
                </Slider>
            </div>
          </div>

          <div className="sseHR__mobile">
            <div className="crown">
              <i className="fa fa-crown"></i>
            </div>

            <div
              className="sseHR__Boss"
              style={{display: "flex",justifyContent: "center"}}
            >
              <div className="item" style={{maxWidth: "9rem"}}>
                <img
                  style={{width: "100%"}}
                  src="./img_member/IMG_9151.JPG"
                  alt=""
                />
                <p className="text-center">Thảo Vy - Chủ nhiệm CLB</p>
              </div>
            </div>
            <div className="queen">
              <i className="fas fa-chess-queen"></i>
              <i className="fas fa-chess-queen"></i>
            </div>
            <div
              className="sseHR__ViceBoss"
              style={{display: "flex",justifyContent: "center"}}
            >
              <div className="item" style={{maxWidth: "9rem"}}>
                <img
                  style={{width: "100%"}}
                  src="./img_member/IMG_9188.JPG"
                  alt=""
                />
                <p className="text-center">Minh Anh - P.Chủ nhiệm</p>
              </div>
              <div className="item" style={{maxWidth: "9rem"}}>
                <img style={{width: "100%"}} src="./Avatar-6.png" alt="" />
                <p className="text-center">Hải Yến - P.Chủ nhiệm</p>
              </div>
            </div>

            <div className="sseHR__leader">
            <Slider {...settings}>
                  
                  <div className="item" style={{maxWidth: "9rem"}}>
                      <img src={huyen} alt="" style={{width: "67%"}}/>
                      <p style={{width: "100%",  textAlign: 'center'}}>Huỳnh Huyền - Thành viên</p>
                  </div>
                  <div className="item" style={{maxWidth: "9rem"}}>
                      <img src={tuan} alt="" style={{width: "67%"}}/>
                      <p style={{width: "100%",  textAlign: 'center'}}>Anh Tuấn - Thành viên</p>
                  </div>
                  <div className="item" style={{maxWidth: "9rem"}}>
                      <img src={vy} alt="" style={{width: "67%"}}/>
                      <p style={{width: "100%",  textAlign: 'center'}}>Thùy Vy - Cựu trưởng ban HR</p>
                  </div>
                  <div className="item" style={{maxWidth: "9rem"}}>
                      <img src={hoa} alt="" style={{width: "67%"}}/>
                      <p style={{width: "100%",  textAlign: 'center'}}>Đình Hòa - Trưởng ban R&D</p>
                  </div>
                  <div className="item" style={{maxWidth: "9rem"}}>
                      <img src={tram} alt="" style={{width: "67%"}}/>
                      <p style={{width: "100%",  textAlign: 'center'}}>Ngọc Trâm - Cựu chủ nhiệm</p>
                  </div>
                  <div className="item" style={{maxWidth: "9rem"}}>
                      <img src='' alt="" style={{width: "67%"}}/>
                      <p style={{width: "100%",  textAlign: 'center'}}>Thảo Vy</p>
                  </div>
                  <div className="item" style={{maxWidth: "9rem"}}>
                      <img src="" alt="" style={{width: "67%"}}/>
                      <p style={{width: "100%",  textAlign: 'center'}}>Hạnh</p>
                  </div>
                  <div className="item" style={{maxWidth: "9rem"}}>
                      <img src={nhi} alt="" style={{width: "67%"}}/>
                      <p style={{width: "100%",  textAlign: 'center'}}>Phương Nhi - Trưởng ban HR</p>
                  </div>
                  <div className="item" style={{maxWidth: "9rem"}}>
                      <img src={thaonguyen} alt="" style={{width: "67%"}}/>
                      <p style={{width: "100%", textAlign: 'center'}}>Thảo Nguyên - Trưởng ban IT</p>
                  </div>
                 
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
