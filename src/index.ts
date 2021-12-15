import Document from './models/document';
import User from './models/user';

main()

function main() {

    const user1: User = new User('Nawed');
    const user2: User = new User('Ram');
    user1.createDocument('myfirstDoc');
    user1.createDocument('mysecondDoc')

    const documents: Document[] = user1.getAllDocuments();
    const doc1: Document = documents[0];
    const doc2: Document = documents[1];
    doc1.setContent('My first line in the document', user1.getId());

    doc2.setContent('My first line in the second document', user2.getId());

   
    console.log(doc1.getContent(user1.getId()));
    console.log(doc2.getContent(user2.getId()));

    console.log('Adding access for the user2')
    user1.grantReadAccess(user2.getId(), doc1.getId());


    console.log(doc1.getContent(user2.getId()));
}

/**
 * * To run this application you will need nodejs and typescript installed
 * * If installed, run commmand -> npm install
 * * then run command -> npm start
 */
