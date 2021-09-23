import React from 'react'
import './index.css'
import logo from '../../assets/logo/logo.png'


export default function Footer() {
    return (
        <div>
            <div className="container-fluid">
                <div className="row mb-5">
                    <div className="col-sm-3 ">
                        <div className="sseFooter__logo ">
                            <img src={logo} alt="logo_sse"/>
                        </div>
                    </div>
                    <div className="col-sm-5 ">
                        <div className="sseFooter__page justify-content-sm-center">
                            <div className="fb-page" data-href="https://www.facebook.com/SSE.GTS/" data-tabs="" data-width="" data-height="70" data-small-header="false" data-adapt-container-width="false" data-hide-cover="false" data-show-facepile="true">
                                <blockquote cite="https://www.facebook.com/SSE.GTS/" className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/SSE.GTS/">CLB Khởi Nghiệp SSE Trường ĐH Giao Thông Vận Tải TP.HCM</a></blockquote>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <div className="sseFooter__infor">
                            <p>
                                CLB Khởi Nghiệp - SSE CLUB

                            </p>
                            <p>
                                Trường Đại học giao thông vận tải thành phố Hồ Chí Minh
                            </p>
                            <p>
                                2 Võ Oanh, Phường 25, Bình Thạnh, Thành phố Hồ Chí Minh, Việt Nam
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
