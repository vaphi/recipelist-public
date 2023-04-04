import { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import "./recipe-steps-form.css"
import { isNil } from 'lodash';

function RecipeStepsForm(props: any) {

    const [stepsValues, setStepsValues] = useState<any>([]);

    function handleChange(i: any, e: any) {
        const stepsCopy = [...stepsValues];
        stepsCopy[i][e.target.name] = e.target.value;
        if (!isNil(stepsCopy[i]['key'] || stepsCopy[i]['key'] === '')) {
            stepsCopy[i]['key'] = i;
        }

        setStepsValues(stepsCopy);
        handleRecipeChange(stepsCopy);
    }

    function addFormFields() {
        setStepsValues([...stepsValues, { stepDesc: "", key: stepsValues.length }])
    }

    function removeFormFields(i: number) {
        console.log('before:', stepsValues)
        const newState = [...stepsValues];
        const newStepValues = newState.splice(i - 1, 1);
        console.log('after:', stepsValues)
        setStepsValues(newState);
    }

    function handleRecipeChange(steps: any) {
        props.handleRecipeChange(steps);
    }

    return (
        <>
            <>
                {stepsValues.map((element: any, index: number) => (
                    <>
                        <div key={index}>
                            <Form.Group>
                                <div className="steps-container" >
                                    <div className="control remove-icon-container">
                                        <i className="fa fa-times remove-icon" onClick={() => removeFormFields(index)}></i>
                                    </div>
                                    <div className="control steps-control-container" key={index}>
                                        <Form.Label>Step {index + 1}</Form.Label>
                                        <Form.Control name='stepDesc' as="textarea" rows={2} placeholder="Enter Step" onChange={e => handleChange(index, e)} />
                                    </div>
                                </div>
                            </Form.Group>
                        </div>
                    </>
                ))}
                <div className='add-steps-button-container'>
                    <Button className='btn add-button' variant="custom" size="sm" onClick={addFormFields}>add</Button>
                </div>
            </>
        </>
    );
}

export default RecipeStepsForm;