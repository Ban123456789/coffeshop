// 滑鼠經過顯示下方小提示
import Tooltip from 'bootstrap/js/dist/tooltip.js'

export default function(tipEl, title) {
    const tooltip = new Tooltip(tipEl, {
        boundary: document.body,
        animation: true,
        delay: {
          show: 0,
          hide: 100,
        },
        placement: 'bottom',
        title: title,
      })
  
      tooltip.hide()
}