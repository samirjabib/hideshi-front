
const defaultNav = [
    { path:'/', display:'Home'},
    { path:'/auth/login',  display:'Login'},
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


export const getLinksToNavBar = ( auth ) => {
    const { role } = auth.user

    if(role === 'user'){
        console.log('retorno el user')
        return authNav
    }
    if(role ==='admin'){
        console.log('retorno el admin')
        return adminNav
    } else {
        console.log('retorno default')
        return defaultNav
    }

}