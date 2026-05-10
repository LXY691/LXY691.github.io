// 霄一交易站 全局商品数据 + 全部核心功能
// 所有商品统一在这里管理，前后台共用，修改全局同步
let goodsList = [
    {
        id: 1,
        type: "战甲专区",
        name: "高斯Prime全套成品",
        price: "180白金",
        seller: "诚信老商家",
        desc: "满配极化毕业、刷图竞速必备战甲",
        status: "onsale" // onsale在售 / ing交易中 / sold已售出 / down已下架
    },
    {
        id: 2,
        type: "紫卡专区",
        name: "近战双爆极品紫卡",
        price: "360白金",
        seller: "紫卡专营",
        desc: "暴击率+暴击伤害完美词条，无废洗高属性",
        status: "ing"
    },
    {
        id: 3,
        type: "武器专区",
        name: "侍刃Prime毕业满配",
        price: "120白金",
        seller: "武器商家",
        desc: "满极化高配毕业、刷图近战强力武器",
        status: "sold"
    },
    {
        id: 4,
        type: "阿耶精华专区",
        name: "大批量阿耶精华囤货",
        price: "面议",
        seller: "材料专供",
        desc: "外观兑换专用，海量现货长期供货",
        status: "onsale"
    },
    {
        id: 5,
        type: "MOD遗物专区",
        name: "满级核心MOD全套",
        price: "85白金",
        seller: "萌新供货",
        desc: "战甲武器通用热门满级金卡合集",
        status: "down"
    }
];

// 商品一键分享出图功能
function createGoodsShareImg(name, price, desc) {
    let canvas = document.createElement('canvas');
    canvas.width = 500;
    canvas.height = 280;
    let ctx = canvas.getContext('2d');

    ctx.fillStyle = '#0b1229';
    ctx.fillRect(0, 0, 500, 280);

    ctx.strokeStyle = '#a855f7';
    ctx.lineWidth = 3;
    ctx.strokeRect(10, 10, 480, 260);

    ctx.fillStyle = '#ffffff';
    ctx.font = '22px Microsoft Yahei';
    ctx.fillText('霄一交易站 · 商品分享', 30, 50);

    ctx.fillStyle = '#38bdf8';
    ctx.font = '20px Microsoft Yahei';
    ctx.fillText('商品：' + name, 30, 100);

    ctx.fillStyle = '#34d399';
    ctx.font = '20px Microsoft Yahei';
    ctx.fillText('售价：' + price, 30, 150);

    ctx.fillStyle = '#cbd5e1';
    ctx.font = '16px Microsoft Yahei';
    ctx.fillText('简介：' + desc, 30, 200);

    ctx.fillStyle = '#94a3b8';
    ctx.font = '14px Microsoft Yahei';
    ctx.fillText('星际战甲靠谱交易平台 | 霄一交易站', 30, 250);

    let imgUrl = canvas.toDataURL('image/png');
    let a = document.createElement('a');
    a.href = imgUrl;
    a.download = '霄一交易站商品.png';
    a.click();
}

// 导航栏当前页面高亮
window.onload = function(){
    let navList = document.querySelectorAll('.nav a');
    let url = window.location.href;
    for(let i = 0; i < navList.length; i++){
        if(url.indexOf(navList[i].href) !== -1){
            navList[i].style.color = "#a855f7";
        }
    }
}

// 根据状态返回文字样式
function getStatusText(st){
    switch(st){
        case "onsale": return '<span style="color:#34d399">待出售</span>';
        case "ing": return '<span style="color:#facc15">交易中</span>';
        case "sold": return '<span style="color:#94a3b8">已售出</span>';
        case "down": return '<span style="color:#f87171">已下架</span>';
    }
}