type Props = {
    text: string
}
function Header({ text }: Props) {
    return (
        <div>
            <h1>{text}</h1>
        </div>

    );
}

export default Header;