"use client";
import { Select } from "antd";
import { Controller } from "react-hook-form";
import UseHelperText from "./UseHelperText";

function UseSelect({ control, name, label = "", onChange, disabled = false, options = [] }) {
    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState: { error } }) => (
                <div className="grid w-full">
                    <label htmlFor={label} className="text-sm mb-0.5 w-fit">
                        {label}
                    </label>
                    <Select
                        {...field}
                        id={label}
                        className="w-full"
                        size="large"
                        placeholder={label}
                        onChange={(value) => {
                            if (typeof onChange === "function") {
                                onChange(value);
                            }
                            field.onChange(value);
                        }}
                        options={options}
                        disabled={disabled}
                    />
                    {error && <UseHelperText errorMessage={error.message} />}
                </div>
            )}
        />
    );
}

export default UseSelect;
