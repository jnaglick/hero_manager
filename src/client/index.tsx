import { h, render, Component } from 'preact';
import { Skill, Skills } from '../ref/skill'

class Hello extends Component {
    constructor() {
        super();
        fetch('/hello')
        .then(response => response.json())
        .then(({ hello }) => {
            this.setState({ hello });
        })
    }

	render(props: {}, state: { hello: string }) {
		return <div style='color: blue;'>
            hello, { state.hello }
        </div>
	}
}

render(<Hello />, document.body);
