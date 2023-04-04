import Form from 'react-bootstrap/Form';
import RecipeIngredientsForm from '../recipe-ingredients-form/recipe-ingredients-form';
import RecipeStepsForm from '../recipe-steps-form/recipe-steps-form';
import "./add-recipe-form.css"

function AddRecipeForm(props: any) {

    function handleRecipeChange(e: any) {
        props.handleRecipeChange(e.target.value);
    }

    function handleDescChange(e: any) {
        props.handleDescChange(e.target.value);
    }

    function handleNotesChange(e: any) {
        props.handleNotesChange(e.target.value);
    }

    function handleOriginChange(e: any) {
        props.handleOriginChange(e.target.value);
    }

    function handleTypeChange(e: any) {
        props.handleTypeChange(e.target.value);
    }

    function handleStepsChange(steps: []) {
        props.handleStepsChange(steps);
    }

    function handleIngredientsChange(ingredients: []) {
        props.handleIngredientsChange(ingredients);
    }

    function handleIngredientsValidation(isValid: boolean) {
        props.handleIngredientsValidation(isValid);
    }

    return (
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <span >
                <h5 className='sub-headers'>General Info</h5>
            </span>

            <Form.Group controlId="validationCustom01">
                <Form.Label>Recipe Name</Form.Label>
                <Form.Control type="input" placeholder="Enter Recipe Name" onChange={handleRecipeChange} />

                <Form.Label>Description</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Enter Description" onChange={handleDescChange} />

                <Form.Label>Notes</Form.Label>
                <Form.Control as="textarea" rows={3} placeholder="Enter Notes" onChange={handleNotesChange} />

                <Form.Label>Origin</Form.Label>
                <Form.Control type="text" placeholder="Enter Origin" onChange={handleOriginChange} />

                <Form.Label>Type</Form.Label>
                <Form.Control type="text" placeholder="Enter Recipe Type" onChange={handleTypeChange} />
            </Form.Group>
            <span >
                <h5 className='sub-headers'>Ingredients</h5>
            </span>
            <RecipeIngredientsForm handleIngredientsChange={handleIngredientsChange} handleIngredientsValidation={handleIngredientsValidation}></RecipeIngredientsForm>

            <span >
                <h5 className='sub-headers'>Steps</h5>
            </span>
            <RecipeStepsForm handleRecipeChange={handleStepsChange}></RecipeStepsForm>

        </Form.Group>
    );
}

export default AddRecipeForm;