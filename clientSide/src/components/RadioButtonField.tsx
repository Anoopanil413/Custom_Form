

interface FieldProps {
    field: {
        name: string;
        required: boolean;
        options?: string[];
    };
}
const RadioButtonField = ({ field }: FieldProps) => {
    return (
        <>
            <div>
                <label>{field.name}</label>
                {field.options && field.options.map(option => (
                    <div key={option}>
                        <input type="radio" name={field.name} value={option} required={field.required} />
                        <label>{option}</label>
                    </div>
                ))}
            </div>
        </>

    )
}

export default RadioButtonField