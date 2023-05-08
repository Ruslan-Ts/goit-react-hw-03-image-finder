import { Component } from "react";
import { Container, Btn, SearchForm, SearchFormInput, BtnText } from './Searchbar.styled';
import Notiflix from 'notiflix';


class Searchbar extends Component {
    state = {
        value: '',
    };

    handleSubmit = e => {
        e.preventDefault();

        if (this.state.value.trim() === '') {
            return Notiflix.Notify.failure('Type somthing');
        }

        this.props.onSubmit(this.state.value);
        this.props({ value: '' });
    };

    handleNameChange = event => {
    this.setState({ pokemonName: event.currentTarget.value.toLowerCase() });
  };

    render() {
        const { value } = this.state;
        return (
            <Container>
                <SearchForm onSubmit={this.handleSubmit}>
                    <Btn type="submit">
                        <BtnText>Search</BtnText>
                    </Btn>

                    <SearchFormInput
                        value={value}
                        onChange={this.handleNameChange}
                        type="text"
                        autocomplete="off"
                        autofocus
                        placeholder="Search images and photos"
                    />
                </SearchForm>
            </Container>
        );
    };
};

export default Searchbar;