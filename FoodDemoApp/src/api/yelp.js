import axios from 'axios'

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer tsqmczn3U9kCPSi1_YjM10JCzLUyKkfH-n6O866knJKWjgBlCbu6YxIQyQ38ciEZImhpefhXJt_vcSKy8Pvu94_wtKIyAqvWEeEjdrcI22Duw0JzkSZkl25a8ZNVXXYx'
    }
})