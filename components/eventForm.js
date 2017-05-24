import React, {Component} from 'react';
import axios from 'axios';

class EventForm extends Component {
  constructor(props) {
    super(props);

    axios.get('/api/categories').then((categories) => {
      this.setState({categories: categories})
    });

    this.state = {
      currentUser: null,
      categories: [],
      selectedCategory: null,
      skill_levels: [],
      selected_skill_level: null,
      distances: [],
      selected_distance: null,
      events: [],
      selected_event: null
    }

    this.onInputChange = this.onInputChange.bind(this);

    function renderCats(category) {
      return (
        <option>{category.title}</option>
      )
    }

  }

  onInputChange(event) {
    this.setState({categories: categories})
  }




render() {
  return (
    <select>
      {this.props.state.map(this.renderCats)}
    </select>
  )
}
}

export default EventForm
