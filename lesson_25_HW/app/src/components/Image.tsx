type Props = {
    image: string
}

function Image({ image }: Props) {
    return (
        <img src={image} alt="картинка" />
    );
}

export default Image;