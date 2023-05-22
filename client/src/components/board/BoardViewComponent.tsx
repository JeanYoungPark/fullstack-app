import axios from "axios";
import { useEffect } from "react";
import { useParams } from "react-router-dom"

export const BoardViewComponent = () => {
    const { id } = useParams();

    useEffect(() => {
        axios.get(
            `http://localhost:5000/board/${id}`
        ).then((response) => {
            console.log(response);
        }).catch((error) => {
            console.error(error);
        });
    }, []);
    return (
        <div>
            <h2>게시판 ID: {id}</h2>
        </div>
    )
}
