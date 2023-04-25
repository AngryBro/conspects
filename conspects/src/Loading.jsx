const Loading = ({size, color = '#8c71fe'}) => {
    return <div className="loader">
    <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 512 512" fill={color}>
        <path d="M208 48c0 26.51 21.49 48 48 48s48-21.49 48-48c0-26.509-21.49-48-48-48s-48 21.491-48 48zM0 256c0 26.51 21.491 48 48 48s48-21.49 48-48c0-26.51-21.49-48-48-48s-48 21.49-48 48zM416 256c0 26.51 21.49 48 48 48s48-21.49 48-48c0-26.51-21.49-48-48-48s-48 21.49-48 48zM60.922 403.078c0 26.51 21.49 48 48 48s48-21.49 48-48c0-26.51-21.49-48-48-48s-48 21.49-48 48zM355.078 108.922c0 26.51 21.49 48 48 48s48-21.49 48-48c0-26.51-21.49-48-48-48s-48 21.49-48 48zM60.922 108.922c0 26.51 21.49 48 48 48s48-21.49 48-48c0-26.51-21.49-48-48-48s-48 21.49-48 48zM355.078 403.078c0 26.51 21.49 48 48 48s48-21.49 48-48c0-26.51-21.49-48-48-48s-48 21.49-48 48z"></path>
    </svg>
    </div>
};

export default Loading;