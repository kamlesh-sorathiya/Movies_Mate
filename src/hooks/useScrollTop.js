import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const UseScrollTop = () => {

    const {pathname} = useLocation();
    
    useEffect(() => {
      window.scrollTo(0,0)
       document.title = pathname.title;
    }, [pathname])
    

    return  null
}

export default UseScrollTop