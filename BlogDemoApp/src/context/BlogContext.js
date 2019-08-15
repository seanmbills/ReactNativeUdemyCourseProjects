import createDataContext from './createDataContext'

const blogReducer = (state, action) => {
    switch (action.type) {
        case 'add_blog_post':
            return [
                ...state, {
                title: `Blog Post #${state.length + 1}`,
                id: Math.floor(Math.random() * 999999999)
            }]
        case 'delete_blog_post':
            return state.filter((blogPost) => blogPost.id !== action.payload)
        case 'update_blog_post':
        default:
            return state
    }
}

const addBlogPost = (dispatch) => {
    return () => {
        dispatch({type: 'add_blog_post'})
    }
}

const deleteBlogPost = (dispatch) => {
    return (id) => {
        dispatch({type: 'delete_blog_post', payload: id})
    }
}

export const {Context, Provider} = createDataContext(
    blogReducer, 
    {addBlogPost, deleteBlogPost}, []
)