import { h, render, Component } from 'preact';
import User from '../model/user'

class Hello extends Component {
    constructor() {
        super();
        fetch('/api/user')
        .then(response => response.json())
        .then(({ users }) => {
            this.setState({ users });
        })
    }

	render(props: {}, { users }: { users: Array<User> }) {
        console.log(users);

        if (!users) {
            return 'loading'
        }

        return <div>
            { 
                users.map((user) =>
                    <div>name: { user.name }</div>
                ) 
            }
        </div>
	}
}

render(<Hello />, document.body);
