/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wxc629096798591dd8',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '5bca6c9610010eb7e17e9685c8f24ff9',

  PROVINCE: '山西',
  CITY: '清徐',

  USERS: [
    {
      // 想要发送的人的名字
      name: '臭臭',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oV_WK6FyaG_JX12wqBn-Jc_EcK_E',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: '1_5UagkQ2pYgOj542AGMUC5pnU4WZXayFu_Z5quVu0w',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '11-18',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '臭臭', year: '2002', date: '10-14',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '臭臭', year: '1996', date: '10-14',
        },
        {
          type: '节日', name: '相识纪念日', year: '2019', date: '03-09',
        },
        ],
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2019-06-27' },
        
        ],
    },
 ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: '	1_5UagkQ2pYgOj542AGMUC5pnU4WZXayFu_Z5quVu0w',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oV_WK6FyaG_JX12wqBn-Jc_EcK_E',
    }
],

}

module.exports = USER_CONFIG
