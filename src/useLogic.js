import {useState, useEffect, useRef, useContext} from "react"
import {Context} from "./Context"
function useLogic() {
    const [hovered, setHovered] = useState(() => false)
    const {screenSize} = useContext(Context);
    // const switchHoverState = () => setHovered(prev => !prev)

    // Changing hover states
    const enterHoverState = () => setHovered(true)

    const leaveHoverState = () => setHovered(false)

    const hoverRef = useRef(null)

    useEffect(() => {
        const hover = hoverRef.current
        hover.addEventListener("mouseenter", enterHoverState);
        hover.addEventListener("mouseleave", leaveHoverState)

        return () => {
          hover.removeEventListener("mouseenter", enterHoverState);
          hover.removeEventListener("mouseleave", leaveHoverState);
        }; 
    }, [])

    const update = (val) => setHovered(val)
    
    // useEffect(() => {
    //   window.addEventListener("resize", () => {
    //     if (window.innerWidth < 900) {
    //       setHovered(true);
    //     }
    //   })

    //   return () => window.removeEventListener("resize", () => {
    //     if (window.innerWidth < 900) {
    //       setHovered(true);
    //     }})

    // }, []);

    return {hovered, hoverRef, update}
}

export default useLogic