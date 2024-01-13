


interface FieldProps {
    field: {
        name: string;
        required: boolean;
    };
}
const TextField = ({ field }: FieldProps) => {
    console.log(field)
    return (
        <>
            <div>

                <label>{field.name}</label>
                <input type="text" required={field.required} />
            </div>
        </>
    )
}

export default TextField