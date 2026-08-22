"use client";
import { InputNumber as UseInputNumber } from "antd";
import { Controller } from "react-hook-form";
import UseHelperText from "./UseHelperText";

function InputNumber({ control, name, label = "", onChange, disabled = false }) {
    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState: { error } }) => (
                <div className="grid w-full">
                    <label htmlFor={label} className="text-sm mb-0.5 w-fit">
                        {label}
                    </label>
                    <UseInputNumber
                        {...field}
                        id={label}
                        placeholder={label}
                        className="w-full!"
                        size="large"
                        onChange={(value) => {
                            if (typeof onChange === "function") {
                                onChange(value);
                            }
                            field.onChange(value);
                        }}
                        disabled={disabled}
                    />
                    {error && <UseHelperText errorMessage={error.message} />}
                </div>
            )}
        />
    );
}

export default InputNumber;
