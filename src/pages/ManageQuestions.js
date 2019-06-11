import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Button, NavLink } from 'reactstrap';

import { Link } from 'react-router-dom';
import QuestionItem from './questionItem';


function ManageQuestions(props) {

    const [data, setData] = useState({
        questions: []
    })

    useEffect(() => {
        getQuestions();
    }, [])

    const getQuestions = () => {
        axios
            .get("http://localhost:5000/api/questions")
            .then(res => {
                setData({ ...data, questions: res.data })
            })
            .catch(err => {
                console.log(err);
            });
    }

    const deleteHandler = (id) => {
        // console.log(d)
        axios.delete(`http://localhost:5000/api/questions/${id}`).then(res => {
            setData({
                ...data,
                questions: [...data.questions.filter(q => q._id !== id)]
            })
        }
        );
    }


    const questionsItem = data.questions.map(q => {
        return <QuestionItem question={q} deleteHandler={deleteHandler} />
    })

    return (
        <Container>
            <Link to="/manage-questions/add-question" className="btn btn-dark mt-2">Add Question</Link>
            <div style={style.table} className="mt-2">
                {questionsItem}
            </div>
        </Container>
    )
}

const style = {
    table: {
        border: "1px solid #ced4da",
        width: "100%",
        height: "500px",
        borderRadius: ".25rem",
        padding: ".5rem .35rem",
        overflowY: "auto"
    }
}

export default ManageQuestions;