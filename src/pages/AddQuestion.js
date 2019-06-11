import React from 'react';
import axios from 'axios';

import { Link } from 'react-router-dom';
import { Container, Input, InputGroup, InputGroupAddon, InputGroupText, Button } from 'reactstrap';

import useInputState from "../hooks/usetInputState";

function AddQuestion(props) {
    const { value, handleChange, reset } = useInputState();

    const onSubmit = (e) => {
        e.preventDefault();
        let newQuestion = { ...value, questionType: "Open-Ended" }
        axios.post("http://localhost:5000/api/questions", newQuestion).then(
            props.history.push('/manage-questions')
        )
            .catch(err => {
                console.log(err);
            });;
    }
    console.log(value)

    return (
        <Container>
            <Link className="btn btn-dark mt-2" size="sm" to="./">Back </Link>
            <h3>Add Question</h3>

            <div style={style.table} className="mt-2">
                <form onSubmit={onSubmit}>
                    <InputGroup size="sm" className="mb-2">
                        <InputGroupAddon addonType="prepend">Question type:</InputGroupAddon>
                        <Input type="text" placeholder="Open-Ended" name="questionType" onChange={handleChange} disabled />
                    </InputGroup>
                    <InputGroup size="sm" className="mb-2">
                        <InputGroupAddon addonType="prepend">Category:</InputGroupAddon>
                        <Input type="text" placeholder="Enter category here" name="category" onChange={handleChange} />
                    </InputGroup>
                    <InputGroup size="sm" className="mb-2">
                        <InputGroupAddon addonType="prepend">Question:</InputGroupAddon>
                        <Input type="text" placeholder="Enter question here" name="question" onChange={handleChange} />
                    </InputGroup>
                    <InputGroup size="sm" className="mb-2">
                        <InputGroupAddon addonType="prepend">Answer:</InputGroupAddon>
                        <Input type="text" placeholder="Enter answer here" name="answer" onChange={handleChange} />
                    </InputGroup>
                    <InputGroup size="sm" className="mb-2">
                        <InputGroupAddon addonType="prepend">Alloted time:</InputGroupAddon>
                        <Input type="text" placeholder="Enter alloted time here" name="timeAllotment" onChange={handleChange} />
                    </InputGroup>
                    <Button className="btn btn-dark mr-2" >Submit</Button>
                    <Link className="btn btn-dark" to="./">Cancel</Link>
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
export default AddQuestion;