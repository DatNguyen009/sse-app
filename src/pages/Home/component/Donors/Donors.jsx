import React from 'react'
import logo_Vintech from '../../../../assets/img/logo_donors/download.png'
import logo_BSSC from '../../../../assets/img/logo_donors/BSSC-logo.png'
import logo_SVF from '../../../../assets/img/logo_donors/svf-logo-outline-01.png'
import logo_Coffee from '../../../../assets/img/logo_donors/logo-tren-ly-cafe-trung-nguyen-5-1744.jpg'
import './index.css'
export default function Donors() {
    return (
        <div>
            <div className="container-fluid">
                <h3 className="text-center" style={{paddingTop: 40,color: "gray"}}>Nhà tài trợ</h3>
                <div className="row">
                    <div className="col-sm-3">
                        <div className="logo_Vintech">
                            <img style={{width: "100%"}} src={logo_Vintech} alt="logo vintech" />
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="logo_BSSC">
                            <img style={{width: "100%"}} src={logo_BSSC} alt="logo bssc" />
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="logo_SVF">
                            <img style={{width: "100%"}} src={logo_SVF} alt="logo svf" />
                        </div>
                    </div>
                    <div className="col-sm-3">
                        <div className="logo_Coffee">
                            <img style={{width: "100%"}} src={logo_Coffee} alt="logo coffe trung nguyen" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
