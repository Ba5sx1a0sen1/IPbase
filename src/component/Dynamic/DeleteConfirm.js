/**
 * Created by bassxiaosen1 on 2017/10/28.
 */
import React from "react"
import {Modal,message} from "antd"
import {deteleArticle} from "../../services/services"

export default class DeleteConfirm extends React.Component{
    constructor(props){
        super(props);
        this.state={
            visible:false,
            id:this.props.dynamicId
        }
    }

    handleDelete=(id)=>{
        const obj={
            dynamicIds:[id]
        };
        deteleArticle(obj)
            .then(({jsonResult})=>{if (jsonResult.success===true){message.success(jsonResult.msg);this.props.handleChangeTable()}})
            .catch((err)=>message.error(err))
    }

    handleClick=(e)=>{
        e.preventDefault();
        const {id} = this.state;
        const handleDelete=this.handleDelete;
        Modal.confirm({
            title:'删除动态',
            content:'确定删除此动态？删除后无法撤回！',
            onOk:handleDelete.bind(this,id),
        })
    };


    render=()=>{
        return(
            <span>
            <a onClick={this.handleClick}>删除</a>
            </span>
        )

    }
}