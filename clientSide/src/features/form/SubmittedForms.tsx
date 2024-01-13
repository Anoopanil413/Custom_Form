import { useEffect } from "react"
import { useAppDispatch } from "../../app/hooks"
import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { fetchForms } from "./formSlice";
import { Link } from 'react-router-dom';
import Landing from "./Landing";


const SubmittedForms = () => {
    const dispatch = useAppDispatch()
    const forms = useSelector((state: RootState) => state.form.forms);
    const formStatus = useSelector((state: RootState) => state.form.status);
    const formError = useSelector((state: RootState) => state.form.error);

    useEffect(() => {
        if (formStatus === 'idle') {
            dispatch(fetchForms());
        }
    }, [formStatus, dispatch]);

    let content;

    if (formStatus === 'loading') {
        content = <div>Loading...</div>;
    } else if (formStatus === 'succeeded') {
        content = forms.map((form, index) => (
            <div key={index}>
                <Link to={`/forms/${form._id}`}>
                    <h2>{form.title}</h2>
                </Link>
            </div>
        ));
    } else if (formStatus === 'failed') {
        content = <div>{formError}</div>;
    }


    return (
        <>
            <div>
                <Landing />
                <h1>Forms</h1>
                {content}
            </div>
        </>
    )
}

export default SubmittedForms