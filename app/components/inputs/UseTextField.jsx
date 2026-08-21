import { Input } from "antd";
import { Controller } from "react-hook-form";
import UseHelperText from "./UseHelperText";

function UseTextField({ control, label = "", name, disabled = false, required = false, type = "text" }) {
    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState: { error } }) => (
                <div className="grid w-full">
                    <label className="text-sm mb-1" htmlFor={label}>
                        {label}
                    </label>
                    <Input {...field} id={label} size="large" placeholder={`ระบุ ${label}`} />
                    {error && <UseHelperText errorMessage={error.message} />}
                </div>
            )}
        />
    );
}

export default UseTextField;
