import React from "react";

class MyBorrowedBooks extends React.Component {
    render() {
        return (
            <div>
                <p>
                    {
                        "Ici s'affiche la liste des livres empruntés par l'utilisateur courant"
                    }
                </p>
            </div>
        );
    }
}

export default MyBorrowedBooks;
