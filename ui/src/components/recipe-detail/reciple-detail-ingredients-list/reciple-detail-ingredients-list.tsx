import { find, isNil } from 'lodash';
import { Card } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import { Options, unitTypeSelect } from '../../add-recipe-modal/recipe-ingredients-form/model/unit-type.model';
import "./recipe-details-ingredients-list.css"
import ArrowRightRoundedIcon from '@mui/icons-material/ArrowRightRounded';

function IngredientsList({ ingredients }: any) {

    function getIngredientUnitType(unitTypeId: number): string {

        const unitTypeData: Options | undefined = find(unitTypeSelect, { 'id': unitTypeId });
        return !isNil(unitTypeData) ? unitTypeData.name : 'ct';
    }

    return (
        <>
            <h2 className='ingredient-title'>Ingredients</h2>
            
            {
                <ListGroup horizontal>
                    {ingredients.map((item: any) => {
                        return (
                            <ListGroup.Item className="ingredients-item"><ArrowRightRoundedIcon fontSize="large"></ArrowRightRoundedIcon>{item.unit}{getIngredientUnitType(item.unittypeid)} - {item.name}</ListGroup.Item>
                        );
                    })}
                </ListGroup>
            }
        </>
    );
}

export default IngredientsList;