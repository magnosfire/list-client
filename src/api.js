import axios from 'axios';

export default {
    user: {
        login: credentials => 
            axios.post('/api/auth', { credentials }).then(res=> res.data.user),
        signup: user =>
            axios.post('/api/users', { user }).then(res =>  res.data.user)
    },
    lists: {
        fetchAll: () => 
            axios.get('/api/lists').then(res => res.data.lists),
        insertItem: newItem =>
            axios.post('/api/lists', { newItem }).then(res=> res.data.user),
    }
}