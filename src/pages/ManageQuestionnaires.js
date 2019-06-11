import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container } from 'reactstrap';

import QuestionnaireItem from './questionnaireItem';

function ManageQuestionnaires(props) {
    const [data, setData] = useState({
        questionnaires: []
    })

    useEffect(() => {
        getQuestionnaires();
    })

    const getQuestionnaires = () => {
        axios.get("http://localhost:5000/api/questionnaires")
            .then(res => {
                setData({ ...data, questionnaires: res.data })
            })
    }

    const questionnairesItem = data.questionnaires.map(q => {
        return <QuestionnaireItem questionnaire={q} />
    })

    return (
        <Container>
            <h1>Manage Questionnaires</h1>
            <div style={style.table} className="mt-2">
                {questionnairesItem}
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

export default ManageQuestionnaires;