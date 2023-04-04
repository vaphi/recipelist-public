import ListGroup from 'react-bootstrap/ListGroup';
import "./recipe-details-steps-list.css"

function StepsList({ steps }: any) {
  return (
    <>
    <h2 className='steps-title'>Steps</h2>
      <ListGroup as="ol" numbered>
        {steps.map((steps: any) => {
          return (

            <ListGroup.Item as="li">{steps.description}
            </ListGroup.Item>

          );
        })}
      </ListGroup>
    </>
  );
}

export default StepsList;