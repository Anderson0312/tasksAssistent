import { Columns } from "../types";
import {v4 as uuidv4 } from 'uuid';
import taskImage from '../assets/images/estudofundo.jpg';
import {getRandomColors} from '../helpers/getRandomColors';

export const Board: Columns = {
    backlog:{
        name:'backlog',
        items: [
            {
                id: uuidv4(),
                title: "Admin panel front-end",
                description: "Lorem Ipsum",
                priority: "Medium",
                deadline: 50,
                image: taskImage,
                alt:'task image',
                tags: [
                    {title: 'Test',...getRandomColors()},
                    {title: 'front',...getRandomColors()},
                ],
            },
        ]
    }
}

