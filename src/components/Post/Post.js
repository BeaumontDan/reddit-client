// Import React Tools
import { useParams } from 'react-router-dom';
import { fetchPost } from '../../api/reddit';
import { useEffect, useState } from 'react';

// Import StyleSheets
import './Post.css';

// Import Components
import { FullCard } from '../FullCard/FullCard';
import { Comment } from '../Comment/Comment';

export const Post = () => {
    let { postId } = useParams();

    let [post, setPost] = useState({});
    let [comments, setComments] = useState([]);
    let [isLoading, setIsLoading] = useState(true);
    let [error, setError] = useState(false);

    useEffect(() => {
        fetchPost(postId)
            .then(response => {
                setPost(response[0].data.children[0].data);
                setComments(response[1].data.children.filter(comment => {
                    return comment.kind !== 'more';
                }).map(comment => {
                    return comment.data;
                }));
                setIsLoading(false);
            })
            .catch(() => {
                setError(true);
            })
    }, [postId, error]);

    return (
        error ? <p className='error'>Oops! We couldn't find the post you are looking for...</p> :
            (isLoading ? <span className='loading'>Loading...</span> :
                <div data-testid='postCard' className='postCard'>
                    <FullCard post={post} />
                    <div className='commentsList'>
                        {comments.map(comment => {
                            return <Comment key={comment.id} comment={comment} />
                        })}
                    </div>
                </div>
            )
    )
};