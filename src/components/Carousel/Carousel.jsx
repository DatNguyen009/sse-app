import React, { useEffect } from 'react'
import '../Carousel/index.css'
import { useDispatch, useSelector } from 'react-redux';
import { fetchAPICarousel } from '../../redux/actions/carousel.action'
import Loading from './../Loading/Loading';

export default function Carousel() {
    
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAPICarousel());
     }, [])
 
    const listCarousel = useSelector(state => state.carousels.listCarousels);
    const LOADING = useSelector(state => state.carousels.isLoading)
     console.log(LOADING);
    if (LOADING === true) {
        return <Loading />
    }

    return (
        <div className="pt-3">
            <div id="myCarousel" className="carousel slide" data-ride="carousel">
                <ul className="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                </ul>


                <div className="carousel-inner">
                    {
                        listCarousel?.map((item, index) => (
                            <div className={index === 1 ? "carousel-item active": "carousel-item"}  key={'carousel' + index} >
                                <img src={item.carousel_link} alt="a" width="100%" height="auto"></img>
                            </div>
                        ))
                    }
                    
                </div>


                <a className="carousel-control-prev" href="#myCarousel" data-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </a>
                <a className="carousel-control-next" href="#myCarousel" data-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </a>
            </div>
        </div>
    )
}
