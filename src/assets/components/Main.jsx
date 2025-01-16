import languages from "./data/languages";
import { useState } from "react";

const Main = () => {
    const langs = [...languages];
    const [description, setDescription] = useState(langs[0]);
    function newDescription(index) {
        setDescription(langs[index]);
    }

    return (
        <div className="container-xxl">
            <div className="button-group">
                {langs.map((lang, id) => {
                    return (
                        <button type="button" className="btn btn-primary" key={id} onClick={() => { newDescription(id) }}>{lang.title} </button>
                    )
                })}



            </div>
            <div className="quote">
                <div className="card">
                    <div className="card-header">
                        {description.title}
                    </div>
                    <div className="card-body">
                        <blockquote className="blockquote mb-0">
                            <p> {description.description} </p>
                        </blockquote>
                    </div>
                </div>

            </div>

        </div>


    )
}

export default Main