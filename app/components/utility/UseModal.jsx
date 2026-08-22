import { Modal } from "antd";

function UseModal({ children, title = "", modal, setModal }) {
    return (
        <Modal
            title={title}
            closable={{ "aria-label": "Custom Close Button" }}
            open={modal}
            onCancel={() => setModal({ open: false, data: null })}
            onClose={() => setModal({ open: false, data: null })}
            footer={false}
            width={{
                xs: "90%",
                sm: "80%",
                md: "70%",
                lg: "60%",
                xl: "50%",
                xxl: "40%",
            }}
        >
            <>{children}</>
        </Modal>
    );
}

export default UseModal;
