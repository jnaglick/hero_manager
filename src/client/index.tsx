import { h, render, Component } from 'preact';
import Character from 'model/character'

class Hello extends Component {
    constructor() {
        super();
        fetch('/api/character')
        .then(response => response.json())
        .then(({ characters }) => {
            this.setState({ characters });
        })
    }

	render(props: {}, { characters }: { characters: Array<Character> }) {
        if (!characters) {
            return 'loading'
        }

        return <div>
            { 
                characters.map((character) =>
                    <div>name: { character.str }</div>
                ) 
            }
        </div>
	}
}

render(<Hello />, document.body);
