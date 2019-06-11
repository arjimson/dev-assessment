import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'reactstrap';

function QuestionItem(props) {
    const { question, answer, category, questionType, _id } = props.question;
    return (
        <div style={style.questionItem}>
            {question}
            {category}
            {questionType}

            <Link className="btn btn-dark mr-2 ml-2" to={`/manage-questions/question/${_id}`}>Edit</Link>
            <Button className="btn btn-dark" onClick={() => props.deleteHandler(_id)}>Delete</Button>
        </div>
    )
}

const style = {
    questionItem: {
        border: "1px solid #ced4da",
        width: "100%",
        padding: ".15rem .25rem .45rem .25rem",
        borderRadius: ".25rem",
        cursor: "pointer",
        marginBottom: ".25rem",
        fontSize: ".85rem",
        position: "relative"
    },
    buttonStyle: {
        padding: ".05rem .55rem",
        fontSize: ".85rem"
    },
    actionsStyle: {
        position: "abosolute",
        float: "right"
    }
}
export default QuestionItem;