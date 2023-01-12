
const defaultNav = [
    { path:'/', display:'Home'},
    { path:'/shop', display:'Shop'},
]

const authNav = [
    { path:'/', display:'Home'},
    { path:'/shop', display:'Shop'},
    { path:'/dashboard/settings', display:'Dashboard'
},
]

const adminNav = [
    { path:'/', display:'Home'},
    { path:'/shop', display:'Shop'},
    { 
        path:'/dashboard/state-products', 
        display:'Dasboard',
        submenu:{
            path:'/dashboard/orders', display:'orders',
            path:'/dashboard/state-products', display:'state-products',
            path:'/dashboard/settings', display:'settings',
        }
    },
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



