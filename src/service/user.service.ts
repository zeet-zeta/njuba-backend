import { Provide } from '@midwayjs/core';
import * as fs from 'fs';
const filePath = 'data/userdata.json';

@Provide()
export class UserService {
  public create(user) {
    let data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    data.push({...user, 'avatar': 'default.jpg'});
    fs.writeFile(filePath,JSON.stringify(data), () => {
      console.log("update successfully");
    })
  }
  public find(target: string): boolean {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    let found = data.find(item => item.username === target);
    return found;
  }
  public check(usr: string, passwd: string): boolean {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    let found = data.find(item => item.username === usr && item.password === passwd);
    return found;
  }
  public filter(usr: string) {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    return data.filter(item => item.username === usr)[0];
  }
  public updateAvatar(usr: string, newAvatar: string) {
    const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
    const updatedList = data.map(item => {
      if (item.username === usr) {
        return { ...item, avatar: newAvatar};
      }
      return item;
    })
    fs.writeFile(filePath,JSON.stringify(updatedList), () => {
      console.log("update successfully");
    })
  }
}