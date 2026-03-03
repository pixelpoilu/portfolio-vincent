interface LogoProps {
    size?: number;
    className?: string;
}

const Logo = ({ size = 140, className = "" }: LogoProps) => {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 315.4 317.1"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <g fill="currentColor">
                <polygon points="214.6,174.4 282.9,33 282.5,32.8 267.9,32.8 192.9,188.1 261.6,188.1 269.1,174.4" />
                <path d="M88,32.6l-55.6,0.2l134.8,251.6l7.3-15.2l18.6-38.4L88,32.6z M166.7,254.4L55.1,46.2l23.5-0.3l99.3,185.3L166.7,254.4z" />
            </g>
        </svg>
    );
};

export default Logo;