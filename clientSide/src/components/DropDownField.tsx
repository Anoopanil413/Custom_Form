import { useState } from "react";

interface FieldProps {
    field: {
        name: string;
        required: boolean;
        options?: string[];
    };
    onFieldChange?: (name: string, value: string) => void;

}
const DropDownField = ({ field,onFieldChange }: FieldProps) => {
    const [formData, setFormData] = useState({});

    return (
        <>
            <div>
                <label>{field.name}</label>
                {field.options && <select name={field.name} required={field.required}   onChange={(e) =>onFieldChange && onFieldChange(field.name, e.target.value)}>
                    {field.options.map(option => (
                        <option key={option} value={option}>{option}</option>
                    ))}
                </select>}
            </div>
        </>
    )
}

export default DropDownField