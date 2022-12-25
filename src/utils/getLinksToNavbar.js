
const defaultNav = [
    { path:'/', display:'Home'},
    { path:'/shop', display:'Shop'},
    { path:'/auth/login',  display:'Login'},

]

const authNav = [
    { path:'/', display:'Home'},
    { path:'/shop', display:'Shop'},
    { path:'/dashboard/settings', display:'Dashboard'},
]

const adminNav = [
    { path:'/', display:'Home'},
    { path:'/shop', display:'Shop'},
    { path:'/dashboard/settings', display:'Dasboard'},
]



export const getLinksToNavBar = ( auth ) => {
    const { role } = auth.user

    if( auth.status ==='authenticated' && role === 'user'){
        return authNav
    }
    if( role ==='admin'){
        return adminNav
    }
    if(auth.status === 'not-authenticated'){
        return defaultNav
    }

}