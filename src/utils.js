export const composeClasses = (...args) => {
    if (args.length < 1) return '';
    const className = args.reduce((name, value) => name += ` ${value}`);
    return className;
};