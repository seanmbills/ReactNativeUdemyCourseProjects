import createDataContext from './createDataContext'
import jsonServer from '../api/jsonServer'

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'add_blog_post':
            return [
                ...state, {
                title: action.payload.title,
                content: action.payload.content,
                id: Math.floor(Math.random() * 999999999),
            }]
        case 'delete_blog_post':
            return state.filter((blogPost) => blogPost.id !== action.payload)
        case 'update_blog_post':
            return state.map((blogPost) => {
                return blogPost.id === action.payload.id ? action.payload: blogPost
            })
        case 'get_blog_posts':
            return action.payload
        default:
            return state
    }
}

const getBlogPosts = dispatch => {
    return async () => {
        const response = await jsonServer.get('/blogposts')
        dispatch({type: 'get_blog_posts', payload: response.data})
    }
}

const addBlogPost = (dispatch) => {
    return (title, content, callback) => {
        dispatch(
            {
                type: 'add_blog_post',
                payload: {
                    title,
                    content
                }
            }
        )
        callback()
    }
}

const deleteBlogPost = (dispatch) => {
    return (id) => {
        dispatch({type: 'delete_blog_post', payload: id})
    }
}

const updateBlogPost = (dispatch) => {
    return (id, title, content, callback) => {
        dispatch(
            {
                type: 'update_blog_post',
                payload: {
                    id,
                    title,
                    content
                }
            }
        )
        callback()
    }
}

export const {Context, Provider} = createDataContext(
    blogReducer, 
    {addBlogPost, deleteBlogPost, updateBlogPost, getBlogPosts},
    []
)