import React , {useState,Fragment} from 'react';
import 'react-bootstrap-typeahead/css/Typeahead.css';
import { Typeahead } from 'react-bootstrap-typeahead'; // ES2015
import { Form } from 'react-bootstrap';

const Suggestion = () => {
    const [singleSelections, setSingleSelections] = useState([]);
    const [multiSelections, setMultiSelections] = useState([]);

    return (
        <Fragment>
            <Form.Group>
                <Form.Label>Single Selection</Form.Label>
                <Typeahead
                    id="basic-typeahead-single"
                    labelKey="name"
                    onChange={setSingleSelections}
                    // options={options}
                    placeholder="Choose a state..."
                    selected={singleSelections}
                />
            </Form.Group>
            <Form.Group style={{ marginTop: '20px' }}>
                <Form.Label>Multiple Selections</Form.Label>
                <Typeahead
                    id="basic-typeahead-multiple"
                    labelKey="name"
                    multiple
                    onChange={setMultiSelections}
                    // options={options}
                    placeholder="Choose several states..."
                    selected={multiSelections}
                />
            </Form.Group>
        </Fragment>
    );
};

export default Suggestion;