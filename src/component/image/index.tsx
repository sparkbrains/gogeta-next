export default function Image({ src, width, height, alt,className }) {
    return <img src={src} width={width} height={height} alt={alt} className={className}/>
}