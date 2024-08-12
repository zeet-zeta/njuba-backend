import { Provide } from '@midwayjs/core';
import * as fs from 'fs';
const filePath = 'data/post.json';

@Provide()
export class PostService {
    create(postData) {
        let data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
        data.unshift(postData);
        fs.writeFile(filePath, JSON.stringify(data), () => {
            console.log("update successfully");
        })
    }
    get(category) {
        const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
        return data.filter(item => item.category === category);
    }
    like(username, id) {
        let data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
        const newData = data.map(item =>
            item['time'] === id ?
                { ...item, likes: [...item.likes, username] } :
                item
        );
        fs.writeFile(filePath, JSON.stringify(newData), () => {
            console.log("update successfully");
        })
    }
    unlike(username, id) {
        let data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
        const newData = data.map(item =>
            item['time'] === id ?
                { ...item, likes: item.likes.filter(i => i !== username) } :
                item
        );
        fs.writeFile(filePath, JSON.stringify(newData), () => {
            console.log("update successfully");
        })
    }
    comment(username, jdata) {
        let data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
        const newData = data.map(item =>
            item['time'] === jdata.id ?
                { ...item, comments: [...item.comments, { 'name': username, 'text': jdata.text }] } :
                item
        );
        fs.writeFile(filePath, JSON.stringify(newData), () => {
            console.log("update successfully");
        })
    }
    overview(category) {
        const data = JSON.parse(fs.readFileSync(filePath, 'utf-8')).filter(item => item.category === category);
        const postsCount = data.length;
        const commentsCount = data.reduce((x, y) => x + y.comments.length, 0);
        const likesCount = data.reduce((x, y) => x + y.likes.length, 0);
        return {postsCount, commentsCount, likesCount};
    }
}