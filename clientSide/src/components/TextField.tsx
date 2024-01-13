import { useState } from "react";


interface FieldProps {
    field: {
        name: string;
        required: boolean;
    };
    onFieldChange: (name: string, value: string) => void;
}
const TextField = ({ field,onFieldChange }: FieldProps) => {
    const [formData, setFormData] = useState({});

    console.log(field)
    return (
        <>
            <div>

                <label>{field.name}</label>
                <input type="text" required={field.required}   onChange={(e) => onFieldChange(field.name, e.target.value)} />
            </div>
        </>
    )
}

export default TextField