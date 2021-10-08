import React from 'react'
import { useHistory } from 'react-router';
import { SearchPost } from './../../utils/searchPost';
import './index.css'
import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import ReactHtmlParser from 'react-html-parser';

export default function Newfeeds(props) {
    const {title, listPosts} =  props;
    const history = useHistory();

    const handleDirectDetail = (slug) => {
        history.push(`/bai-viet/${slug}`, {listPosts});
    }

    const searchPost = (e) => {
        SearchPost(e.target.value);
    }

    return (
        <div>
            <div className="container-fluid">
                <h4 style={{margin: '2rem 0 2rem 15rem',color: '#0a9cf1',borderBottom: '2px solid  #0a9cf1',width: ' max-content'}}>{title}</h4>
                <input style={{margin: '0 auto', marginBottom: '2rem', width: '55rem'}} className="form-control" id="myInput" type="text" placeholder="Search.." onKeyUp={searchPost}></input>
                {
                    listPosts?.map((item, index) => (
                        <div className="EventMain__event" key={'listPosts' + index}>
                            <div className="EventMain__image">
                                <img src={item.post_avatar} alt={item.post_title} />
                            </div>
                            <div className="EventMain__content">
                                <div className="EventMain__content--titel">
                                    <p onClick={() => handleDirectDetail(item.post_slug)}>{item.post_title}</p>
                                </div>
                                <div className="EventMain__content--compact">
                                    <p className="text-truncate" style={{width: '21rem'}}>
                                        {ReactHtmlParser(item.post_content).slice(0,1)}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))
                }
                
            </div>
        </div>
    )
}
