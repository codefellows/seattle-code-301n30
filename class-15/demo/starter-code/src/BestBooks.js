import axios from 'axios';
import React from 'react';
import Books from './Books';
import AddModal from './AddModal';
import { Button, Container } from 'react-bootstrap';
import { withAuth0 } from '@auth0/auth0-react';


class BestBooks extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            books: [],
            addModal: false,
            updateModal: false
        }
    }

    async componentDidMount() {
        this.getBooks();
    }

    getToken = () => {
        return this.props.auth0.getIdTokenClaims()
            .then(res => res.__raw)
            .catch(err => console.error(err))
    }

    getBooks = async () => {
        try {
            const res = await this.props.auth0.getIdTokenClaims();
            const jwt = res.__raw

            const config ={
                headers: {'Authorization': `Bearer ${jwt}`}
            }

            const bookData = await axios(`${process.env.REACT_APP_SERVER}/books`,config);
            this.setState({ books: bookData.data });
        }
        catch (err) { console.error(err) }

        // You need the getToken method for this way to work 
        // this.getToken()
        //     .then(jwt => {
        //         const config = {
        //             headers: { 'Authorization': `Bearer ${jwt}` }
        //         }
        //         return axios.get(`${process.env.REACT_APP_SERVER}/books`, config)
        //     })
        //     .then(bookData => this.setState({ books: bookData.data }))
        //     .catch(err => console.error(err));

    }

    postBook = async (book) => {
        try {
            const res = await this.props.auth0.getIdTokenClaims();
            const jwt = res.__raw

            const config ={
                headers: {'Authorization': `Bearer ${jwt}`}
            }

            let createdBook = await axios.post(`${process.env.REACT_APP_SERVER}/books`, book, config);
            this.setState({ books: [...this.state.books, createdBook.data] })
        }
        catch (err) { console.error(err); }
    }

    putBook = async (book) => {
        try {
            let updatedBook = await axios.put(`${process.env.REACT_APP_SERVER}/books/${book._id}`, book)
            let updatedBookArray = this.state.books.map(existingBook => {
                return existingBook._id === book._id ? updatedBook.data : existingBook;
            })
            this.setState({
                books: updatedBookArray
            });
        }
        catch (err) { console.error(err); }
    }

    deleteBook = async (_id) => {
        try {
            await axios.delete(`${process.env.REACT_APP_SERVER}/books/${_id}`);
            let updatedBooks = this.state.books.filter(book => book._id !== _id);
            this.setState({ books: updatedBooks })
        }
        catch (err) { console.error(err); }
    }

    showAddModal = () => this.setState({ addModal: true });
    hideAddModal = () => this.setState({ addModal: false });

    showUpdateModal = () => this.setState({ updateModal: true });
    hideUpdateModal = () => this.setState({ updateModal: false });

    render() {
        return (
            <Container style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', marginBottom: '10rem' }}>
                <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

                {this.state.books.length > 0 ? (
                    <Books
                        books={this.state.books}
                        putBook={this.putBook}
                        showUpdateModal={this.showUpdateModal}
                        updateModal={this.state.updateModal}
                        hideUpdateModal={this.hideUpdateModal}
                        deleteBook={this.deleteBook}
                    />
                ) : (
                    <h3>No Books Found :(</h3>
                )}
                <Button onClick={this.showAddModal} variant="success">Add Book</Button>
                <AddModal
                    addModal={this.state.addModal}
                    hideAddModal={this.hideAddModal}
                    postBook={this.postBook}
                />
            </Container>
        )
    }
}

export default withAuth0(BestBooks);
