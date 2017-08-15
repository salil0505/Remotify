import React from 'react';
import Firebase from 'firebase';

export default class Light extends React.Component {
    constructor() {
        super();
        this.state = {light_state: false};
    }

    componentDidMount() {
        const db = Firebase.database();
        const ref = db.ref().child('room');

        ref.on('value', snapshot => {
            console.log(snapshot.val().light_state)
            this.setState({
                light_state: snapshot.val().light_state
            })
        });
    }

    toggleLight() {
        Firebase.database().ref('room/').set({
            light_state: !this.state.light_state,
        });
    }
    
    render() {
        return (
            <div>
                <span>This light is {this.state.light_state? "On":"Off"}</span>
                ---
                <button onClick={this.toggleLight.bind(this)}>Turn light {this.state.light_state? "Off":"On"}</button>
            </div>
        );
    }
}