// 霄一交易平台 核心数据文件
let goods = [];

// 读取本地数据 完美前后台同步
if(localStorage.getItem("tradeData")){
    goods = JSON.parse(localStorage.getItem("tradeData"));
}else{
    // 初始示范商品数据
    goods = [
        {name:"满级核心MOD",price:"75白金",type:"mod",seller:"霄一玩家",desc:"成品满级，直接可用",status:1},
        {name:"虚空光辉核桃",price:"12白金",type:"walnut",seller:"星际玩家",desc:"全新未拆大量现货",status:1},
        {name:"圣装全套战甲",price:"320白金",type:"warframe",seller:"老玩家",desc:"成品全套无缺失",status:1},
        {name:"阿耶精华",price:"22白金",type:"aye",seller:"材料商人",desc:"长期供货稳定",status:1}
    ];
    localStorage.setItem("tradeData",JSON.stringify(goods));
}