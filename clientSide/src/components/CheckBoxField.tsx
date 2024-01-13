

interface FieldProps {
    field: {
        name: string;
        required: boolean;
        options?: string[];
    };
}
const CheckBoxField = ({ field }: FieldProps) => {
    return (
        <>
            <div>
                <label>{field.name}</label>
                {field.options && field.options.map(option => (
                    <div key={option}>
                        <input type="checkbox" name={field.name} value={option} required={field.required} />
                        <label>{option}</label>
                    </div>
                ))}
            </div>

        </>
    )
}

export default CheckBoxField