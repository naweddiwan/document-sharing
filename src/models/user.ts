import { AccessLevels } from "./accessLevels";
import Document from "./document";

export default class User {
    private id: number;
    private name: string;

    private documents: Document[];
    public static totalUser: number;
    constructor(name: string) {
        this.documents = [];
        this.name = name;
        this.id = ++User.totalUser;
    }

    public getId() {
        return this.id;
    }
    public createDocument(docName: string) {
        const doc: Document = new Document(docName, this.id);
        this.documents.push(doc);
    }

    public grantEditAccess(userId: number, docId: number) {
        for(const doc of this.documents) {
            if(doc.getId() == docId) {
                doc.setUserIdAccess(userId, AccessLevels.EDITOR);
                console.log('Editor Access granted to user: ', userId);
                return;
            }
        }
        console.log('The doc you are searching is not available');
    }

    public grantReadAccess(userId: number, docId: number) {
        for(const doc of this.documents) {
            if(doc.getId() == docId) {
                doc.setUserIdAccess(userId, AccessLevels.READER);
                console.log('Reader Access granted to user: ', userId);
                return;
            }
        }
        console.log('The doc you are searching is not available');
    }

    public getAllDocuments() {
        return this.documents;
    }
}

User.totalUser = 0;