
const defaultNav = [
    { path:'/', display:'Home'},
    { path:'/shop', display:'Shop'},
    { path:'/auth/login', display:'Login'}

]

const authNav = [
    { path:'/', display:'Home'},
    { path:'/shop', display:'Shop'},
    { path:'/auth/login', display:'Login'}
]

const adminNav = [
    { path:'/', display:'Home'},
    { path:'/shop', display:'Shop'},
    { path:'/auth/login', display:'Login'},
    { path:'/dashboard/state-products', display:'Dashboard'}


]



export const getLinksToNavBar = (auth) => {
    

    if( auth.status ==='authenticated' && auth.role === 'user'){
        return authNav
    }
    if( auth.status==='authenticated' && auth.role ==='admin'){
        return adminNav
    }
    if(auth.status === 'not-authenticated'){
        return defaultNav
    }


}



