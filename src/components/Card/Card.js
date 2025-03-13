// Import React Tools
import React, { useState } from 'react';
import moment from 'moment';
import { HashLink as Link } from 'react-router-hash-link';

// Import StyleSheets
import './Card.css';
import { FaChevronCircleUp, FaChevronCircleDown, FaComments } from "react-icons/fa";

export const Card = ({ post, showSubreddit }) => {
    let content;

    const [arrowDirection, setArrowDirection] = useState(0);

    if (post.post_hint === 'image') {
        content = <div className='imgPost'>
            <img src={post.url} alt='Preview' />
        </div>
    } else {
        content = post.thumbnail && post.thumbnail !== 'default' ?
            <a href={post.url} target='_blank' rel='noreferrer' ><img src={post.thumbnail} alt='media preview' /></a> :
            <a className='post-link' href={post.url} target='_blank' rel='noreferrer' >{post.url}</a>
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

    let thumbnailClass = post.post_hint !== 'image' && post.thumbnail && post.thumbnail !== 'default' ?
        'thumbnail-post' :
        '';

    return (
        <div className='redditCard'>
            {showSubreddit && <Link className='subredditLink' to={`/${post.subreddit}`}>{post.subreddit}</Link>}

            <div className='cardHeader'>
                <span className='cardAuthor'>{post.author}</span>
                <span className='postTime'>{moment.unix(post.created_utc).fromNow()}</span>
            </div>

            <div className={thumbnailClass}>
                <Link data-testid={post.id} to={`/${post.subreddit}/${post.id}`}>
                    <h2 className='post-title'>{post.title}</h2>
                </Link>
                {post.is_self || content}
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
    );
}