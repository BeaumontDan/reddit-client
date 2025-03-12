// Import React Tools
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import moment from 'moment';

// Import StyleSheets
import styles from './Card.module.css';

import { FaChevronCircleUp, FaChevronCircleDown, FaComments } from "react-icons/fa";

// Import Components
import Comment from '../comment/Comment';
import { numberFormat } from '../../utils/numberFormat';
import { startGetPostComments, toggleShowComments } from '../../store/redditSlice';

const Card = ({ card, index }) => {
    const [error, setError] = useState(false);
    const [arrowDirection, setArrowDirection] = useState(0);
    const dispatch = useDispatch();

    const handleError = () => {
        setError(true);
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

    const onClickComments = () => {
        if (!card.showingComments) {
            dispatch(startGetPostComments({ index: index, permalink: card.permalink }));
        } else {
            dispatch(toggleShowComments(index));
        }
    };

    const showComments = () => {
        if (card.isLoadingComment) {
            return (
                <p>Loading comments...</p>
            )
        } else if (card.hasErrorComment) {
            return (
                <p>Oops! Unable to load comments.</p>
            )
        } else if (card.showingComments) {
            return (
                <div>
                    {card.comments.map(comment => (<Comment comment={comment} key={comment.id} />))}
                </div>
            )
        } else {
            return null;
        }
    };

    return (
        <div className={styles.card}>
            <div className={styles.cardHeader}>
                <p>{`Posted by: ${card.author}`}</p>
                <p>{moment.unix(card.created_utc).fromNow()}</p>
            </div>

            <h4>{card.title}</h4>

            <div className={styles.imgPost}>
                {error ? null : <img src={card.url} loading="lazy" alt="" onError={handleError} />}
            </div>


            <div className={styles.cardFooter}>

                <div className={styles.cardLike}>
                    <button
                        className={styles.iconAction}
                        onClick={() => onClickarrow(1)}
                    >
                        {arrowUp()}
                    </button>
                    <p>{numberFormat(card.ups)}</p>
                    <button
                        className={styles.iconAction}
                        onClick={() => onClickarrow(-1)}
                    >
                        {arrowDown()}
                    </button>
                </div>

                <div className={styles.commentIcon}>
                    <button
                        className={styles.iconAction}
                        onClick={onClickComments}
                    >
                        <FaComments style={{ color: 'black' }} />
                    </button>
                    <p>{numberFormat(card.num_comments)}</p>
                </div>
            </div>
            <div className={styles.comments}>{showComments()}</div>
        </div>
    )
};

export default Card;