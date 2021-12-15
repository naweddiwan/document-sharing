import { AccessLevels } from "./accessLevels";

export default class Document {
    private id: number;
    private name: string;
    private content: string;

    public userIdtoAccess: Map<number, AccessLevels>;

    public static totalDocs: number;

    constructor(name: string, userId: number) {
        Document.totalDocs++;
        this.name = name;
        this.id = Document.totalDocs; 
        this.content = '';
        this.userIdtoAccess  = new Map();
        this.userIdtoAccess[userId] = AccessLevels.OWNER;
    }

    public getId() {
        return this.id;
    }

    public getName() {
        return this.name
    }
 
    public getContent(userId: number) {
        const userAccess: AccessLevels = this.userIdtoAccess[userId];
        const readableAccess: AccessLevels[] = [AccessLevels.OWNER, AccessLevels.READER, AccessLevels.EDITOR];
        if(readableAccess.indexOf(userAccess) > -1) {
            return this.content;
        }
        return 'You are not authorised to access this document';
    }

    public setContent(content: string, userId: number) {
        const userAccess: AccessLevels = this.userIdtoAccess[userId];
        if(userAccess != AccessLevels.OWNER && userAccess != AccessLevels.EDITOR) {
            console.log('Sorry! you are not allowed to access this.');
            return;
        }
        this.content = content;
    }

    public getAllUsers() {
        return this.userIdtoAccess;
    }

    public getUserIdAccess(userId: number) {
        return this.userIdtoAccess[userId];
    }

    public setUserIdAccess(userId: number, access: AccessLevels) {
        this.userIdtoAccess[userId] = access;
    }
}
Document.totalDocs = 0;