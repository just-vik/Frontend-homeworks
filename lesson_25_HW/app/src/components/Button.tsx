type Props = {
    text: string
}
function Button({ text }: Props) {
    return (
        <div>
            <button>{text}</button>
        </div>

    );
}

export default Button;