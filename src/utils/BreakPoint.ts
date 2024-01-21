type Breakpoints = {
    [key: number]: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
};

const breakpoints: Breakpoints = {
    0: 'xs',
    600: 'sm',
    960: 'md',
    1280: 'lg',
    1920: 'xl',
};

export default breakpoints;