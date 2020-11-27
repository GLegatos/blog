import _ from 'lodash';
import jsonPlaceHolder from '../apis/jsonPlaceholder';

export const fetchPostsAndUsers = () => async (dispatch, getState) => {
    console.log('about to fetch posts')
    await dispatch(fetchPosts());

    _.chain(getState().posts)
    .map('userId')
    .uniq()
    .forEach(id => dispatch(fetchUser(id)))
    .value();
};

export const fetchPosts = () => async dispatch => {
        const response = await jsonPlaceHolder.get('/posts');

        dispatch({ type: 'FETCH_POSTS', payload: response.data })
    };

export const fetchUser = id => async dispatch => {
    const response = await jsonPlaceHolder.get(`/users/${id}`)

    dispatch({ type: 'FETCH_USER', payload: response.data });
};


// Fetch with Memoize

// export const fetchUser = id => dispatch => {
//     _fetchUser(id, dispatch);
// };

// const _fetchUser = _.memoize(async (id, dispatch) => {
//     const response = await jsonPlaceHolder.get(`/users/${id}`)

//     dispatch({ type: 'FETCH_USER', payload: response.data });
// });