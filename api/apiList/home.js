export default (axios) => ({
  /* 首页-星座 */
  getZodiacHomeAstro(params) {
    return axios.get('api/astro/basic', { params })
  },
  /* 首页-测验推荐 */
  getZodiacHomeQuiz(params) {
    return axios.get('api/quiz/rec', { params })
  },
  /* 星座详情页 */
  getZodiacDetails(params) {
    return axios.get('api/astro/detail', { params })
  },
  /* 星座运势页 */
  getZodiacHoroscope(params) {
    return axios.get('api/astro/horoscope', { params })
  },
  /* 星座-配对 */
  getZodiacComp(params) {
    return axios.get('api/astro/comp', { params })
  },
  /* 星座-所有 */
  getZodiacAll(params) {
    return axios.get('api/astro/all', { params })
  },

  /*---------------以下旧接口--------------*/
  /* 主页 */
  getGameHome(params) {
    return axios.get('api/game/home', { params })
  },
  /* 获取分类 */
  getCategory(params) {
    return axios.get('api/category', { params })
  },
  /* 获取分类下游戏 */
  getGameCategory(params) {
    return axios.get('api/game/category', { params })
  },
  /* 游戏详情 */
  getGameDetail(params) {
    return axios.get('api/game/detail', { params })
  },
  /* 推荐游戏 */
  getGameRec(params) {
    return axios.get('api/game/rec', { params })
  },
  /* 游戏搜索 */
  getGameSearch(params) {
    return axios.get('api/game/search', { params })
  },
  /* 邮箱订阅 */
  postSubscribe(data) {
    return axios.post('api/subscribe', data)
  },
  /* 分类游戏 */
  getGameMenu(params) {
    return axios.get('api/game/menu', { params })
  },
  /* 游戏评论列表 */
  getGameComment(params) {
    return axios.get('api/game/comment', { params })
  },
  /* 游戏评论 */
  postGameComment(data) {
    return axios.post('api/game/comment', data)
  },
  /* 所有游戏 */
  getAllGame(params) {
    return axios.get('api/game', { params })
  },
  /* 欧盟 */
  getGameLocation() {
    return axios.get('api/user/loc')
  },
})
