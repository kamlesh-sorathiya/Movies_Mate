import { useEffect } from "react";

function UseUpdatePageTitle(title) {

  useEffect(() => {
    // console.log(title);
    document.title = `${title} | Movies Mate`;
  }, [title]);

  return  null
}

export default UseUpdatePageTitle