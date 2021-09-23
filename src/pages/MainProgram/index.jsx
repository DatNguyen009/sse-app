import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux'
import Newfeeds from '../../components/NewFeeds/Newfeeds'
import { fetchAPIPost } from '../../redux/actions/post.action';
import Loading from './../../components/Loading/Loading';

export default function MainProgram() {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchAPIPost("chuong-trinh-trong-diem"));
    }, [])

    const listPosts = useSelector(state => state.posts.listPosts.data)
    const LOADING = useSelector(state => state.posts.isLoading)

    if (LOADING === true) {
        return <Loading />
    }

    return (
        <div>
            <Newfeeds title="Chương trình trọng điểm" listPosts={listPosts} />
        </div>
    )
}
