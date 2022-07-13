/**
 * 账户
 */
export const POST_LOGIN_CELLPHONE = "/login/cellphone" // 手机登录
export const POST_LOGIN = "/login" // 邮箱登录
export const POST_LOGIN_QR_KEY = "/login/qr/key" // 二维码key生成
export const POST_LOGIN_QR_CREATE = "/login/qr/create" // 二维码生成
export const POST_LOGIN_QR_CHECK = "/login/qr/check" // 二维码检测扫码状态
// export const POST_LOGIN_REFRESH = "/login/refresh" // 刷新登录
export const POST_CAPTCHA_SEND = "/captcha/sent" // 发送验证码
export const POST_CAPTCHA_VERIFY = "/captcha/verify" // 验证验证码
// export const POST_REGISTER_CELLPHONE = "/register/cellphone" // 注册 && 修改密码
// export const POST_CELLPHONE_EXISTENCE_CHECK = "/cellphone/existence/check" // 检测手机号码是否已注册
// export const POST_ACTIVATE_INIT_PROFILE = "/activate/init/profile" // 初始化昵称
// export const POST_REBIND = "/rebind" // 更换绑定手机
export const POST_LOGOUT = "/logout" // 退出登录
export const POST_LOGIN_STATEUS = "/login/status" // 登录状态

// export const GET_USER_DETAIL = "/user/detail" // 获取用户详情
// export const GET_USER_ACCOUNT = "/user/account" // 获取账户信息
// export const GET_USER_SUBCOUNT = "/user/subcount" // 获取用户信息 && 歌单 && 收藏 && mv && dj数量
// export const GET_USER_LEVEL = "/user/level" // 获取用户等级信息
// export const GET_USER_BINDING = "/user/binding" // 获取用户绑定信息
// export const GET_USER_REPLACEPHONE = "/user/replacephone" // 获取用户绑定手机
// export const GET_USER_UPDATE = "/user/update" // 更新用户信息
// export const GET_AVATAR_UPLOAD = "/avatar/upload" // 更新头像
// export const GET_COUNTRIES_CODE_LIST = "/countries/code/list" // 国家编码列表

export const GET_USER_PLAYLIST = "/user/playlist" // 获取用户歌单
// export const GET_PLAYLIST_UPDATE = "/playlist/update" // 更新歌单
// export const GET_PLAYLIST_DESC_UPDATE = "/playlist/desc/update" // 更新歌单描述
// export const GET_PLAYLIST_NAME_UPDATE = "/playlist/name/update" // 更新歌单名
// export const GET_PLAYLIST_TAGS_UPDATE = "/playlist/tags/update" // 更新歌单标签
// export const GET_PLAYLIST_COVER_UPDATE = "/playlist/cover/update" // 歌单封面上传
// export const GET_PLAYLIST_ORDER_UPDATE = "/playlist/order/update" // 调整歌单顺序
// export const GET_SONG_ORDER_UPDATE = "/song/order/update" // 调整歌曲顺序
// export const GET_USER_COMMENT_HISTORY = "/user/comment/history" // 获取用户历史评论
// export const GET_USER_DJ = "/user/comment/history" // 获取用户电台
// export const GET_USER_FOLLOWS = "/user/follows" // 获取用户关注列表
// export const GET_USER_FOLLOWEDS = "/user/followeds" // 获取用户粉丝列表
// export const GET_USER_EVENT = "/user/event" // 获取用户动态
// export const GET_EVENT_FORWARD = "/event/forward" // 转发用户动态
// export const GET_EVENT_DEL = "/event/del" // 删除用户动态
// export const GET_SHARE_RESOURCE = "/share/resource" // 分享歌曲、歌单、mv、电台、电台节目到动态
// export const GET_COMMENT_EVENT = "/comment/event" // 获取动态评论
// export const GET_FOLLOW = "/follow" // 关注用户 && 取消关注用户
// export const GET_USER_RECORD = "/user/record" // 获取用户播放记录
// export const GET_HOT_TOPIC = "/hot/topic" // 获取热门话题
// export const GET_TOPIC_DETAIL = "/topic/detail" // 获取话题详情
// export const GET_TOPIC_DETAIL_EVENT_HOT = "/topic/detail" // 获取话题详情热门动态
// export const GET_PLAYMODE_INTELLIGENCE_LIST = "/playmode/intelligence/list" // 心动模式 && 智能播放
// export const GET_COMMENT_HOTWALL_LIST = "/comment/hotwall/list" // 云村热评(官方下架,暂不能用)
// export const GET_EVENT = "/event" // 获取动态消息
