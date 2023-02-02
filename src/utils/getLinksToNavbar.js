
const defaultNav = [
    { path:'/', display:'Home'},
    { path:'/shop', display:'Shop'},
]

const authNav = [
    { path:'/', display:'Home'},
    { path:'/shop', display:'Shop'},
]

const adminNav = [
    { path:'/', display:'Home'},
    { path:'/shop', display:'Shop'},
]



export const getLinksToNavBar = async({ role, status }) => {

    console.log(role, status)
    

    if( status ==='authenticated' && role === 'user'){
        return authNav
    }
    if( status ==='authenticated' && role ==='admin'){
        return adminNav
    }
    if( status === 'not-authenticated'){
        return defaultNav
    }


}



