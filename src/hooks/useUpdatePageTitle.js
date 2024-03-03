import { useEffect } from "react";

function UseUpdatePageTitle(title) {

  useEffect(() => {
    document.title = `${title} | Movies Mate`;
  }, [title]);

  return  null
}

export default UseUpdatePageTitle