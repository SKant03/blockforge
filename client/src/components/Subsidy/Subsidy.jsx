import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './Subsidy.css'
import { useLocation } from 'react-router-dom';

function BasicExample() {
    const location = useLocation();
    const {contract} = location.contract || {};
    console.log(contract);
    return (
        <Form >
            <div className="form_content">
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>SUBSIDY NAME</Form.Label>
                    <Form.Control type="text" placeholder="enter the benificiary name" />
                    <Form.Text className="text-muted">
                        We'll never share your benificiary with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Grant value</Form.Label>
                    <Form.Control type="password" placeholder="Grant" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </div>
        </Form>
    );
}

export default BasicExample;