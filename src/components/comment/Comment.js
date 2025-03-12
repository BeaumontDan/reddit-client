// Import React Tools
import ReactMarkdown from "react-markdown";
import moment from "moment";

// Import StyleSheets
import styles from './Comment.module.css';

const Comment = ({ comment }) => {
    return (
        <div className={styles.comment}>
            <div className={styles.info}>
                <p>{`Posted by: ${comment.author}`}</p>
                <p>{moment.unix(comment.created_utc).fromNow()}</p>
            </div>
            <ReactMarkdown>{String(comment.body)}</ReactMarkdown>
        </div>
    )
};

export default Comment;