interface FieldProps {
    field: {
        name: string;
        required: boolean;
        options?: string[];
    };
}
const DropDownField = ({ field }: FieldProps) => {
    return (
        <>
            <div>
                <label>{field.name}</label>
                {field.options && <select name={field.name} required={field.required}>
                    {field.options.map(option => (
                        <option key={option} value={option}>{option}</option>
                    ))}
                </select>}
            </div>
        </>
    )
}

export default DropDownField