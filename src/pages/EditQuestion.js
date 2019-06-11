import React, { useEffect } from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';
import { Container, Input, InputGroup, InputGroupAddon, InputGroupText, Button } from 'reactstrap';

import useInputState from "../hooks/usetInputState";

function EditQuestion(props) {

    const { value, handleChange, reset, setValue } = useInputState({
        answer: "",
        choices: [],
        _id: "",
        category: "",
        questionType: "Open-Ended",
        question: "",
        timeAllotment: ""
    });

    useEffect(() => {
        getQuestion();
    }, [])

    const getQuestion = () => {
        let id = props.match.params.id;
        axios.get(`http://localhost:5000/api/questions/${id}`)
            .then(res => {
                setValue(res.data);
            })

    }

    console.log(value, "haha");

    const onSubmit = (e) => {
        e.preventDefault();
        axios.patch(`http://localhost:5000/api/questions/update/${value._id}`, value).then(res => {
            props.history.push("/manage-questions")
        })
        // console.log(value)
    }
    // const onSubmit = (e) => {
    //     e.preventDefault();
    //     let newQuestion = { ...value, questionType: "Open-Ended" }
    //     axios.post("http://localhost:5000/api/questions", newQuestion).then(
    //         props.history.push('/manage-questions')
    //     )
    //         .catch(err => {
    //             console.log(err);
    //         });;
    // }
    // console.log(props)

    return (

        <Container>
            <Link className="btn btn-dark mt-2" size="sm" to="/manage-questions">Back </Link>

            <h3>Edit Question</h3>

            <div style={style.table} className="mt-2">
                <form onSubmit={onSubmit}>
                    <InputGroup size="sm" className="mb-2">
                        <InputGroupAddon addonType="prepend">Question type:</InputGroupAddon>
                        <Input type="text" name="questionType" onChange={handleChange} disabled value={value.questionType} />
                    </InputGroup>
                    <InputGroup size="sm" className="mb-2">
                        <InputGroupAddon addonType="prepend">Category:</InputGroupAddon>
                        <Input type="text" name="category" onChange={handleChange} value={value.category} />
                    </InputGroup>
                    <InputGroup size="sm" className="mb-2">
                        <InputGroupAddon addonType="prepend">Question:</InputGroupAddon>
                        <Input type="text" name="question" onChange={handleChange} value={value.question} />
                    </InputGroup>
                    <InputGroup size="sm" className="mb-2">
                        <InputGroupAddon addonType="prepend">Answer:</InputGroupAddon>
                        <Input type="text" name="answer" onChange={handleChange} value={value.answer} />
                    </InputGroup>
                    <InputGroup size="sm" className="mb-2">
                        <InputGroupAddon addonType="prepend">Alloted time:</InputGroupAddon>
                        <Input type="text" name="timeAllotment" onChange={handleChange} value={value.timeAllotment} />
                    </InputGroup>
                    <Button className="btn btn-dark mr-2" >Submit</Button>
                    <Link className="btn btn-dark" to="/manage-questions">Cancel</Link>
                </form>
            </div>
        </Container>
    )
}

const style = {
    table: {
        border: "1px solid #ced4da",
        width: "100%",
        borderRadius: ".25rem",
        padding: ".5rem .35rem",
        overflowY: "auto"
    }
}
export default EditQuestion;