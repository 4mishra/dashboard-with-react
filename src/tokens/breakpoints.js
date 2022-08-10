export const breakpoints = {
    sm: 576,
    md: 768,
    lg: 992,
    xl: 1200,
    xxl: 1400,
}

const minWidth = (breakpoint) => {
    return `@media (min-width: ${breakpoint}px)`
}

export const deviceBreakpoint = {
    mobile: {
        landscape: minWidth(breakpoints.sm),
    },
    tablet: {
        portrait: minWidth(breakpoints.md),
    },
    desktop: {
        lg: minWidth(breakpoints.lg),
        xl: minWidth(breakpoints.xl),
        xxl: minWidth(breakpoints.xxl),
    },
}
