"use client";
import { DatePicker } from "antd";
import dayjs from "dayjs";
import { Controller } from "react-hook-form";
import UseHelperText from "./UseHelperText";

function UseDatePicker({ control, name, label = "", onChange, disabled = false }) {
    return (
        <Controller
            name={name}
            control={control}
            render={({ field, fieldState: { error } }) => (
                <div className="grid w-full">
                    <label htmlFor={label} className="text-sm mb-0.5 w-fit">
                        {label}
                    </label>
                    <DatePicker
                        {...field}
                        value={field.value ? dayjs(field.value) : null}
                        id={label}
                        placeholder={label}
                        className="w-full"
                        size="large"
                        format="DD/MM/YYYY"
                        onChange={(value) => {
                            const formatValue = value?.toISOString() ?? null;
                            field.onChange(formatValue ?? null);
                        }}
                        disabled={disabled}
                    />
                    {error && <UseHelperText errorMessage={error.message} />}
                </div>
            )}
        />
    );
}

export default UseDatePicker;
