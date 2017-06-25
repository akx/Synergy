import { call, put } from "redux-saga/effects";
import ApiPosts from "../api/posts";

// get all the post from wordpress
export function* getAllPost(action) {
  const posts = yield call(ApiPosts.getPost);

  // save the posts in state
  yield put({
    type: "GET_POSTS_SAVE",
    posts: posts
  });
}