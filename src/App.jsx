import React, { Component } from 'react';

import AppHeader from './AppHeader';
import AppFooter from './AppFooter';
import SearchBar from './SearchBar';
import LinksBox from './LinksBox';
import Categories from './Categories';

import Links from './Links';
import './App.css';

function getSearchString(link) {
  return (link.text + link.category + link.tags).toLowerCase();
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchValue: '',
      category: '',
      isStudent: true,
    };

    this.handleSearchValueChange = this.handleSearchValueChange.bind(this);
    this.handleCatChange = this.handleCatChange.bind(this);
    this.handleIsStudentClick = this.handleIsStudentClick.bind(this);
  }

  handleSearchValueChange(e, value) {
    this.setState({
      searchValue: value.toLowerCase(),
    });
  }

  handleCatChange(name) {
    this.setState({
      category: name,
    });
  }

  handleIsStudentClick() {
    this.setState({
      isStudent: !this.state.isStudent,
    });
  }

  render() {
    let linksList = Links;
    if (this.state.category) {
      linksList = linksList.filter(element => (element.category === this.state.category));
    }
    if (this.state.searchValue) {
      linksList = linksList.filter(element => (
        getSearchString(element).indexOf(this.state.searchValue.toLowerCase()) >= 0
      ));
    }
    linksList = linksList.filter(element => (
      element.audience === 'both'
      || (element.audience === 'students' && this.state.isStudent)
      || (element.audience === 'adults' && !this.state.isStudent)
    ));

    return (
      <div className="container" >
        <AppHeader onSwitchClick={this.handleIsStudentClick} isStudent={this.state.isStudent} />
        <SearchBar
          text={this.state.searchValue}
          onChange={this.handleSearchValueChange}
          isStudent={this.state.isStudent}
        />
        <Categories
          selected={this.state.category}
          onChange={this.handleCatChange}
          isStudent={this.state.isStudent}
        />
        <LinksBox links={linksList} />
      </div>
    );
  }
}

export default App;
