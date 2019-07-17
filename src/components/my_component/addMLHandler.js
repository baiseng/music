import React from 'react'
import {Modal, Toast, Checkbox} from 'antd-mobile';
const AgreeItem = Checkbox.AgreeItem;
const alert = Modal.alert;
var  alertInstance;

export const addMLHandler = () => (
            alertInstance=alert('新建歌单', (
                <div className={'my_add'}>
                    <p><input type={'text'} placeholder={'请输入歌单名称'} style={{border:'none' ,borderBottom:'1px solid #ccc',color:'#888'}}/></p>
                    <AgreeItem data-seed="logId" onChange={e => console.log('checkbox', e)}>
                        设置为隐私歌单
                    </AgreeItem>

                </div>
            ), [
                {text: '取消', onPress: () => console.log('cancel')},
                {
                    text: '提交',
                    onPress: () =>
                        new Promise((resolve) => {
                            Toast.info('onPress Promise', 1);
                            setTimeout(resolve, 1000);
                        }),
                },
            ],'android')



)

