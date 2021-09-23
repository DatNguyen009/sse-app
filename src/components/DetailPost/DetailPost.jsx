import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router'
import { fetchAPIDetailPost } from '../../redux/actions/detailPost.action';
import ReactHtmlParser from 'react-html-parser';
import './index.css'
import Loading from './../Loading/Loading';

export default function DetailPost() {
    let {slug} = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAPIDetailPost(slug));
    }, [])

    const listPosts = useSelector(state => state.detailPost.detailPosts.data)
    const LOADING = useSelector(state => state.detailPost.isLoading)

    if (LOADING === true) {
        return <Loading />
    }
    return (
        <div>
            <div className="container-fluid">
                {
                    listPosts?.map((item, index) => (
                        <div key={'detailPost' + index}>
                            <h4 style={{margin: '2rem 0 2rem 15rem',color: '#0a9cf1',borderBottom: '2px solid  #0a9cf1',width: 'max-content'}}>
                                {item.post_title}
                            </h4>
                            <div className="EventMain__startup">
                                <div className="EventMain__event--content">
                                    {ReactHtmlParser(item.post_content)}
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )

}
