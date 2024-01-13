import { useState } from "react"
import TextField from "../../components/TextField"
import RadioButtonField from "../../components/RadioButtonField"
import DropDownField from "../../components/DropDownField"
import CheckBoxField from "../../components/CheckBoxField"
import './createform.css'



interface Field {
    name: string,
    type: string,
    required: boolean,
    options?: string[]

}
const CreateForm = () => {
    const [form, setForm] = useState({ title: '', fields: [] as Field[] })
    const [field, setField] = useState({ name: '', type: '', required: false, options: [] as string[] })
    const [option, setOption] = useState('');


    const addField = () => {
        const newField = { ...field };
        setForm({ ...form, fields: [...form.fields, newField] });
        setField({ name: '', type: '', required: false, options: [] as string[] });
    };

    const removeField = (index: number) => {
        const newFields = [...form.fields];
        newFields.splice(index, 1);
        setForm({ ...form, fields: newFields });
    };
    const addOption = () => {
        setField({ ...field, options: [...(field.options || []), option] });
        setOption(''); // reset option
    };

    const renderField = (field: Field, index: number) => {
        const options = field.options || [];

        switch (field.type) {
            case 'text':
                return <TextField key={index} field={field} />;
            case 'dropdown':
                return <DropDownField key={index} field={{ ...field, options }} />;
            case 'checkbox':
                return <CheckBoxField key={index} field={{ ...field, options }} />;
            case 'radio':
                return <RadioButtonField key={index} field={{ ...field, options }} />;
            default:
                return null;
        }
    };


    return (
        <>
            <div className="formClass">
                <div className="formContent">

                    <input
                        type="text"
                        placeholder="Form Title"
                        onChange={(e) => setForm({ ...form, title: e.target.value })}
                    />
                    {form.fields.map((field, index) => (
                        <div key={index}>
                            {renderField(field, index)}
                            <button onClick={() => removeField(index)}>Remove</button>
                        </div>
                    ))}
                </div>
                <div className="formEditor">
                    <input
                        type="text"
                        placeholder="Field Name"
                        onChange={(e) => setField({ ...field, name: e.target.value })}
                    />

                    <select
                        onChange={(e) => setField({ ...field, type: e.target.value })}
                    >
                        <option value="">Select field type</option>
                        <option value="text">Text</option>
                        <option value="radio">Radio</option>
                        <option value="dropdown">Dropdown</option>
                        <option value="checkbox">Checkbox</option>
                    </select>
                    <button onClick={addField}>Add Field</button>
                    {field.type === 'dropdown' || field.type === 'checkbox' || field.type === 'radio' ? (
                        <div>
                            <input
                                type="text"
                                placeholder="Enter option and press Add Option"
                                value={option}
                                onChange={(e) => setOption(e.target.value)}
                            />
                            <button onClick={addOption}>Add Option</button>
                            {field.options && field.options.map((option, index) => (
                                <div key={index}>
                                    <span>{option}</span>
                                </div>
                            ))}
                        </div>
                    ) : null}
                    <input
                        type="checkbox"
                        onChange={(e) => setField({ ...field, required: e.target.checked })}
                    />
                    <label>Required</label>
                </div>
            </div>

        </>
    )
}

export default CreateForm