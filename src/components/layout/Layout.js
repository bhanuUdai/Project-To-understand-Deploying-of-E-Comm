import React from "react";
import classes from './Layout.module.css'
import MainNavigation from "./MainNavigation";
const Layout=(prop)=>
{
    return(<React.Fragment>
<MainNavigation/>
<main className={classes.main}>
    {prop.children}
</main>
    </React.Fragment>)
}

export default Layout