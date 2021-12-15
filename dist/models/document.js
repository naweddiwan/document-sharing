"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const accessLevels_1 = require("./accessLevels");
class Document {
    constructor(name, userId) {
        Document.totalDocs++;
        this.name = name;
        this.id = Document.totalDocs;
        this.content = '';
        this.userIdtoAccess = new Map();
        this.userIdtoAccess[userId] = accessLevels_1.AccessLevels.OWNER;
    }
    getId() {
        return this.id;
    }
    getName() {
        return this.name;
    }
    getContent(userId) {
        const userAccess = this.userIdtoAccess[userId];
        const readableAccess = [accessLevels_1.AccessLevels.OWNER, accessLevels_1.AccessLevels.READER, accessLevels_1.AccessLevels.EDITOR];
        if (readableAccess.indexOf(userAccess) > -1) {
            return this.content;
        }
        return 'You are not authorised to access this document';
    }
    setContent(content, userId) {
        const userAccess = this.userIdtoAccess[userId];
        if (userAccess != accessLevels_1.AccessLevels.OWNER && userAccess != accessLevels_1.AccessLevels.EDITOR) {
            console.log('Sorry! you are not allowed to access this.');
            return;
        }
        this.content = content;
    }
    getAllUsers() {
        return this.userIdtoAccess;
    }
    getUserIdAccess(userId) {
        return this.userIdtoAccess[userId];
    }
    setUserIdAccess(userId, access) {
        this.userIdtoAccess[userId] = access;
    }
}
exports.default = Document;
Document.totalDocs = 0;
