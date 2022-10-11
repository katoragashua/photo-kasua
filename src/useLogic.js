import {useState, useEffect, useRef, useContext} from "react"

function useLogic() {
    const [hovered, setHovered] = useState(() => false)

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

    return {hovered, hoverRef}
}

export default useLogic