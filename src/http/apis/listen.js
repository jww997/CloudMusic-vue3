/**
 * 听一听
 */
export const GET_ARTIST_LIST = "/artist/list" // 歌手分类列表
// export const GET_ARTIST_SUB = "/artist/sub" // 收藏歌手 && 取消收藏歌手
// export const GET_ARTIST_TOP_SONG = "/artist/top/song" // 歌手热门50首歌曲
// export const GET_ARTIST_SONGS = "/artist/songs" // 歌手全部歌曲
// export const GET_ARTIST_SUBLIST = "/artist/sublist" // 收藏的歌手列表
// export const GET_TOPIC_SUBLIST = "/topic/sublist" // 收藏的专栏
// export const GET_VIDEO_SUB = "/video/sub" // 收藏视频
// export const GET_MV_SUB = "/mv/sub" // 收藏MV && 取消收藏MV
// export const GET_MV_SUBLIST = "/mv/sublist" // 收藏的MV列表
// export const GET_PLAYLIST_CATLIST = "/playlist/catlist" // 歌单分类
export const GET_PLAYLIST_HOT = "/playlist/hot" // 热门歌单分类
export const GET_PLAYLIST = "/top/playlist" // 歌单(网友精选碟)
// export const GET_PLAYLIST_HIGHQUALITY_TAGS = "/playlist/highquality/tags" // 精品歌单标签列表
// export const GET_PLAYLIST_HIGHQUALITY = "/playlist/highquality" // 获取精品歌单
// export const GET_RELATED_PLAYLIST = "/related/playlist" // 相关歌单推荐
export const GET_PLAYLIST_DETAIL = "/playlist/detail" // 获取歌单详情
// export const GET_PLAYLIST_DETAIL_DYNAMIC = "/playlist/detail/dynamic" // 获取歌单详情动态
export const GET_SONG_URL = "/song/url" // 获取音乐url
export const GET_CHECK_MUSIC = "/check/music" // 音乐是否可用
// export const GET_SEARCH = "/search" // 搜索
// export const GET_CLOUDSEARCH = "/cloudsearch" // 搜索(更全)
// export const GET_SEARCH_DEFAULT = "/search/default" // 默认搜索关键词
// export const GET_SEARCH_HOT = "/search/hot" // 热搜列表(简略)
// export const GET_SEARCH_HOT_DETAIL = "/search/hot/detail" // 热搜列表(详细)
// export const GET_SEARCH_SUGGEST = "/search/suggest" // 搜索建议
// export const GET_SEARCH_MULTIMATCH = "/search/multimatch" // 搜索多重匹配
// export const GET_PLAYLIST_CREATE = "/playlist/create" // 新建歌单
// export const GET_PLAYLIST_DELETE = "/playlist/delete" // 删除歌单
// export const GET_PLAYLIST_SUBSCRIBE = "/playlist/subscribe" // 收藏歌单 && 取消收藏歌单
// export const GET_PLAYLIST_SUBSCRIBERS = "/playlist/subscribers" // 歌单收藏者
// export const GET_PLAYLIST_TRACKS = "/playlist/tracks" // 对歌单添加或删除歌曲
// export const GET_PLAYLIST_TRACK_ADD = "/playlist/track/add" // 收藏视频到视频歌单
// export const GET_PLAYLIST_TRACK_DELETE = "/playlist/track/delete" // 删除视频歌单里的视频
// export const GET_PLAYLIST_VIDEO_RECENT = "/playlist/video/recent" // 最近播放的视频
// export const GET_LYRIC = "/lyric" // 获取歌词
export const GET_TOP_SONG = "/top/song" // 新歌速递
// export const GET_HOMEPAGE_BLOCK_PAGE = "/homepage/block/page" // 首页发现
// export const GET_HOMEPAGE_DRAGON_BALL = "/homepage/dragon/ball" // 首页发现圆形图标入口列表
// export const GET_COMMENT_MUSIC = "/comment/music" // 歌曲评论
// export const GET_COMMENT_FLOOR = "/comment/floor" // 楼层评论
// export const GET_COMMENT_ALBUM = "/comment/album" // 专辑评论
// export const GET_COMMENT_PLAYLIST = "/comment/playlist" // 歌单评论
// export const GET_COMMENT_MV = "/comment/mv" // mv评论
// export const GET_COMMENT_DJ = "/comment/dj" // 电台节目评论
// export const GET_COMMENT_VIDEO = "/comment/video" // 视频评论
// export const GET_COMMENT_HOT = "/comment/hot" // 热门评论
// export const GET_COMMENT_NEW = "/comment/new" // 新版评论接口
// export const GET_COMMENT_LIKE = "/comment/like" // 给评论点赞
// export const GET_HUG_COMMENT = "/hug/comment" // 抱一抱评论
// export const GET_COMMENT_HUG_LIST = "/comment/hug/list" // 评论抱一抱列表
// export const GET_COMMENT = "/comment" // 发送评论 && 删除评论
export const GET_HOMEPAGE_BANNER = "/banner" // banner
// export const GET_RESOURCE_LIKE = "/resource/like" // 资源点赞( MV,电台,视频)
// export const GET_PLAYLIST_MYLIKE = "/playlist/mylike" // 获取点赞过的视频
export const GET_SONG_DETAIL = "/song/detail" // 获取歌曲详情
// export const GET_ALBUM = "/album" // 获取专辑内容
// export const GET_ALBUM_DETAIL_DYNAMIC = "/album/detail/dynamic" // 专辑动态信息
// export const GET_ALBUM_SUB = "/album/sub" // 收藏专辑 && 取消收藏专辑
// export const GET_ALBUM_SUBLIST = "/album/sublist" // 获取已收藏专辑列表
// export const GET_ARTISTS = "/artists" // 获取歌手单曲
// export const GET_ARTISTS_MV = "/artists/mv" // 获取歌手mv
// export const GET_ARTISTS_ALBUM = "/artists/album" // 获取歌手专辑
// export const GET_ARTISTS_DESC = "/artists/desc" // 获取歌手描述
// export const GET_ARTISTS_DETAIL = "/artists/detail" // 获取歌手详情
// export const GET_SIMI_ARTISTS = "/simi/artist" // 获取相似歌手
// export const GET_SIMI_PLAYLIST = "/simi/playlist" // 获取相似歌单
// export const GET_SIMI_MV = "/simi/mv" // 获取相似mv
// export const GET_SIMI_SONG = "/simi/song" // 获取相似音乐
// export const GET_SIMI_USER = "/simi/user" // 获取最近5个听了这首歌的用户
// export const GET_RECOMMEND_RESOURCE = "/recommend/resource" // 获取每日推荐歌单
// export const GET_RECOMMEND_SONGS = "/recommend/songs" // 获取每日推荐歌曲
// export const GET_HISTORY_RECOMMEND_SONGS = "/history/recommend/songs" // 获取历史日推可用日期列表
// export const GET_HISTORY_RECOMMEND_SONGS_DETAIL = "/history/recommend/songs/detail" // 获取历史日推详情数据
// export const GET_PERSONALFM = "/personal_fm" // 私人FM
// export const GET_DAILYSIGNIN = "/daily_signin" // 签到
// export const GET_LIKE = "/like" // 喜欢音乐
// export const GET_LIKELIST = "/likelist" // 喜欢音乐列表
// export const GET_FMTRASH = "/fm_trash" // 垃圾桶
// export const GET_TOP_ALBUM = "/top/album" // 新碟上架
// export const GET_ALBUM_NEW = "/album/new" // 全部新碟
// export const GET_ALBUM_NEWEST = "/album/newest" // 最新专辑
// export const GET_SCROBBLE = "/scrobble" // 听歌打卡
// export const GET_TOP_ARTISTS = "/top/artists" // 热门歌手


export const GET_TOPLIST = "/toplist" // 所有榜单
// export const GET_TOPLIST_DETAIL = "/toplist/detail" // 所有榜单内容摘要
export const GET_TOPLIST_ARTIST = "/toplist/artist" // 歌手榜
// export const GET_USER_CLOUD = "/user/cloud" // 云盘
// export const GET_USER_CLOUD_DETAIL = "/user/cloud/detail" // 云盘数据详情
// export const GET_USER_CLOUD_DEL = "/user/cloud/del" // 云盘歌曲删除
// export const GET_CLOUD = "/cloud" // 云盘上传
// export const GET_CLOUD_MATCH = "/cloud/match" // 云盘歌曲信息匹配纠正

// export const GET_DJ_BANNER = "/dj/banner" // 电台banner
export const GET_DJ_PERSONALIZE_RECOMMEND = "/dj/personalize/recommend" // 电台个性推荐
// export const GET_DJ_SUBSCRIBER = "/dj/subscriber" // 电台订阅者列表
// export const GET_USER_AUDIO = "/user/audio" // 用户电台
// export const GET_USER_HOT = "/user/hot" // 热门电台
// export const GET_DJ_PROGRAM_TOPLIST = "/dj/program/toplist" // 电台节目榜
// export const GET_DJ_TOPLIST_PAY = "/dj/toplist/pay" // 电台付费精品
// export const GET_DJ_PROGRAM_TOPLIST_HOURS = "/dj/program/toplist/hours" // 电台24小时节日榜
// export const GET_DJ_TOPLIST_HOURS = "/dj/toplist/hours" // 电台24小时主播榜
// export const GET_DJ_TOPLIST_NEWCOMER = "/dj/toplist/newcomer" // 电台24小时新人榜
// export const GET_DJ_TOPLIST_POPULAR = "/dj/toplist/popular" // 电台最热主播榜
// export const GET_DJ_TOPLIST = "/dj/toplist" // 电台新晋电台榜 && 电台热门电台榜
// export const GET_RADIO_HOT = "/dj/radio/hot" // 类别热门电台
// export const GET_DJ_RECOMMEND = "/dj/recommend" // 电台推荐
// export const GET_DJ_CATELIST = "/dj/catelist" // 电台分类
// export const GET_DJ_RECOMMEND_TYPE = "/dj/recommend/type" // 电台分类推荐
// export const GET_DJ_SUB = "/dj/sub" // 电台订阅
// export const GET_DJ_SUBLIST = "/dj/sublist" // 电台订阅列表
// export const GET_DJ_PAYGIFT = "/dj/paygift" // 电台付费精选
// export const GET_DJ_CATEGORY_EXCLUDEHOT = "/dj/category/excludehot" // 电台非热门类型
// export const GET_DJ_CATEGORY_RECOMMEND = "/dj/category/recommend" // 电台推荐类型
// export const GET_DJ_TOADY_PERFERED = "/dj/today/perfered" // 电台今日优选
// export const GET_DJ_DETAIL = "/dj/detail" // 电台详情
// export const GET_DJ_PROGRAM = "/dj/program" // 电台节目
// export const GET_DJ_PROGRAM_PROGRAM = "/dj/program/program" // 电台节目详情