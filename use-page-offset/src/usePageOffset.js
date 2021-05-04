import { useState, useEffect } from 'react'

/**
 * Custom hook to track windows Y offset
 *
 * const offset = usePageOffset()
 * @returns number
 */
export default function usePageOffset() {
    /**
     * Define local state
     */
    const [offset, setOffset] = useState(0)

    /**
     * Sets pageYOffset in state
     * @param pageYOffset number
     */
    const handleScroll = (pageYOffset) => {
        setOffset(pageYOffset)
    }

    /**
     * Adds event listener for scroll and removes on unmount
     */
    useEffect(() => {
        document.addEventListener('scroll', () => {
            handleScroll(window.pageYOffset)
        })
        return () => {
            document.removeEventListener('scroll', () => {
                handleScroll(window.pageYOffset)
            })
        }
    }, [])

    /**
     * Returns pageYoffset
     */
    return offset
}
