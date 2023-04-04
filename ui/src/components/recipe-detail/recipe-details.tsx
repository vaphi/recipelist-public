import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import RecipeDetailsHeaderCard from './reciple-detail-header-card/recipe-details-header-card';
import IngredientsList from './reciple-detail-ingredients-list/reciple-detail-ingredients-list';
import StepsList from './reciple-detail-steps-list/reciple-detail-steps-list';
import "./recipe-details.css";

export interface Steps {
    stepsid: number;
    description: string;
    step: number;
}

export interface ingredients {
    id: number;
    name: string;
    recipeId: number;
    unit: number;
    unitytypeid: number;
}
export default function RecipeDetails() {

    const { recipeId } = useParams();
    const [recipe, setRecipe] = useState<any>({});
    const [ingredients, setIngredients] = useState<ingredients[]>([]);
    const [steps, setSteps] = useState<Steps[]>([]);

    useEffect(() => {

        const apiUrl = 'http://localhost:4200/recipes/findRecipeById';
        const options = {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json;charset=UTF-8",
            },
            body: JSON.stringify({
                variables: {
                    id: recipeId
                }
            })
        };

        fetch(apiUrl, options)
            .then((response) => response.json())
            .then((data) => {
                setRecipe(data);
                console.log('This is your data', data)
            });
    }, []);

    useEffect(() => {

        const ingredientsApi = 'http://localhost:4200/ingredients/findIngredientsByRecipeId';
        const ingredientOptions = {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json;charset=UTF-8",
            },
            body: JSON.stringify({
                variables: {
                    id: Number(recipeId)
                }
            })
        };

        fetch(ingredientsApi, ingredientOptions)
            .then((response) => response.json())
            .then((data) => {
                setIngredients(data);
                console.log('This is your ingredients data', data)
            });

        const stepsApi = 'http://localhost:4200/steps/findStepsByRecipeId';
        const stepsOptions = {
            method: "POST",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json;charset=UTF-8",
            },
            body: JSON.stringify({
                variables: {
                    id: Number(recipeId)
                }
            })
        };

        fetch(stepsApi, stepsOptions)
            .then((response) => response.json())
            .then((data) => {
                setSteps(data);
                console.log('This is your steps data', data)
            });
    }, [recipe]);

    return (
        <>
            <div className='recipe-detail-container'>
                <div className='top-block'>
                    <div className='recipe-description'>
                        <div>
                            <RecipeDetailsHeaderCard recipeNotes={recipe.notes} recipeName={recipe.name} recipeDesc={recipe.description} />
                        </div>
                    </div>

                    <div className='recipe-ingredients-list-container'>
                        <div className='recipe-ingredient-list'>
                            <IngredientsList ingredients={ingredients} />
                        </div>
                    </div>
                </div>

                <div className='recipe-steps'>
                    <StepsList steps={steps} />
                </div>

            </div>
        </>
    );
}
