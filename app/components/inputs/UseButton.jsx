import { Button } from "antd";

function UseButton({ label = "", onClick, htmlType = "button" }) {
    return (
        <Button htmlType={htmlType} onClick={onClick}>
            {label}
        </Button>
    );
}

export default UseButton;
