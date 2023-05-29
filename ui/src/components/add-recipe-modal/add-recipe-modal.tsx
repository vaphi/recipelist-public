import React, { useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import AddRecipeForm from './add-recipe-form/add-recipe-form';
import "./add-recipe-modal.css"

function AddRecipeModal(props: any) {

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const [validated, setValidated] = useState(true);

    function handleClose() {
        setShow(false);
        setRecipeName('');
        setDescription('');
        setNotes('');
        setOrigin('');
        setType('');
    }

    const [recipeName, setRecipeName] = useState<any>('');
    const [description, setDescription] = useState<any>('');
    const [notes, setNotes] = useState<any>('');
    const [origin, setOrigin] = useState<any>('');
    const [type, setType] = useState<any>('');
    const [steps, setSteps] = useState<any>([]);
    const [ingredients, setIngredients] = useState<any>([]);

    function handleRecipeChange(recipeName: any) {
        setRecipeName(recipeName);
    }

    function handleDescChange(description: any) {
        setDescription(description);
    }

    function handleNotesChange(notes: any) {
        setNotes(notes);
    }

    function handleOriginChange(origin: any) {
        setOrigin(origin);
    }

    function handleTypeChange(type: any) {
        setType(type);
    }

    function handleStepsChange(steps: any) {
        setSteps(steps);
    }

    function handleIngredientsChange(ingredients: any) {
        setIngredients(ingredients)
    }

    function handleIngredientsValidation(isValid: boolean) {
        setValidated(isValid);
    }

    const handleSubmit = (event: any) => {
        const form = event.currentTarget;
        if (validated) {
            setValidated(true);
            createNewRecipe();
        } else {
            event.preventDefault();
            event.stopPropagation();
        }
    };

    function createNewRecipe() {

        let recipeData = {
            recipeName,
            description,
            notes,
            origin,
            type,
            steps,
            ingredients
        };

        console.log(recipeData);

        const apiUrl = String(process.env.ADD_RECIPE_API);
        const options = {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json;charset=UTF-8",
            },
            body: JSON.stringify({
                variables: {
                    recipeData
                }
            })
        };

        fetch(apiUrl, options)
            .then((response) => response.json())
            .then((data) => {
                console.log('This is your data', data)
            });
    }

    return (
        <>
            <a className="add-recipe-button" onClick={handleShow}>
            <i className="fa fa-plus icon-add"></i> Add Recipe
            </a>

            <Modal show={show} onHide={handleClose} backdrop="static">
                <Form noValidate onSubmit={handleSubmit}>
                    <Modal.Header closeButton>
                        <Modal.Title>Add New Recipe</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                        <AddRecipeForm
                            handleRecipeChange={handleRecipeChange}
                            handleDescChange={handleDescChange}
                            handleNotesChange={handleNotesChange}
                            handleOriginChange={handleOriginChange}
                            handleTypeChange={handleTypeChange}
                            handleStepsChange={handleStepsChange}
                            handleIngredientsChange={handleIngredientsChange}
                            handleIngredientsValidation={handleIngredientsValidation}
                        />

                    </Modal.Body>
                    <Modal.Footer>
                        <div className='add-recipe-footer'>
                            <div>
                                <Button variant="secondary" onClick={handleClose}>
                                    Close
                                </Button>
                            </div>

                            <div>
                                <Button type="submit" variant="primary">
                                    Create New Recipe
                                </Button></div>
                        </div>
                    </Modal.Footer>
                </Form>
            </Modal>
        </>
    );
}

export default AddRecipeModal;