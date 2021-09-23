import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Newfeeds from '../../components/NewFeeds/Newfeeds'
import { fetchAPIPost } from '../../redux/actions/post.action';
import Loading from './../../components/Loading/Loading';

export default function Event() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAPIPost("su-kien"));
    }, [])

    const listPosts = useSelector(state => state.posts.listPosts.data)
    const LOADING = useSelector(state => state.posts.isLoading)

    if (LOADING === true) {
        return <Loading />
    }

    return (
        <div>
            <Newfeeds title="Sự kiện" listPosts={listPosts}/>
        </div>
    )
}
