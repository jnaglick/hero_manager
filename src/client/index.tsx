import { h, render, Component } from 'preact';
import { Skill, Skills } from '../ref/skill'

class Hello extends Component {
    doNeedful(selectedSkill: Skill) {
        this.setState({
            selectedSkill
        });
    }

	render(props: {}, state: { selectedSkill: Skill }) {
		return <div style='color: blue;'>
            hai noob
        </div>
	}
}

render(<Hello />, document.body);
