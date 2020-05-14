export default [
    {
        admin: false,
        icon: 'mdi-account-circle',
        logged: false,
        name: 'Login',
        path: '/',
    },
    {
        admin: false,
        icon: 'mdi-information',
        logged: false,
        name: 'About',
        path: '/about',
    },
    {
        admin: false,
        icon: 'mdi-home',
        logged: true,
        name: 'Home',
        path: '/home',
    },
    {
        admin: false,
        icon: 'mdi-file-question',
        logged: true,
        name: 'Quiz',
        path: '/quiz',
    },
    {
        admin: true,
        icon: 'mdi-chart-bar',
        logged: true,
        name: 'Statistics',
        path: '/statistics',
    }
]

