"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_1 = __importDefault(require("./models/user"));
// console.log('Hello')
// const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
// const prompt = (query) => new Promise((resolve) => rl.question(query, resolve));
// (async () => {
//     try{
//         let input: any = await prompt('');
//         rl.close()
//     }catch(e){
//         console.error("unable to prompt",e)
//     }
// })()
// rl.on('close', () => process.exit(0))
main();
function main() {
    const user1 = new user_1.default('Nawed');
    const user2 = new user_1.default('Ram');
    user1.createDocument('myfirstDoc');
    user1.createDocument('mysecondDoc');
    const documents = user1.getAllDocuments();
    const doc1 = documents[0];
    const doc2 = documents[1];
    doc1.setContent('My first line in the document', user1.getId());
    doc2.setContent('My first line in the second document', user2.getId());
    console.log(doc1.getContent(user1.getId()));
    console.log(doc2.getContent(user2.getId()));
    console.log('Adding access for the user2');
    user1.grantReadAccess(user2.getId(), doc1.getId());
    console.log(doc1.getContent(user2.getId()));
}
