"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const accessLevels_1 = require("./accessLevels");
const document_1 = __importDefault(require("./document"));
class User {
    constructor(name) {
        this.documents = [];
        this.name = name;
        this.id = ++User.totalUser;
    }
    getId() {
        return this.id;
    }
    createDocument(docName) {
        const doc = new document_1.default(docName, this.id);
        this.documents.push(doc);
    }
    grantEditAccess(userId, docId) {
        for (const doc of this.documents) {
            if (doc.getId() == docId) {
                doc.setUserIdAccess(userId, accessLevels_1.AccessLevels.EDITOR);
                console.log('Editor Access granted to user: ', userId);
                return;
            }
        }
        console.log('The doc you are searching is not available');
    }
    grantReadAccess(userId, docId) {
        for (const doc of this.documents) {
            if (doc.getId() == docId) {
                doc.setUserIdAccess(userId, accessLevels_1.AccessLevels.READER);
                console.log('Reader Access granted to user: ', userId);
                return;
            }
        }
        console.log('The doc you are searching is not available');
    }
    getAllDocuments() {
        return this.documents;
    }
}
exports.default = User;
User.totalUser = 0;
