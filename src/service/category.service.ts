import { Provide } from "@midwayjs/core";
const filePath = 'data/category.json';
import * as fs from 'fs';

@Provide()
export class CategoryService {
    get() {
        const data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
        return data['categories'];
    }
    append(newCategory) {
        let data = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
        data['categories'].push(newCategory);
        fs.writeFile(filePath, JSON.stringify(data), () => {
            console.log("update successfully");
        });
    }
}
