
const defaultNav = [
    { path:'/', display:'Home'},
    { path:'/shop', display:'Shop'},
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



export const getLinksToNavBar = (auth) => {
    console.log(auth)


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



