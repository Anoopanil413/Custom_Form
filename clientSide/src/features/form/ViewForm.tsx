import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

import TextField from "../../components/TextField";
import RadioButtonField from "../../components/RadioButtonField";
import DropDownField from "../../components/DropDownField";
import CheckBoxField from "../../components/CheckBoxField";
import axiosInstance from '../../api/axiosInstance'



interface Field {
    name: string;
    type: string;
    required: boolean;
    options?: string[];
}

const ViewForm = () => {
    const { formId } = useParams();
    const [form, setForm] = useState({ title: '', fields: [] as Field[] });

    useEffect(() => {
        const fetchForm = async () => {
            const response = await axiosInstance.get(`/api/forms/${formId}`);
            setForm(response.data);
        };

        fetchForm();
    }, [formId]);

    const renderField = (field: Field, index: number) => {
        switch (field.type) {
            case 'text':
                return <TextField key={index} field={field} />;
            case 'radio':
                return <RadioButtonField key={index} field={field} />;
            case 'dropdown':
                return <DropDownField key={index} field={field} />;
            case 'checkbox':
                return <CheckBoxField key={index} field={field} />;
            default:
                return null;
        }
    };

    return (
        <div>
            <h1>{form.title}</h1>
            {form.fields.map(renderField)}
        </div>
    );
}

export default ViewForm