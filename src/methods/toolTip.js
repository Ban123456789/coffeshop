// 滑鼠經過顯示下方小提示
import Tooltip from 'bootstrap/js/dist/tooltip.js'

export default function(tipEl, title) {
    const tooltip = new Tooltip(tipEl, {
        animation: true,
        placement: 'bottom',
        title: title,
        trigger: 'hover focus'
      })
}