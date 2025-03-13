// Import React Tools
import moment from 'moment';
import { MarkdownText } from './MarkdownText';

// Import StyleSheets
import './Comment.css';

export const Comment = ({ comment }) => {
    return (
        <div className='comment'>
            <div className='commentHeader'>
                <p className='commentAuthor'>{comment.author}</p>
                <span>{moment.unix(comment.created).fromNow()}</span>
            </div>

            <MarkdownText body={comment.body} />
            {comment.replies &&
                comment.replies.data.children.filter(reply => {
                    return reply.kind !== 'more';
                }).map(reply => {
                    return <Comment key={reply.data.id} comment={reply.data} />
                })
            }
        </div>
    )
}