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
    const [formResponses, setFormResponses] = useState({});


    const handleFieldChange = (name: string, value: string) => {
        setFormResponses({ ...formResponses, [name]: value });
      };
      

    const handleSubmit = async (event) => {
        event.preventDefault();
      
        try {
          const response = await axiosInstance.post(`/api/forms/${formId}/submit`, formResponses);
      
          if (response.status === 200) {
            // Handle successful form submission here
            console.log('Form submitted successfully');
          } else {
            // Handle errors here
            console.log('Error submitting form');
          }
        } catch (error) {
          console.error('Error submitting form', error);
        }
      };

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
                return <TextField key={index} field={field} onFieldChange={handleFieldChange}  />;
            case 'radio':
                return <RadioButtonField key={index} field={field} onFieldChange={handleFieldChange} />;
            case 'dropdown':
                return <DropDownField key={index} field={field} onFieldChange={handleFieldChange}  />;
            case 'checkbox':
                return <CheckBoxField key={index} field={field} onFieldChange={handleFieldChange} />;
            default:
                return null;
        }
    };

    return (
        <div>
            <h1>{form.title}</h1>
            <form onSubmit={handleSubmit}>
                {form.fields.map(renderField)}
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default ViewForm