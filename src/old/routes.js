// import React from 'react'
// import {Switch, Route, Redirect} from 'react-router-dom'
// import {AuthPage} from './pages/AuthPage'
// import {HomePage} from './pages/HomePage'

// export const useRoutes = isAuthenticated => {
//     if (isAuthenticated) {
//         return (
//             <Switch>
//                 <Route path="/auth" exact>
//                     <AuthPage />
//                 </Route>
//                 <Route path="/home" exact>
//                     <HomePage />
//                 </Route>
//             </Switch>
//         )
//     }
//     return (
//         <Switch>
//             <Route path="/" exact>
//                 <AuthPage/>
//             </Route>
//             <Redirect to="/"/>
//         </Switch>
//     )
// }