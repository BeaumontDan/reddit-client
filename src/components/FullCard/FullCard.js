// Import React Tools
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import { MarkdownText } from '../Comment/MarkdownText';

// Import StyleSheets
import '../Card/Card.css';
import './FullCard.css';
import { FaChevronCircleUp, FaChevronCircleDown, FaComments } from "react-icons/fa";

export const FullCard = ({ post }) => {
    let content;

    const [arrowDirection, setArrowDirection] = useState(0);

    if (post.post_hint === 'image') {
        content = <div className='imgPost full-card-image'>
            <img src={post.url} alt='Preview' />
        </div>
    } else {
        content = post.thumbnail && post.thumbnail !== 'default' ?
            <a href={post.url} target='_blank' rel='noreferrer'><img src={post.thumbnail} alt='Preview' /></a> :
            <a className='post-link' href={post.url} target='_blank' rel='noreferrer'>{post.url}</a>
    }


    const onClickarrow = (direction) => {
        setArrowDirection(direction);
    }

    const arrowUp = () => {
        return (
            <div>
                {arrowDirection === 1 ? (<FaChevronCircleUp style={{ color: 'green' }} />) :
                    (<FaChevronCircleUp style={{ color: 'black' }} />)}
            </div>
        )
    }

    const arrowDown = () => {
        return (
            <div>
                {arrowDirection === -1 ? (<FaChevronCircleDown style={{ color: 'red' }} />) :
                    (<FaChevronCircleDown style={{ color: 'black' }} />)}
            </div>
        )
    }


    let thumbnailClass = post.post_hint !== 'image' && post.thumbnail && post.thumbnail !== 'default' && !post.is_self ?
        'thumbnail-post' :
        '';

    return (
        <div className='fullCard'>

            <div className='cardHeader'>
                <span className='cardAuthor'>{post.author}</span>
                <span className='postTime'>{moment.unix(post.created_utc).fromNow()}</span>
            </div>

            <div className={`postContent ${thumbnailClass}`}>
                <h2 className='postTitle'>{post.title}</h2>
                {post.is_self ? <MarkdownText body={post.selftext} /> : content}
            </div>

            <div className='cardFooter'>

                <div className='cardLike'>
                    <button
                        className='iconAction'
                        onClick={() => onClickarrow(1)}
                    >
                        {arrowUp()}
                    </button>
                    <span className='score'>{post.score}</span>
                    <button
                        className='iconAction'
                        onClick={() => onClickarrow(-1)}
                    >
                        {arrowDown()}
                    </button>
                </div>

                <Link className='commentsLink' to={`/${post.subreddit}/${post.id}#comments`}>
                    <span><FaComments className='commentIcon' style={{ color: 'black' }} /> {post.num_comments}</span>
                </Link>

            </div>
        </div>
    )
};