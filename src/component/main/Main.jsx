import React, {useEffect} from 'react';
import './Main.less'
import {useDispatch, useSelector} from "react-redux";
import {getRepos} from "../actions/repos";
import Repo from "./repo/Repo";

const Main = () => {
    const dispatch = useDispatch();
    const repos = useSelector(state => state.reposReducer.items)
    useEffect(()=>{
        dispatch(getRepos())
    }, [])
    return (
        <div>
            {repos.map((rep) =>
                <Repo repo={rep}/>
            )}
        </div>
    );
};

export default Main;