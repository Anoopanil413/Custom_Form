import { useState } from "react";


interface FieldProps {
    field: {
        name: string;
        required: boolean;
        options?: string[];
    };
    onFieldChange?: (name: string, value: string) => void;

}
const RadioButtonField = ({ field, onFieldChange }: FieldProps) => {
    const [formData, setFormData] = useState({});

    return (
        <>
            <div>
                <label>{field.name}</label>
                {field.options && field.options.map(option => (
                    <div key={option}>
                        <input type="radio" name={field.name} value={option} required={field.required} onChange={(e) => onFieldChange && onFieldChange(field.name, e.target.value)} />
                        <label>{option}</label>
                    </div>
                ))}
            </div>
        </>

    )
}

export default RadioButtonField