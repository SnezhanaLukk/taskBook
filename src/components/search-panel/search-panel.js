import { Component } from 'react';
import './search-panel.css';

class SearchPanel extends Component {
    constructor(props) {
        super(props);
        this.state = {
            textSearch: ''
        }
    }

    localOnUpdateSearch = (event) => {
        const textSearch = event.target.value;
        this.setState({ textSearch })
        this.props.onUpdateSearch(textSearch)
    }

    render() {
        return (
            <input
                type="text"
                className="form-control search-input"
                placeholder="Найти задачу"
                value={this.state.textSearch}
                onChange={this.localOnUpdateSearch} />
        )
    }
}

export default SearchPanel;