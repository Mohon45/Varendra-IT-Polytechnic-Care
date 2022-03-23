import React, {Component} from 'react';

class AddReview extends Component {
    state = {
        controls: {
            name: {
                type: InputTypes.TEXT,
                label: 'ডাকঘর',
                placeholder: '',
                validation:{
                    required: true
                },
                columnClass: 'col-md-12',
                valid: false,
                error:'',
                touched: false,
                value: ''
            },
        },
        formIsValid: false,
    }


    render() {
        let content;
        content = (
            <div>

            </div>
        )
        return (
            {content}
        );
    }
}



export default AddReview;