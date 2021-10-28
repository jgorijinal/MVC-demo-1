import  $ from 'jquery'
import './app2.css'
const $tabBar = $('#app2 .tab-bar')
const $tabContent = $('#app2 .tab-content')

$tabBar.on('click','li',(e)=>{
    const $li = $(e.currentTarget)
    const index = $li.index()
    $li.addClass('selected').siblings().removeClass('selected')
    $tabContent.children()
        .eq(index).addClass('active')  //eq()是第几个的意思
        .siblings().removeClass('active')
})
$tabBar.children().eq(0).trigger('click')  //一开始会你帮我点第一个