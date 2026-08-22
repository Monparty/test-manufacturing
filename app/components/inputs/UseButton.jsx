import { Button } from "antd";

function UseButton({ label = "", onClick, type = "default", htmlType = "button", size = "large" }) {
    return (
        <Button htmlType={htmlType} onClick={onClick} size={size} type={type}>
            {label}
        </Button>
    );
}

export default UseButton;
