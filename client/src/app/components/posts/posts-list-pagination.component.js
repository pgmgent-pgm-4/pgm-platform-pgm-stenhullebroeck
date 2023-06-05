import { Outlet } from 'react-router-dom';
import PostSummaryComponent from './post-summary.component';

// Import custom components
import { GET_ALL_POSTS_SMALL } from '../graphql';

const PostsListWithPaginationComponent = ({ posts }) => {
  return (
    <div className="posts-list">
      {posts &&
        posts.map((post) => <PostSummaryComponent key={post.id} post={post} />)}
      <Outlet />
    </div>
  );
};

export default PostsListWithPaginationComponent;
