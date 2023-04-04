import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function RecipeDetailsHeaderCard({ recipeName, recipeDesc, recipeNotes }: any) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQG789LyKzmzofSlJ-GVWNi0McGxvCMWowwVA&usqp=CAU"></Card.Img>
            <Card.Body>
                <Card.Title>{recipeName}</Card.Title>
                <Card.Text>
                    {recipeDesc}
                </Card.Text>
                <Card.Title>Notes</Card.Title>
                <Card.Text>
                    {recipeNotes}
                </Card.Text>
            </Card.Body>
        </Card>
    );
}

export default RecipeDetailsHeaderCard;