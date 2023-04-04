import { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import "./recipe-ingredients.css"
import { unitTypeSelect } from './model/unit-type.model'
import Button from 'react-bootstrap/Button';
import { isNil } from 'lodash';

function RecipeIngredientsForm(props: any) {

    const [ingredients, setIngredients] = useState<any>([]);

    function isDecimalValidation(index: number): boolean {

        const value = ingredients[index];
        const isNumber = !isNaN(+value.unit)
        if (isNumber) {
            handleIngredientsValidation(true)
            return true;
        } else {
            handleIngredientsValidation(false)
            return false
        }
    }

    function handleChangeOnBlur(i: any, e: any) {
        const ingredientsCopy = [...ingredients];

        if (e.target.name === "unit") {
            const isNumber = !isNaN(+e.target.value)
            if (isNumber) {
                const roundedNum = (Math.round(e.target.value * 4) / 4).toFixed(2);
                ingredientsCopy[i][e.target.name] = roundedNum;
                setIngredients(ingredientsCopy);
                handleIngredientsChange(ingredientsCopy);
            }
        }
    }

    function handleChange(i: any, e: any) {
        const ingredientsCopy = [...ingredients];
        ingredientsCopy[i][e.target.name] = e.target.value;
        if (!isNil(ingredientsCopy[i]['key'] || ingredientsCopy[i]['key'] === '')) {
            ingredientsCopy[i]['key'] = i;
        }
        setIngredients(ingredientsCopy);
        handleIngredientsChange(ingredientsCopy);
    }

    function addFormFields() {
        setIngredients([...ingredients, { unit: 0, unitTypeId: 0, ingredientName: "", key: '' }])
    }

    function removeFormFields(i: number) {
        console.log('before:', ingredients)
        const newState = [...ingredients];
        const newIngredients = newState.splice(i - 1, 1);
        console.log('after:', ingredients)
        setIngredients(newState);
    }

    function handleIngredientsChange(ingredients: any) {
        props.handleIngredientsChange(ingredients);
    }

    function handleIngredientsValidation(isValid: boolean) {
        props.handleIngredientsValidation(isValid);
    }

    return (
        <>
            <>
                {ingredients.map((element: any, index: number) => (
                    <>
                        <Form.Group>
                            <div className="ingredients-container" key={index}>
                                <div className="control remove-icon-container">
                                    <i className="fa fa-times remove-icon" onClick={() => removeFormFields(index)}></i>
                                </div>
                                <div className="control unit-control-container">
                                    <Form.Label>Units {index + 1}</Form.Label>
                                    <Form.Control isInvalid={!isDecimalValidation(index)} value={ingredients[index]['unit']} id='unit-control' name='unit' type='text' placeholder="Enter Unit" onBlur={e => handleChangeOnBlur(index, e)} onChange={e => handleChange(index, e)} />
                                    <Form.Control.Feedback type="invalid">
                                        Must be a number!
                                    </Form.Control.Feedback>
                                </div>
                                <div className="control unit-type-control-container">
                                    <Form.Label>Unit Type {index + 1}</Form.Label>
                                    <Form.Select name='unitTypeId' aria-label="Default select example" onChange={e => handleChange(index, e)}>
                                        {unitTypeSelect.map(option => (
                                            <option key={option.id} value={option.id}>
                                                {option.name}
                                            </option>
                                        ))}
                                    </Form.Select>
                                </div>
                                <div className="control ingredient-control-container">
                                    <Form.Label>Ingredient {index + 1}</Form.Label>
                                    <Form.Control name='ingredientName' type='text' placeholder="Enter Ingredient" onChange={e => handleChange(index, e)} />
                                </div>

                            </div>
                        </Form.Group>
                    </>
                ))}
                <div className='add-ingredient-button-container'>
                    <Button className='btn add-button' variant="custom" size="sm" onClick={addFormFields}>add</Button>
                </div>
            </>
        </>
    );
}

export default RecipeIngredientsForm;