import { useState } from "react";
import {v4 as uuidv4} from "uuid";
import { getRandomColors } from "../../helpers/getRandomColors";


interface Tag{
    title: string;
    bg: string;
    text:string;
}

interface AddModalProps {
    isOpen: boolean;
    onClose:() => void;
    setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    handleAddTask:(taskData:any) => void;
}

const AddModal = ({isOpen, onClose, setOpen, handleAddTask}: AddModalProps) => {
    const initialTaskData = {
        id:uuidv4(),
        title: '',
        description:'',
        priority:'',
        deadline:0,
        image:'',
        alt:'',
        tags:[] as Tag[],
    };

    const [taskData, setTaskData] =useState(initialTaskData);
    const [tagTitle, setTagTitle] = useState('');

    const handleChange = (
        e:React.ChangeEvent<HTMLInputElement|HTMLSelectElement |HTMLTextAreaElement>
    ) => {
        const {name, value} = e.target;
        setTaskData({...taskData, [name]: value});
    };

    const handleImageChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]){
            const reader = new FileReader();
            reader.onload = (e) => {
                if(e.target){
                    setTaskData({...taskData, image:e.target.result as string});
                }
            };
            reader.readAsDataURL(e.target.files[0]);
        }
    };

    const handleAddTag = () => {
        if(tagTitle.trim() !=='') {
            const {bg, text} = getRandomColors();
            const newTag:Tag={title:tagTitle.trim(), bg,text};
            setTaskData({...taskData, tags:[...taskData.tags, newTag]});
            setTagTitle('');
        }
    };

    const closeModal = () => {
        onClose();
        setTaskData(initialTaskData);
    };

    const handleSubmit = () => {
        handleAddTask(taskData);
        closeModal();
    };

    return (
        <div>

        </div>
    )
}; 

