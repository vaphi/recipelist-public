import * as React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import forEach from "lodash"

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
                    id: recipeId
                }
            })
        };

        fetch(ingredientsApi, ingredientOptions)
            .then((response) => response.json())
            .then((data) => {
                setIngredients(data);
                console.log('This is your data', data)
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
                    id: recipeId
                }
            })
        };

        fetch(stepsApi, stepsOptions)
            .then((response) => response.json())
            .then((data) => {
                setSteps(data);
                console.log('This is your data', data)
            });
    }, [recipe]);

    return (
        <>
            <div className='recipe-detail-container'>
                <div className='recipe-description'>
                    <div>
                        <h1>
                            {recipe.name}
                        </h1>
                    </div>
                </div>

                <div className='recipe-ingredients-list-container'>
                    <div className='recipe-ingredient-list'>
                        {ingredients.map((item) => {
                            return (
                                <>
                                    <span>
                                        {item.unit}
                                        {item.name}
                                    </span>
                                </>
                            );
                        })}
                    </div>
                    <div className='recipe-notes'>
                        {recipe.notes}
                    </div>
                </div>

                <div className='recipe steps'>
                    {steps.map((steps) => {
                        return (
                            <>
                                <span>
                                    {steps.step}
                                    {steps.description}
                                </span>
                            </>
                        );
                    })}
                </div>

            </div>
        </>
    );
}
