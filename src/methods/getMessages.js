// 這裡的"回傳訊息"函式我統一用 provide 引入，當然也可以做全域的方式使用

import mitter from '@/methods/mitter.js'

export default function(response) {
    if(response.data.success){
        mitter.emit('msg', {
            title: response.data.message,
            style: true,
        })
    }else{
        // 因為有些 message 是陣列又是字串，所以這邊統一變陣列型態
        const message = typeof response.data.message === 'string' ? [response.data.message] : response.data.message
        mitter.emit('msg', {
            title: '更新失敗',
            style: false,
            content: message.join('、'),
          })
    }
}